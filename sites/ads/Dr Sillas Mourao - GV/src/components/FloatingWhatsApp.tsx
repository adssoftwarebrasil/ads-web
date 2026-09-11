import { useState } from 'react';
import { X } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-3">
      {showTooltip && (
        <div className="flex items-center gap-2 bg-white rounded-2xl shadow-xl px-4 py-3 border border-gray-100 animate-fadeIn max-w-[220px]">
          <p className="text-gray-700 text-sm leading-snug font-medium">Agende sua consulta agora!</p>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-gray-400 hover:text-gray-600 flex-shrink-0 ml-1"
          >
            <X width={14} height={14} className="lucide lucide-x " />
          </button>
        </div>
      )}
      <a
        href="https://wa.me/553399711500?text=Ol%C3%A1%2C%20Dr.%20Sillas!%20Gostaria%20de%20agendar%20uma%20consulta."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco pelo WhatsApp"
        className="w-14 h-14 bg-[#25D366] hover:bg-[#1da851] rounded-full flex items-center justify-center shadow-2xl transition-all duration-200 hover:scale-110 hover:shadow-[0_8px_30px_rgba(37,211,102,0.4)]"
      >
        <WhatsAppIcon className="w-7 h-7" fill="white" />
      </a>
    </div>
  );
}
