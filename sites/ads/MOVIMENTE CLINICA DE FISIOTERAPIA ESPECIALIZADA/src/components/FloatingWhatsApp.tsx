import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  // O balão some sozinho para não cobrir os botões do hero no celular.
  useEffect(() => {
    const timer = window.setTimeout(() => setShowTooltip(false), 8000);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 transition-all duration-500 opacity-100 translate-y-0">
      {showTooltip && (
        <div className="relative flex items-center">
          <div className="bg-white rounded-2xl shadow-2xl px-4 py-3 pr-10 max-w-[220px] border border-gray-100 animate-fade-in-up">
            <p className="text-xs font-bold text-gray-800 leading-tight">Precisa de ajuda?</p>
            <p className="text-xs text-gray-500 mt-0.5">Fale com a gente agora!</p>
          </div>
          <button
            className="absolute top-0.5 right-0.5 p-2 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Fechar"
            onClick={() => setShowTooltip(false)}
          >
            <X size={12} />
          </button>
          <div className="absolute -bottom-2 right-6 w-3 h-3 bg-white rotate-45 border-r border-b border-gray-100"></div>
        </div>
      )}
      <a
        href="https://wa.me/556699102233?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20na%20Movimente%20Fisioterapia."
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-transform duration-200"
        aria-label="Falar no WhatsApp"
        style={{ background: 'linear-gradient(135deg, rgb(37, 211, 102), rgb(18, 140, 126))' }}
      >
        <WhatsAppIcon size={28} fill="white" />
        <span className="absolute top-0 right-0 w-3 h-3 rounded-full bg-green-300 border-2 border-white animate-pulse-slow"></span>
      </a>
    </div>
  );
}
