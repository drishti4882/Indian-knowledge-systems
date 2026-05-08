import { useLanguage } from '../hooks/useLanguage';
import { Globe } from 'lucide-react';

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  const toggleLang = () => {
    setLang(lang === 'en' ? 'hi' : 'en');
  };

  return (
    <button
      onClick={toggleLang}
      className="group relative flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-earth-300 bg-white hover:bg-saffron-50 hover:border-saffron-400 transition-all duration-200 shadow-sm"
      title={lang === 'en' ? 'हिंदी में बदलें' : 'Switch to English'}
    >
      <Globe className="w-3.5 h-3.5 text-earth-500 group-hover:text-saffron-600 transition-colors" />
      
      <div className="relative flex items-center">
        {/* Current language indicator */}
        <span className={`text-xs font-bold transition-all duration-200 ${
          lang === 'en' ? 'text-saffron-600' : 'text-earth-400'
        }`}>
          EN
        </span>
        
        <span className="text-earth-300 mx-0.5 text-xs">/</span>
        
        <span className={`text-xs font-bold transition-all duration-200 ${
          lang === 'hi' ? 'text-saffron-600' : 'text-earth-400'
        }`}>
          हिं
        </span>
      </div>

      {/* Active indicator dot */}
      <span className={`absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full transition-colors ${
        lang === 'hi' ? 'bg-saffron-500' : 'bg-sage-500'
      }`} />
    </button>
  );
}
