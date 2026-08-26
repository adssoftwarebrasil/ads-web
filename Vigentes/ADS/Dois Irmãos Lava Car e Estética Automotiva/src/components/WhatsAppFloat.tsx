import { useState } from 'react';
import { X } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const WHATSAPP_AGENDAR =
  'https://wa.me/5566996156031?text=Olá!%20Gostaria%20de%20agendar%20uma%20lavagem.';

export default function WhatsAppFloat() {
  const [showPopup, setShowPopup] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 transition-all duration-500 opacity-100 translate-y-0">
      {showPopup && (
        <div className="relative bg-white rounded-2xl shadow-2xl p-4 max-w-[220px] animate-fade-in">
          <button
            onClick={() => setShowPopup(false)}
            className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
            aria-label="Fechar"
          >
            <X width={12} height={12} className="lucide lucide-x text-gray-600" />
          </button>
          <div className="flex items-start gap-2 mb-1">
            <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center shrink-0">
              <WhatsAppIcon width={16} height={16} fill="white" />
            </div>
            <div>
              <p className="text-gray-800 font-bold text-xs">Dois Irmãos Car</p>
              <p className="text-green-600 text-[10px]">Online agora</p>
            </div>
          </div>
          <p className="text-gray-600 text-xs leading-relaxed">
            Olá! Agende sua lavagem agora e deixe seu veículo impecável.
          </p>
          <div
            className="absolute -bottom-2 right-10 w-4 h-4 bg-white rotate-45 shadow-sm"
            style={{ zIndex: -1 }}
          ></div>
        </div>
      )}
      <a
        href={WHATSAPP_AGENDAR}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-14 h-14 rounded-full bg-green-500 hover:bg-green-400 shadow-2xl shadow-green-500/40 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group"
        aria-label="Contato via WhatsApp"
      >
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30 group-hover:opacity-0"></div>
        <WhatsAppIcon width={28} height={28} fill="white" />
      </a>
    </div>
  );
}
