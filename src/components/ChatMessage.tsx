import ReactMarkdown from 'react-markdown';
import { Volume2, VolumeX } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

interface ChatMessageProps {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  category?: string;
  timestamp: Date;
  isSpeaking: boolean;
  onSpeak: (text: string, messageId: string) => void;
  ttsSupported: boolean;
}

const categoryBadgeEn: Record<string, { emoji: string; label: string; color: string }> = {
  ayurveda: { emoji: '🌿', label: 'Ayurveda', color: 'bg-green-100 text-green-700 border-green-200' },
  yoga: { emoji: '🧘', label: 'Yoga', color: 'bg-purple-100 text-purple-700 border-purple-200' },
  philosophy: { emoji: '📿', label: 'Philosophy', color: 'bg-amber-100 text-amber-700 border-amber-200' },
  mathematics: { emoji: '🔢', label: 'Mathematics', color: 'bg-blue-100 text-blue-700 border-blue-200' },
  astronomy: { emoji: '🌟', label: 'Astronomy', color: 'bg-indigo-100 text-indigo-700 border-indigo-200' },
  history: { emoji: '📜', label: 'History', color: 'bg-red-100 text-red-700 border-red-200' },
  general: { emoji: '🙏', label: 'General', color: 'bg-gray-100 text-gray-700 border-gray-200' },
};

const categoryBadgeHi: Record<string, { emoji: string; label: string; color: string }> = {
  ayurveda: { emoji: '🌿', label: 'आयुर्वेद', color: 'bg-green-100 text-green-700 border-green-200' },
  yoga: { emoji: '🧘', label: 'योग', color: 'bg-purple-100 text-purple-700 border-purple-200' },
  philosophy: { emoji: '📿', label: 'दर्शन', color: 'bg-amber-100 text-amber-700 border-amber-200' },
  mathematics: { emoji: '🔢', label: 'गणित', color: 'bg-blue-100 text-blue-700 border-blue-200' },
  astronomy: { emoji: '🌟', label: 'खगोल विज्ञान', color: 'bg-indigo-100 text-indigo-700 border-indigo-200' },
  history: { emoji: '📜', label: 'इतिहास', color: 'bg-red-100 text-red-700 border-red-200' },
  general: { emoji: '🙏', label: 'सामान्य', color: 'bg-gray-100 text-gray-700 border-gray-200' },
};

export default function ChatMessage({ id, role, content, category, timestamp, isSpeaking, onSpeak, ttsSupported }: ChatMessageProps) {
  const isUser = role === 'user';
  const { lang, t } = useLanguage();
  const badges = lang === 'hi' ? categoryBadgeHi : categoryBadgeEn;
  const badge = category ? badges[category] : null;

  return (
    <div className={`flex w-full animate-fadeInUp ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div className={`flex gap-3 max-w-[85%] md:max-w-[75%] ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
        {/* Avatar */}
        <div className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-lg shadow-sm ${
          isUser 
            ? 'bg-gradient-to-br from-saffron-400 to-saffron-600' 
            : 'bg-gradient-to-br from-earth-300 to-earth-500'
        }`}>
          {isUser ? '🙂' : '🪷'}
        </div>

        {/* Message Bubble */}
        <div className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}>
          {/* Category Badge */}
          {!isUser && badge && (
            <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium border mb-1.5 ${badge.color}`}>
              {badge.emoji} {badge.label}
            </span>
          )}

          <div className={`rounded-2xl px-4 py-3 shadow-sm ${
            isUser
              ? 'bg-gradient-to-br from-saffron-500 to-saffron-600 text-white rounded-tr-sm'
              : 'bg-white border border-earth-200 text-earth-900 rounded-tl-sm'
          }`}>
            {isUser ? (
              <p className="text-sm leading-relaxed">{content}</p>
            ) : (
              <div className="markdown-content text-sm">
                <ReactMarkdown
                  components={{
                    h2: ({ children }) => <h2 className="text-lg font-semibold text-earth-800 mt-1 mb-2">{children}</h2>,
                    h3: ({ children }) => <h3 className="text-base font-semibold text-earth-700 mt-3 mb-1">{children}</h3>,
                    h4: ({ children }) => <h4 className="text-sm font-semibold text-earth-700 mt-2 mb-1">{children}</h4>,
                    p: ({ children }) => <p className="mb-2 leading-relaxed text-earth-800">{children}</p>,
                    ul: ({ children }) => <ul className="list-disc pl-5 mb-2 space-y-0.5">{children}</ul>,
                    ol: ({ children }) => <ol className="list-decimal pl-5 mb-2 space-y-0.5">{children}</ol>,
                    li: ({ children }) => <li className="text-earth-700 leading-relaxed">{children}</li>,
                    strong: ({ children }) => <strong className="font-semibold text-saffron-800">{children}</strong>,
                    em: ({ children }) => <em className="text-earth-600 italic">{children}</em>,
                    blockquote: ({ children }) => (
                      <blockquote className="border-l-3 border-saffron-400 pl-3 py-1 my-2 bg-saffron-50 rounded-r-lg italic text-earth-600">
                        {children}
                      </blockquote>
                    ),
                    hr: () => <hr className="border-earth-200 my-3" />,
                  }}
                >
                  {content}
                </ReactMarkdown>
              </div>
            )}
          </div>

          {/* Footer row: timestamp + speak button */}
          <div className={`flex items-center gap-2 mt-1 px-1 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
            <span className="text-[10px] text-earth-400">
              {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </span>

            {/* TTS Button — only on assistant messages */}
            {!isUser && ttsSupported && (
              <button
                onClick={() => onSpeak(content, id)}
                className={`group flex items-center gap-1 px-1.5 py-0.5 rounded-md text-[10px] transition-all ${
                  isSpeaking
                    ? 'bg-saffron-100 text-saffron-700'
                    : 'text-earth-400 hover:text-saffron-600 hover:bg-saffron-50'
                }`}
                title={isSpeaking ? t('voice.stop') : t('voice.speak')}
              >
                {isSpeaking ? (
                  <>
                    <VolumeX className="w-3 h-3" />
                    <span className="hidden sm:inline">{t('voice.stop')}</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="w-3 h-3" />
                    <span className="hidden sm:inline">{t('voice.speak')}</span>
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
