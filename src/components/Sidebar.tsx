import { BookOpen, Flower2, Heart, Calculator, Telescope, ScrollText, X } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onTopicClick: (topic: string) => void;
}

const topicsEn = [
  {
    icon: <Flower2 className="w-4 h-4" />,
    label: 'Ayurveda',
    color: 'text-green-600 bg-green-50 hover:bg-green-100',
    questions: ['What is Ayurveda?', 'Tell me about the three Doshas', 'Ayurvedic diet tips', 'Daily routine (Dinacharya)', 'How to boost immunity?', 'Ayurvedic sleep tips'],
  },
  {
    icon: <Heart className="w-4 h-4" />,
    label: 'Yoga & Wellness',
    color: 'text-purple-600 bg-purple-50 hover:bg-purple-100',
    questions: ['What is Yoga?', 'Explain Pranayama', 'Surya Namaskar steps', 'How to meditate?', 'Yoga for stress relief'],
  },
  {
    icon: <BookOpen className="w-4 h-4" />,
    label: 'Philosophy',
    color: 'text-amber-600 bg-amber-50 hover:bg-amber-100',
    questions: ['What are the Vedas?', 'Explain the Upanishads', 'What is Dharma?', 'Tell me about Bhagavad Gita'],
  },
  {
    icon: <Calculator className="w-4 h-4" />,
    label: 'Mathematics',
    color: 'text-blue-600 bg-blue-50 hover:bg-blue-100',
    questions: ['Who was Aryabhata?', 'Ancient Indian Mathematics', 'Story of Zero'],
  },
  {
    icon: <Telescope className="w-4 h-4" />,
    label: 'Astronomy',
    color: 'text-indigo-600 bg-indigo-50 hover:bg-indigo-100',
    questions: ['Ancient Indian Astronomy'],
  },
  {
    icon: <ScrollText className="w-4 h-4" />,
    label: 'History',
    color: 'text-red-600 bg-red-50 hover:bg-red-100',
    questions: ['Who was Sushruta?'],
  },
];

const topicsHi = [
  {
    icon: <Flower2 className="w-4 h-4" />,
    label: 'आयुर्वेद',
    color: 'text-green-600 bg-green-50 hover:bg-green-100',
    questions: ['आयुर्वेद क्या है?', 'तीन दोषों के बारे में बताएं', 'आयुर्वेदिक आहार सुझाव', 'दैनिक दिनचर्या बताएं', 'प्रतिरक्षा कैसे बढ़ाएं?', 'नींद के लिए आयुर्वेदिक सुझाव'],
  },
  {
    icon: <Heart className="w-4 h-4" />,
    label: 'योग और कल्याण',
    color: 'text-purple-600 bg-purple-50 hover:bg-purple-100',
    questions: ['योग क्या है?', 'प्राणायाम समझाएं', 'सूर्य नमस्कार के चरण', 'ध्यान कैसे करें?', 'तनाव राहत के लिए योग'],
  },
  {
    icon: <BookOpen className="w-4 h-4" />,
    label: 'दर्शन',
    color: 'text-amber-600 bg-amber-50 hover:bg-amber-100',
    questions: ['वेद क्या हैं?', 'उपनिषद समझाएं', 'धर्म क्या है?', 'भगवद गीता के बारे में बताएं'],
  },
  {
    icon: <Calculator className="w-4 h-4" />,
    label: 'गणित',
    color: 'text-blue-600 bg-blue-50 hover:bg-blue-100',
    questions: ['आर्यभट्ट कौन थे?', 'प्राचीन भारतीय गणित', 'शून्य की कहानी'],
  },
  {
    icon: <Telescope className="w-4 h-4" />,
    label: 'खगोल विज्ञान',
    color: 'text-indigo-600 bg-indigo-50 hover:bg-indigo-100',
    questions: ['प्राचीन भारतीय खगोल विज्ञान'],
  },
  {
    icon: <ScrollText className="w-4 h-4" />,
    label: 'इतिहास',
    color: 'text-red-600 bg-red-50 hover:bg-red-100',
    questions: ['सुश्रुत कौन थे?'],
  },
];

export default function Sidebar({ isOpen, onClose, onTopicClick }: SidebarProps) {
  const { lang, t } = useLanguage();
  const topics = lang === 'hi' ? topicsHi : topicsEn;

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed lg:static inset-y-0 left-0 z-50 w-72 bg-earth-50 border-r border-earth-200 flex flex-col transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}>
        {/* Header */}
        <div className="p-4 border-b border-earth-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">📚</span>
            <div>
              <h2 className="font-serif text-lg font-semibold text-earth-800">{t('sidebar.title')}</h2>
              <p className="text-xs text-earth-500">{t('sidebar.subtitle')}</p>
            </div>
          </div>
          <button onClick={onClose} className="lg:hidden p-1.5 rounded-lg hover:bg-earth-200 transition-colors">
            <X className="w-5 h-5 text-earth-600" />
          </button>
        </div>

        {/* Topics */}
        <div className="flex-1 overflow-y-auto p-3 space-y-3">
          {topics.map((topic) => (
            <div key={topic.label} className="space-y-1">
              <div className={`flex items-center gap-2 px-3 py-2 rounded-lg font-medium text-sm ${topic.color.split(' ').slice(0, 2).join(' ')}`}>
                {topic.icon}
                <span>{topic.label}</span>
              </div>
              <div className="ml-2 space-y-0.5">
                {topic.questions.map((q) => (
                  <button
                    key={q}
                    onClick={() => {
                      onTopicClick(q);
                      onClose();
                    }}
                    className="w-full text-left px-3 py-1.5 rounded-lg text-xs text-earth-600 hover:bg-earth-100 hover:text-earth-800 transition-colors truncate"
                  >
                    → {q}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-earth-200">
          <div className="bg-gradient-to-br from-saffron-50 to-lotus-50 rounded-xl p-3 text-center">
            <p className="text-xs text-earth-600 font-medium">{t('sidebar.poweredBy')}</p>
            <p className="font-serif text-sm font-semibold text-earth-800">{t('sidebar.iksName')}</p>
            <p className="text-[10px] text-earth-500 mt-1">{t('sidebar.wisdom')}</p>
          </div>
        </div>
      </aside>
    </>
  );
}
