import { createContext, useContext, useState, type ReactNode } from 'react';

export type Language = 'en' | 'hi';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Header
    'app.name': 'Vidya',
    'app.tagline': 'Indian Knowledge System Guide',
    'app.clear': 'Clear',

    // Welcome
    'welcome.greeting': 'Namaste! I\'m',
    'welcome.name': 'Vidya',
    'welcome.subtitle': 'Your guide to the Indian Knowledge System — Ayurveda, Yoga, Philosophy, Mathematics, and more.',
    'welcome.tryAsking': 'Try asking me',

    // Input
    'input.placeholder': 'Ask about Ayurveda, Yoga, Philosophy, Mathematics...',
    'input.disclaimer': 'Vidya provides general knowledge about Indian traditions. Always consult professionals for medical advice.',
    'input.listening': 'Listening... Speak now',

    // Sidebar
    'sidebar.title': 'Explore Topics',
    'sidebar.subtitle': 'Click any topic to learn',
    'sidebar.poweredBy': 'Powered by',
    'sidebar.iksName': 'Indian Knowledge System',
    'sidebar.wisdom': '5000+ years of wisdom',

    // Categories
    'cat.ayurveda': 'Ayurveda',
    'cat.yoga': 'Yoga & Wellness',
    'cat.philosophy': 'Philosophy',
    'cat.mathematics': 'Mathematics',
    'cat.astronomy': 'Astronomy',
    'cat.history': 'History',
    'cat.general': 'General',

    // Features
    'feat.ayurveda': 'Ayurveda',
    'feat.yoga': 'Yoga',
    'feat.philosophy': 'Philosophy',
    'feat.math': 'Math',
    'feat.astronomy': 'Astronomy',
    'feat.history': 'History',

    // Voice
    'voice.speak': 'Read aloud',
    'voice.stop': 'Stop reading',
    'voice.listen': 'Voice input',
    'voice.notSupported': 'Voice not supported in this browser',

    // Language
    'lang.switch': 'हिंदी',
    'lang.current': 'EN',
  },
  hi: {
    // Header
    'app.name': 'विद्या',
    'app.tagline': 'भारतीय ज्ञान प्रणाली मार्गदर्शक',
    'app.clear': 'मिटाएं',

    // Welcome
    'welcome.greeting': 'नमस्ते! मैं हूँ',
    'welcome.name': 'विद्या',
    'welcome.subtitle': 'भारतीय ज्ञान प्रणाली के लिए आपका मार्गदर्शक — आयुर्वेद, योग, दर्शन, गणित, और बहुत कुछ।',
    'welcome.tryAsking': 'मुझसे पूछें',

    // Input
    'input.placeholder': 'आयुर्वेद, योग, दर्शन, गणित के बारे में पूछें...',
    'input.disclaimer': 'विद्या भारतीय परंपराओं के बारे में सामान्य ज्ञान प्रदान करती है। चिकित्सा सलाह के लिए हमेशा विशेषज्ञों से परामर्श करें।',
    'input.listening': 'सुन रहा हूँ... अब बोलिए',

    // Sidebar
    'sidebar.title': 'विषय खोजें',
    'sidebar.subtitle': 'सीखने के लिए क्लिक करें',
    'sidebar.poweredBy': 'संचालित',
    'sidebar.iksName': 'भारतीय ज्ञान प्रणाली',
    'sidebar.wisdom': '5000+ वर्षों का ज्ञान',

    // Categories
    'cat.ayurveda': 'आयुर्वेद',
    'cat.yoga': 'योग और कल्याण',
    'cat.philosophy': 'दर्शन',
    'cat.mathematics': 'गणित',
    'cat.astronomy': 'खगोल विज्ञान',
    'cat.history': 'इतिहास',
    'cat.general': 'सामान्य',

    // Features
    'feat.ayurveda': 'आयुर्वेद',
    'feat.yoga': 'योग',
    'feat.philosophy': 'दर्शन',
    'feat.math': 'गणित',
    'feat.astronomy': 'खगोल विज्ञान',
    'feat.history': 'इतिहास',

    // Voice
    'voice.speak': 'सुनें',
    'voice.stop': 'बंद करें',
    'voice.listen': 'बोलकर पूछें',
    'voice.notSupported': 'इस ब्राउज़र में आवाज़ समर्थित नहीं है',

    // Language
    'lang.switch': 'English',
    'lang.current': 'हिं',
  },
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[lang][key] || translations['en'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}
