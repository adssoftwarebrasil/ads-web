import { useState } from 'react';
import { X } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { WHATSAPP_URL } from '../lib/scroll';

export default function WhatsAppFloat() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {showTooltip && (
        <div className="bg-white text-gray-800 text-sm font-medium px-4 py-2.5 rounded-2xl shadow-lg flex items-center gap-2 animate-fade-in border border-gray-100">
          <span>Fale conosco agora!</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-gray-400 hover:text-gray-600 transition-colors ml-1"
            aria-label="Fechar"
          >
            <X className="lucide lucide-x" width={14} height={14} />
          </button>
        </div>
      )}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar pelo WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1ebe5d] shadow-xl hover:shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 relative"
      >
        <WhatsAppIcon className="w-7 h-7" fill="white" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-[rgb(206,58,52)] rounded-full border-2 border-white animate-ping"></span>
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-[rgb(206,58,52)] rounded-full border-2 border-white"></span>
      </a>
    </div>
  );
}
