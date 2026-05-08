import { useState, useCallback, useEffect, useRef } from 'react';
import type { Language } from './useLanguage';

interface UseTTSReturn {
  isSpeaking: boolean;
  speakingMessageId: string | null;
  isSupported: boolean;
  speak: (text: string, messageId: string) => void;
  stop: () => void;
}

function stripMarkdown(text: string): string {
  return text
    .replace(/#{1,6}\s?/g, '') // headers
    .replace(/\*\*([^*]+)\*\*/g, '$1') // bold
    .replace(/\*([^*]+)\*/g, '$1') // italic
    .replace(/`([^`]+)`/g, '$1') // inline code
    .replace(/>\s?/g, '') // blockquotes
    .replace(/[-*]\s/g, '') // list markers
    .replace(/\d+\.\s/g, '') // numbered lists
    .replace(/---/g, '') // horizontal rules
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // links
    .replace(/\n{2,}/g, '. ')
    .replace(/\n/g, ' ')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

export function useTTS(lang: Language): UseTTSReturn {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [speakingMessageId, setSpeakingMessageId] = useState<string | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const isSupported = typeof window !== 'undefined' && 'speechSynthesis' in window;

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (isSupported) {
        window.speechSynthesis.cancel();
      }
    };
  }, [isSupported]);

  const speak = useCallback((text: string, messageId: string) => {
    if (!isSupported) return;

    // If already speaking the same message, stop it
    if (isSpeaking && speakingMessageId === messageId) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      setSpeakingMessageId(null);
      return;
    }

    // Stop any current speech
    window.speechSynthesis.cancel();

    const cleanText = stripMarkdown(text);
    const utterance = new SpeechSynthesisUtterance(cleanText);
    
    utterance.lang = lang === 'hi' ? 'hi-IN' : 'en-IN';
    utterance.rate = 0.9;
    utterance.pitch = 1.0;
    utterance.volume = 1.0;

    // Try to find a good voice
    const voices = window.speechSynthesis.getVoices();
    const targetLang = lang === 'hi' ? 'hi' : 'en';
    const preferredVoice = voices.find(v => v.lang.startsWith(targetLang) && v.localService)
      || voices.find(v => v.lang.startsWith(targetLang));
    
    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }

    utterance.onstart = () => {
      setIsSpeaking(true);
      setSpeakingMessageId(messageId);
    };

    utterance.onend = () => {
      setIsSpeaking(false);
      setSpeakingMessageId(null);
    };

    utterance.onerror = () => {
      setIsSpeaking(false);
      setSpeakingMessageId(null);
    };

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  }, [isSupported, lang, isSpeaking, speakingMessageId]);

  const stop = useCallback(() => {
    if (!isSupported) return;
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
    setSpeakingMessageId(null);
  }, [isSupported]);

  return {
    isSpeaking,
    speakingMessageId,
    isSupported,
    speak,
    stop,
  };
}
