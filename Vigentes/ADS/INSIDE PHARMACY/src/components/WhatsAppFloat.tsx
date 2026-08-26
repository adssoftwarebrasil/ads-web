import { useState } from 'react';
import { X } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { WHATSAPP_URL } from '../lib/scroll';

export default function WhatsAppFloat() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 transition-all duration-500 opacity-100 translate-y-0">
      {showTooltip && (
        <div className="relative flex items-center bg-white rounded-2xl shadow-xl shadow-black/10 px-5 py-3.5 max-w-xs border border-gray-100">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute -top-2 -right-2 w-5 h-5 bg-gray-300 hover:bg-gray-400 rounded-full flex items-center justify-center transition-colors"
          >
            <X width={10} height={10} strokeWidth={2} className="text-gray-600" />
          </button>
          <p className="text-brand-black text-sm font-medium leading-snug">
            Fale com nosso farmacêutico agora!
            <br />
            <span className="text-brand-gray-dark font-normal text-xs">Atendimento rápido e personalizado.</span>
          </p>
          <div className="absolute bottom-3 -right-2 w-3 h-3 bg-white border-r border-b border-gray-100 transform rotate-45"></div>
        </div>
      )}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-16 h-16 bg-[#25d366] hover:bg-[#20b558] rounded-full shadow-2xl shadow-[#25d366]/40 hover:shadow-[#25d366]/60 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
        aria-label="Falar pelo WhatsApp"
      >
        <div className="absolute inset-0 rounded-full bg-[#25d366] animate-ping opacity-30"></div>
        <WhatsAppIcon width={32} height={32} className="w-8 h-8 text-white relative z-10" />
      </a>
    </div>
  );
}
