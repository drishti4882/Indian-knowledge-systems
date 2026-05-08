import { suggestedQuestions, dailyTips } from '../data/knowledge';
import { suggestedQuestionsHi, dailyTipsHi } from '../data/knowledgeHi';
import { useLanguage } from '../hooks/useLanguage';
import { useMemo } from 'react';

interface WelcomeScreenProps {
  onQuestionClick: (question: string) => void;
}

export default function WelcomeScreen({ onQuestionClick }: WelcomeScreenProps) {
  const { lang, t } = useLanguage();

  const tips = lang === 'hi' ? dailyTipsHi : dailyTips;
  const questions = lang === 'hi' ? suggestedQuestionsHi : suggestedQuestions;

  const todaysTip = useMemo(() => {
    const idx = new Date().getDate() % tips.length;
    return tips[idx];
  }, [tips]);

  const displayedQuestions = useMemo(() => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 6);
  }, [questions]);

  return (
    <div className="flex-1 flex flex-col items-center justify-center px-4 py-8 animate-fadeInUp">
      {/* Hero */}
      <div className="text-center mb-8">
        <div className="relative inline-block mb-4">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-saffron-300 via-saffron-400 to-lotus-400 flex items-center justify-center text-4xl shadow-lg shadow-saffron-200">
            🪷
          </div>
          <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-sage-400 flex items-center justify-center text-xs animate-pulse-soft">
            ✨
          </div>
        </div>
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-earth-800 mb-2">
          {t('welcome.greeting')} <span className="text-saffron-600">{t('welcome.name')}</span>
        </h1>
        <p className="text-earth-500 text-sm md:text-base max-w-md mx-auto leading-relaxed">
          {t('welcome.subtitle')}
        </p>
      </div>

      {/* Today's Tip */}
      <div className="w-full max-w-lg mb-8">
        <div className="bg-gradient-to-r from-saffron-50 via-white to-sage-50 border border-saffron-200 rounded-2xl p-4 shadow-sm">
          <p className="text-sm text-earth-700 leading-relaxed">
            {todaysTip.replace(/\*\*/g, '').replace(/\*/g, '')}
          </p>
        </div>
      </div>

      {/* Suggested Questions */}
      <div className="w-full max-w-2xl">
        <p className="text-xs font-medium text-earth-400 uppercase tracking-wider text-center mb-3">
          {t('welcome.tryAsking')}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {displayedQuestions.map((q) => (
            <button
              key={q}
              onClick={() => onQuestionClick(q)}
              className="group text-left px-4 py-3 rounded-xl border border-earth-200 bg-white hover:bg-saffron-50 hover:border-saffron-300 transition-all duration-200 shadow-sm hover:shadow"
            >
              <span className="text-sm text-earth-600 group-hover:text-saffron-700 transition-colors">
                {q}
              </span>
              <span className="text-saffron-400 ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                →
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="flex flex-wrap justify-center gap-3 mt-8">
        {[
          { emoji: '🌿', key: 'feat.ayurveda' },
          { emoji: '🧘', key: 'feat.yoga' },
          { emoji: '📿', key: 'feat.philosophy' },
          { emoji: '🔢', key: 'feat.math' },
          { emoji: '🌟', key: 'feat.astronomy' },
          { emoji: '📜', key: 'feat.history' },
        ].map((item) => (
          <span
            key={item.key}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-earth-100 text-earth-600 text-xs font-medium"
          >
            {item.emoji} {t(item.key)}
          </span>
        ))}
      </div>
    </div>
  );
}
