import { useState } from 'react';
import { X } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function WhatsAppWidget() {
  const [showBubble, setShowBubble] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {showBubble && (
        <div className="flex items-center gap-2 bg-white rounded-2xl shadow-xl border border-gray-100 px-4 py-3 max-w-[220px] animate-fade-in">
          <p className="text-gray-700 text-sm font-medium flex-1">Olá! Posso te ajudar com um orçamento?</p>
          <button
            className="text-gray-400 hover:text-gray-600 flex-shrink-0"
            aria-label="Fechar"
            onClick={() => setShowBubble(false)}
          >
            <X className="lucide lucide-x" width={14} height={14} strokeWidth={2} />
          </button>
        </div>
      )}
      <a
        href="http://wa.me/559881135450?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20uniformes."
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 group"
        aria-label="Fale conosco no WhatsApp"
        style={{ background: 'linear-gradient(135deg, rgb(37, 211, 102) 0%, rgb(18, 140, 126) 100%)' }}
      >
        <div className="absolute inset-0 rounded-full animate-ping opacity-30" style={{ background: 'rgb(37, 211, 102)' }}></div>
        <WhatsAppIcon className="w-8 h-8 text-white relative z-10" ariaHidden />
      </a>
    </div>
  );
}
