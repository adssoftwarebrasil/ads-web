import { useState } from 'react';
import { X } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function FloatingWhatsApp() {
  const [showBubble, setShowBubble] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 transition-all duration-500 opacity-100 translate-y-0">
      {showBubble && (
        <div className="bg-white text-gray-800 text-xs font-medium rounded-2xl shadow-2xl px-4 py-3 max-w-[200px] text-right relative border border-gray-100">
          <button
            onClick={() => setShowBubble(false)}
            className="absolute -top-2 -left-2 w-5 h-5 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors"
          >
            <X className="lucide lucide-x" width={10} height={10} strokeWidth={2} />
          </button>
          Fale conosco agora e solicite seu orçamento gratuito!
          <div className="absolute -bottom-2 right-5 w-4 h-4 bg-white border-r border-b border-gray-100 transform rotate-45"></div>
        </div>
      )}
      <a
        href="https://wa.me/5566999538963?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20serviços%20contábeis."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar pelo WhatsApp"
        className="group relative w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-green-500/40"
      >
        <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-30"></span>
        <WhatsAppIcon className="w-7 h-7 relative z-10" />
      </a>
    </div>
  );
}
