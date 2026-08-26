import { useState } from 'react';
import { X } from 'lucide-react';

export default function WhatsAppFloat() {
  const [showTip, setShowTip] = useState(true);

  return (
    <div className="whatsapp-float">
      {showTip && (
        <div className="absolute bottom-16 right-0 bg-white rounded-xl shadow-xl px-4 py-3 min-w-max max-w-xs border border-brand-light">
          <button
            onClick={() => setShowTip(false)}
            className="absolute -top-2 -right-2 w-5 h-5 bg-brand-gray2 text-white rounded-full flex items-center justify-center"
            aria-label="Fechar"
          >
            <X width={10} height={10} className="lucide lucide-x" />
          </button>
          <p className="text-xs font-semibold text-brand-dark">Fale conosco agora!</p>
          <p className="text-xs text-brand-gray2 mt-0.5">Atendimento rápido pelo WhatsApp</p>
        </div>
      )}
      <a
        href="http://wa.me/5566996428111?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20um%20orçamento."
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 rounded-full shadow-lg hover:scale-110 active:scale-95 transition-all duration-300"
        aria-label="Falar no WhatsApp"
        style={{ backgroundColor: 'rgb(37, 211, 102)' }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-7 h-7">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  );
}
