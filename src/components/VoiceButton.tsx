import { Mic, MicOff } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

interface VoiceButtonProps {
  isListening: boolean;
  isSupported: boolean;
  onToggle: () => void;
}

export default function VoiceButton({ isListening, isSupported, onToggle }: VoiceButtonProps) {
  const { t } = useLanguage();

  if (!isSupported) return null;

  return (
    <button
      type="button"
      onClick={onToggle}
      className={`shrink-0 w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-200 ${
        isListening
          ? 'bg-gradient-to-br from-red-500 to-red-600 text-white shadow-md shadow-red-200 animate-pulse-soft'
          : 'bg-earth-100 text-earth-500 hover:bg-earth-200 hover:text-earth-700'
      }`}
      title={isListening ? t('voice.stop') : t('voice.listen')}
    >
      {isListening ? (
        <MicOff className="w-4.5 h-4.5" />
      ) : (
        <Mic className="w-4.5 h-4.5" />
      )}
    </button>
  );
}
