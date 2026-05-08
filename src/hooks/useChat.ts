import { useState, useCallback } from 'react';
import type { Language } from './useLanguage';
import { api } from '../services/api';
import { findBestResponse, getDefaultResponse, dailyTips } from '../data/knowledge';
import { findBestResponseHi, getDefaultResponseHi, dailyTipsHi } from '../data/knowledgeHi';

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  category?: string;
  timestamp: Date;
}

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

interface UseChatOptions {
  useBackend?: boolean; // If true, use the backend API; if false, use local knowledge
}

export function useChat(lang: Language, options: UseChatOptions = {}) {
  const { useBackend = false } = options;
  
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const clearMessages = useCallback(() => {
    setMessages([]);
    setIsTyping(false);
  }, []);

  const sendMessage = useCallback(async (userMessage: string) => {
    const trimmed = userMessage.trim();
    if (!trimmed) return;

    // Add user message
    const userMsg: Message = {
      id: generateId(),
      role: 'user',
      content: trimmed,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    try {
      if (useBackend) {
        // Use backend API
        const response = await api.sendMessage(trimmed, lang);
        
        const assistantMsg: Message = {
          id: response.id || generateId(),
          role: 'assistant',
          content: response.message,
          category: response.category,
          timestamp: new Date(response.timestamp),
        };

        setMessages(prev => [...prev, assistantMsg]);
      } else {
        // Use local knowledge base
        await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 1200));

        let responseContent: string;
        let category: string | undefined;

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

        // Possibly add a daily tip
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
      }
    } catch (error) {
      console.error('Chat error:', error);
      
      // Fallback to local on error
      const errorMsg: Message = {
        id: generateId(),
        role: 'assistant',
        content: lang === 'hi' 
          ? '## ❌ त्रुटि\n\nक्षमा करें, कुछ गलत हो गया। कृपया पुनः प्रयास करें।'
          : '## ❌ Error\n\nSorry, something went wrong. Please try again.',
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsTyping(false);
    }
  }, [lang, useBackend]);

  return {
    messages,
    isTyping,
    sendMessage,
    clearMessages,
  };
}
