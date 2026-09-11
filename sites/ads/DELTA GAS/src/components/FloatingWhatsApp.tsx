import { useState } from 'react';
import { X } from 'lucide-react';
import { WhatsAppIcon } from '../icons';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-3 transition-all duration-500 opacity-100 translate-y-0">
      {showTooltip && (
        <div className="relative bg-white rounded-2xl shadow-xl border border-gray-100 px-4 py-3 max-w-[200px] animate-fade-up">
          <button
            className="absolute -top-2 -right-2 bg-gray-200 hover:bg-gray-300 text-gray-600 rounded-full w-5 h-5 flex items-center justify-center transition-colors"
            aria-label="Fechar"
            onClick={() => setShowTooltip(false)}
          >
            <X size={11} />
          </button>
          <p className="text-brand-dark font-semibold text-xs leading-snug">Fale com a gente!</p>
          <p className="text-gray-500 text-xs mt-0.5">Peça seu gás agora pelo WhatsApp</p>
          <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-r border-b border-gray-100 rotate-45"></div>
        </div>
      )}
      <a
        href="https://wa.me/556699814075?text=Ol%C3%A1%2C%20Delta%20G%C3%A1s%21%20Gostaria%20de%20fazer%20um%20pedido."
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-14 h-14 bg-[#25D366] hover:bg-[#20B858] rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
        aria-label="Falar pelo WhatsApp"
      >
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-30 group-hover:opacity-0"></div>
        <WhatsAppIcon size={28} className="text-white" />
      </a>
    </div>
  );
}
