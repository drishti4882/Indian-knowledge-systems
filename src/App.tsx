import { useState, useRef, useEffect, useCallback } from 'react';
import { Send, Menu, Trash2, ArrowDown } from 'lucide-react';
import ChatMessage from './components/ChatMessage';
import TypingIndicator from './components/TypingIndicator';
import WelcomeScreen from './components/WelcomeScreen';
import Sidebar from './components/Sidebar';
import LanguageToggle from './components/LanguageToggle';
import VoiceButton from './components/VoiceButton';
import { LanguageProvider, useLanguage } from './hooks/useLanguage';
import { useVoiceInput } from './hooks/useVoiceInput';
import { useTTS } from './hooks/useTTS';
import { findBestResponse, getDefaultResponse, dailyTips } from './data/knowledge';
import { findBestResponseHi, getDefaultResponseHi, dailyTipsHi } from './data/knowledgeHi';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  category?: string;
  timestamp: Date;
}

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

function ChatApp() {
  const { lang, t } = useLanguage();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Voice input hook
  const voiceInput = useVoiceInput(lang);

  // Text-to-speech hook
  const tts = useTTS(lang);

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  // Handle scroll position for "scroll to bottom" button
  const handleScroll = useCallback(() => {
    if (chatContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = chatContainerRef.current;
      setShowScrollDown(scrollHeight - scrollTop - clientHeight > 150);
    }
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // When voice transcript is ready, populate the input
  useEffect(() => {
    if (voiceInput.transcript) {
      setInput(voiceInput.transcript);
    }
  }, [voiceInput.transcript]);

  // When voice stops listening and we have a transcript, auto-send
  useEffect(() => {
    if (!voiceInput.isListening && voiceInput.transcript.trim()) {
      // Small delay to let user see the transcript
      const timer = setTimeout(() => {
        processMessage(voiceInput.transcript.trim());
        voiceInput.resetTranscript();
      }, 500);
      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [voiceInput.isListening]);

  const processMessage = useCallback((userMessage: string) => {
    const trimmed = userMessage.trim();
    if (!trimmed) return;

    // Stop any TTS
    tts.stop();

    // Add user message
    const userMsg: Message = {
      id: generateId(),
      role: 'user',
      content: trimmed,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Simulate thinking delay
    const delay = 800 + Math.random() * 1200;
    setTimeout(() => {
      let responseContent: string;
      let category: string | undefined;

      // Use the appropriate language knowledge base
      if (lang === 'hi') {
        const result = findBestResponseHi(trimmed) || findBestResponse(trimmed);
        if (result) {
          responseContent = result.response;
          category = result.category;
        } else {
          responseContent = getDefaultResponseHi(trimmed);
          category = undefined;
        }
      } else {
        const result = findBestResponse(trimmed);
        if (result) {
          responseContent = result.response;
          category = result.category;
        } else {
          responseContent = getDefaultResponse(trimmed);
          category = undefined;
        }
      }

      // Possibly add a daily tip at the end
      const shouldAddTip = Math.random() < 0.3 && category;
      if (shouldAddTip) {
        const tips = lang === 'hi' ? dailyTipsHi : dailyTips;
        const tip = tips[Math.floor(Math.random() * tips.length)];
        responseContent += `\n\n---\n\n${tip}`;
      }

      const assistantMsg: Message = {
        id: generateId(),
        role: 'assistant',
        content: responseContent,
        category,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, assistantMsg]);
      setIsTyping(false);
    }, delay);
  }, [lang, tts]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    processMessage(input);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      processMessage(input);
    }
  };

  const clearChat = () => {
    setMessages([]);
    setIsTyping(false);
    tts.stop();
  };

  const handleQuestionClick = (question: string) => {
    processMessage(question);
    inputRef.current?.focus();
  };

  const handleVoiceToggle = () => {
    if (voiceInput.isListening) {
      voiceInput.stopListening();
    } else {
      voiceInput.startListening();
    }
  };

  // Auto-resize textarea
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = 'auto';
      inputRef.current.style.height = Math.min(inputRef.current.scrollHeight, 120) + 'px';
    }
  }, [input]);

  const hasMessages = messages.length > 0;

  return (
    <div className="h-screen flex bg-earth-50 overflow-hidden">
      {/* Sidebar */}
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onTopicClick={handleQuestionClick}
      />

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col min-w-0 relative">
        {/* Header */}
        <header className="shrink-0 bg-white/80 backdrop-blur-md border-b border-earth-200 px-4 py-3 flex items-center justify-between z-30">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 rounded-lg hover:bg-earth-100 transition-colors"
            >
              <Menu className="w-5 h-5 text-earth-600" />
            </button>
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-saffron-400 to-lotus-500 flex items-center justify-center text-lg shadow-sm">
                🪷
              </div>
              <div>
                <h1 className="font-serif text-lg font-semibold text-earth-800 leading-tight">
                  {t('app.name')}
                </h1>
                <p className="text-[11px] text-earth-500 leading-tight flex items-center gap-1">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-sage-400" />
                  {t('app.tagline')}
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Language Toggle */}
            <LanguageToggle />

            {hasMessages && (
              <button
                onClick={clearChat}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-earth-500 hover:text-red-600 hover:bg-red-50 transition-colors"
                title="Clear chat"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{t('app.clear')}</span>
              </button>
            )}
          </div>
        </header>

        {/* Messages Area */}
        <div
          ref={chatContainerRef}
          onScroll={handleScroll}
          className="flex-1 overflow-y-auto chat-gradient"
        >
          {!hasMessages ? (
            <WelcomeScreen onQuestionClick={handleQuestionClick} />
          ) : (
            <div className="max-w-3xl mx-auto px-4 py-6 space-y-5">
              {messages.map((msg) => (
                <ChatMessage
                  key={msg.id}
                  id={msg.id}
                  role={msg.role}
                  content={msg.content}
                  category={msg.category}
                  timestamp={msg.timestamp}
                  isSpeaking={tts.speakingMessageId === msg.id}
                  onSpeak={tts.speak}
                  ttsSupported={tts.isSupported}
                />
              ))}
              {isTyping && <TypingIndicator />}
              <div ref={messagesEndRef} />
            </div>
          )}
        </div>

        {/* Scroll to bottom button */}
        {showScrollDown && (
          <div className="absolute bottom-24 right-8 z-20">
            <button
              onClick={scrollToBottom}
              className="p-2 rounded-full bg-white border border-earth-300 shadow-lg hover:bg-earth-50 transition-colors"
            >
              <ArrowDown className="w-4 h-4 text-earth-600" />
            </button>
          </div>
        )}

        {/* Listening indicator */}
        {voiceInput.isListening && (
          <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 animate-fadeInUp">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-200 shadow-lg">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500" />
              </span>
              <span className="text-sm font-medium text-red-700">
                {t('input.listening')}
              </span>
            </div>
          </div>
        )}

        {/* Input Area */}
        <div className="shrink-0 bg-white/80 backdrop-blur-md border-t border-earth-200 px-4 py-3">
          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
            <div className="flex items-end gap-2">
              {/* Voice Button */}
              <VoiceButton
                isListening={voiceInput.isListening}
                isSupported={voiceInput.isSupported}
                onToggle={handleVoiceToggle}
              />

              <div className="flex-1 relative">
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder={t('input.placeholder')}
                  className="w-full resize-none rounded-2xl border border-earth-300 bg-white px-4 py-3 pr-4 text-sm text-earth-800 placeholder:text-earth-400 focus:outline-none focus:ring-2 focus:ring-saffron-400 focus:border-transparent transition-all"
                  rows={1}
                  disabled={isTyping}
                />
              </div>
              <button
                type="submit"
                disabled={!input.trim() || isTyping}
                className="shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-saffron-500 to-saffron-600 text-white flex items-center justify-center shadow-sm hover:shadow-md hover:from-saffron-600 hover:to-saffron-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200"
              >
                <Send className="w-4.5 h-4.5" />
              </button>
            </div>
            <p className="text-center text-[10px] text-earth-400 mt-2">
              {t('input.disclaimer')}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <ChatApp />
    </LanguageProvider>
  );
}
