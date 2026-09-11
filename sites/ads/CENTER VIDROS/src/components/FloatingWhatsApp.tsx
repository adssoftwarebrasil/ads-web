import { useState } from 'react';
import { X } from 'lucide-react';
import { WhatsAppIcon } from './icons';

export default function FloatingWhatsApp() {
  const [showBubble, setShowBubble] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3 transition-all duration-500 opacity-100 translate-y-0">
      {showBubble && (
        <div className="relative bg-white rounded-2xl shadow-2xl px-4 py-3 max-w-xs animate-slide-in-right">
          <button
            onClick={() => setShowBubble(false)}
            className="absolute -top-2 -right-2 w-5 h-5 bg-gray-400 hover:bg-gray-600 rounded-full flex items-center justify-center text-white transition-colors"
            aria-label="Fechar"
          >
            <X width={10} height={10} />
          </button>
          <p className="text-brand-dark text-sm font-semibold">Precisa de um orçamento?</p>
          <p className="text-gray-500 text-xs mt-0.5">Fale com a gente agora pelo WhatsApp!</p>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
            <div className="w-0 h-0 border-t-8 border-b-8 border-l-8 border-transparent border-l-white"></div>
          </div>
        </div>
      )}
      <a
        href="http://wa.me/559888677636?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20um%20orçamento."
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-16 h-16 bg-[#25D366] hover:bg-[#1dbd5b] rounded-full flex items-center justify-center shadow-2xl shadow-green-600/40 hover:scale-110 transition-all duration-300 group"
        aria-label="Falar pelo WhatsApp"
      >
        <WhatsAppIcon className="w-8 h-8 fill-white" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse-slow"></span>
      </a>
    </div>
  );
}
