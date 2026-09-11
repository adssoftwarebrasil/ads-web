import { useState } from 'react';
import { X } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';
import WhatsAppIcon from './WhatsAppIcon';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-3 transition-all duration-500 opacity-100 translate-y-0">
      {showTooltip && (
        <div className="relative bg-white text-gray-800 text-sm font-medium px-4 py-3 rounded-2xl shadow-xl max-w-[220px] text-right border border-gray-100">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute -top-2 -left-2 w-5 h-5 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors"
          >
            <X className="lucide lucide-x text-gray-600" width={11} height={11} />
          </button>
          Precisa de ajuda? Fale com a MTTORK agora mesmo!
          <div className="absolute bottom-3 right-[-6px] w-3 h-3 bg-white border-r border-b border-gray-100 rotate-[-45deg]"></div>
        </div>
      )}
      <div className="relative">
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40"></span>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar no WhatsApp"
          className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#1ebe5d] rounded-full shadow-2xl shadow-green-500/40 transition-all duration-200 hover:scale-110"
        >
          <WhatsAppIcon className="w-7 h-7" fill="white" />
        </a>
      </div>
    </div>
  );
}
