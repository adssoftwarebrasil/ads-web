import { useState } from 'react';
import { X } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function WhatsAppFloat() {
  const [showTip, setShowTip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 transition-all duration-500 opacity-100 translate-y-0">
      {showTip && (
        <div className="bg-white rounded-2xl rounded-br-sm shadow-xl border border-gray-100 px-4 py-3 max-w-56 animate-fade-in relative">
          <button
            className="absolute -top-2 -right-2 w-5 h-5 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors"
            aria-label="Fechar"
            onClick={() => setShowTip(false)}
          >
            <X size={10} className="lucide lucide-x text-gray-600" />
          </button>
          <p className="text-gray-700 text-xs font-medium leading-snug">Oi! Posso ajudar com sua fórmula? 💊</p>
          <p className="text-gray-400 text-xs mt-0.5">Resposta rápida no WhatsApp</p>
        </div>
      )}
      <a
        href="http://wa.me/5516991594153"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco no WhatsApp"
        className="w-14 h-14 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-transform duration-200 animate-float"
        style={{ backgroundColor: 'rgb(37, 211, 102)' }}
      >
        <WhatsAppIcon size={28} fill="white" />
      </a>
    </div>
  );
}
