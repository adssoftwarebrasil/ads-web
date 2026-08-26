import { useState } from 'react';
import { X } from 'lucide-react';
import WhatsappIcon from './WhatsappIcon';

export default function FloatingWhatsapp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 transition-all duration-500 opacity-100 translate-y-0">
      {showTooltip && (
        <div className="bg-white text-brand-dark text-sm font-semibold px-4 py-2.5 rounded-2xl shadow-xl border border-green-100 whitespace-nowrap animate-fade-in relative">
          Fale conosco no WhatsApp!
          <button
            className="ml-2 text-gray-400 hover:text-gray-600 inline-flex items-center"
            onClick={() => setShowTooltip(false)}
            aria-label="Fechar"
          >
            <X width={12} height={12} className="lucide lucide-x" />
          </button>
          <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-r border-t border-green-100 rotate-45"></div>
        </div>
      )}
      <a
        href="http://wa.me/5561992574282?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informações%20sobre%20baterias."
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 hover:shadow-green-400/40 transition-all duration-200"
        aria-label="Falar no WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30"></span>
        <WhatsappIcon className="w-8 h-8 relative z-10" fill="white" />
      </a>
    </div>
  );
}
