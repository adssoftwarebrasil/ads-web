import { useState } from 'react';
import { X } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { WHATSAPP } from '../data';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {showTooltip && (
        <div
          className="flex items-center gap-2 bg-white text-brand-black text-sm font-semibold px-4 py-2.5 rounded-2xl shadow-2xl animate-fade-in"
          style={{ boxShadow: 'rgba(0, 0, 0, 0.3) 0px 8px 32px' }}
        >
          <span>Fale conosco!</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-black/40 hover:text-black/70 transition-colors ml-1"
            aria-label="Fechar"
          >
            <X size={14} className="lucide lucide-x" />
          </button>
        </div>
      )}
      <a
        href={`${WHATSAPP}?text=${encodeURIComponent('Olá! Vim pelo site e gostaria de mais informações sobre os veículos.')}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="w-16 h-16 rounded-full flex items-center justify-center text-white shadow-2xl animate-pulse-glow transition-transform duration-300 hover:scale-110"
        style={{
          background: 'linear-gradient(135deg, rgb(37, 211, 102), rgb(18, 140, 126))',
          boxShadow: 'rgba(37, 211, 102, 0.4) 0px 8px 32px',
        }}
      >
        <WhatsAppIcon className="w-7 h-7" />
      </a>
    </div>
  );
}
