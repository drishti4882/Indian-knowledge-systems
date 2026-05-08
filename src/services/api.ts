import type { Language } from '../hooks/useLanguage';

// Auto-detect API URL: Use relative /api path on Vercel, localhost for local dev
function getApiBaseUrl(): string {
  // Check if we're on Vercel (production)
  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname;
    // If on Vercel or production domain, use relative path
    if (hostname !== 'localhost' && hostname !== '127.0.0.1') {
      return '/api';
    }
  }
  // Local development - use localhost backend
  return 'http://localhost:3001/api';
}

const API_BASE_URL = getApiBaseUrl();

interface ChatResponse {
  id: string;
  message: string;
  category?: string;
  timestamp: string;
  tip?: string;
}

interface TipResponse {
  tip: string;
  index?: number;
}

interface QuestionsResponse {
  questions: string[];
}

class ApiService {
  private baseUrl: string;

  constructor(baseUrl: string = API_BASE_URL) {
    this.baseUrl = baseUrl;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(error.message || `HTTP error! status: ${response.status}`);
    }

    return response.json();
  }

  // Chat endpoint
  async sendMessage(message: string, language: Language = 'en'): Promise<ChatResponse> {
    return this.request<ChatResponse>('/chat', {
      method: 'POST',
      body: JSON.stringify({ message, language }),
    });
  }

  // Tips endpoints
  async getDailyTip(language: Language = 'en'): Promise<TipResponse> {
    return this.request(`/tips?lang=${language}`);
  }

  async getRandomTip(language: Language = 'en'): Promise<{ tip: string }> {
    return this.request(`/tips?lang=${language}&type=random`);
  }

  async getAllTips(language: Language = 'en'): Promise<{ tips: string[]; count: number }> {
    return this.request(`/tips?lang=${language}&type=all`);
  }

  // Questions endpoints
  async getSuggestedQuestions(
    language: Language = 'en',
    count: number = 6,
    shuffle: boolean = true
  ): Promise<QuestionsResponse> {
    return this.request(`/questions?lang=${language}&count=${count}&shuffle=${shuffle}`);
  }

  async getAllQuestions(language: Language = 'en'): Promise<QuestionsResponse> {
    return this.request(`/questions?lang=${language}&type=all`);
  }

  async getQuestionsByCategory(language: Language = 'en') {
    return this.request(`/questions?lang=${language}&type=categories`);
  }

  // Health check
  async healthCheck(): Promise<{ status: string; message: string; timestamp: string }> {
    return this.request('/health');
  }
}

// Export singleton instance
export const api = new ApiService();

// Export class for custom instances
export { ApiService };
