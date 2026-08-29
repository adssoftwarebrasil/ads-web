import { useState } from 'react';
import { X } from 'lucide-react';
import WhatsappIcon from './WhatsappIcon';

export default function WhatsappFloat() {
  const [showTip, setShowTip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {showTip && (
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 px-4 py-3 max-w-[220px] flex items-start gap-2 animate-fade-in">
          <p className="text-gray-700 text-sm leading-snug flex-1">
            <span className="font-bold text-[#0131AC]">Fale conosco</span> pelo WhatsApp e tire suas
            dúvidas agora!
          </p>
          <button
            className="text-gray-300 hover:text-gray-500 flex-shrink-0 mt-0.5"
            aria-label="Fechar"
            onClick={() => setShowTip(false)}
          >
            <X size={14} className="lucide lucide-x " />
          </button>
        </div>
      )}
      <a
        href="http://wa.me/5595991424864"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale pelo WhatsApp"
        className="relative w-14 h-14 rounded-full shadow-2xl flex items-center justify-center bg-[#25D366] hover:bg-[#20BF5B] transition-all duration-200 hover:scale-110 whatsapp-pulse"
      >
        <WhatsappIcon className="w-7 h-7 fill-white" />
      </a>
    </div>
  );
}
