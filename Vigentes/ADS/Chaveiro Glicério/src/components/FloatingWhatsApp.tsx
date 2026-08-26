import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500);
    const tipTimer = setTimeout(() => {
      if (!dismissed) setTooltipOpen(true);
    }, 3000);
    const closeTip = setTimeout(() => setTooltipOpen(false), 8000);
    return () => {
      clearTimeout(timer);
      clearTimeout(tipTimer);
      clearTimeout(closeTip);
    };
  }, [dismissed]);

  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setTooltipOpen(false);
    setDismissed(true);
  };

  return (
    <div
      className={`fixed bottom-6 right-5 z-50 flex flex-col items-end gap-3 transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {tooltipOpen && (
        <div className="relative bg-brand-gray-dark border border-white/15 text-brand-white text-sm rounded-2xl px-4 py-3 max-w-[220px] shadow-2xl animate-fade-in">
          <button
            onClick={handleDismiss}
            className="absolute -top-2 -right-2 bg-brand-gray-mid border border-white/15 rounded-full p-0.5 text-brand-white/50 hover:text-brand-white transition-colors"
            aria-label="Fechar"
          >
            <X size={12} />
          </button>
          <p className="font-semibold text-brand-yellow text-xs mb-0.5">Precisa de um chaveiro?</p>
          <p className="text-brand-white/70 text-xs leading-relaxed">
            Fale conosco agora pelo WhatsApp. Atendimento rápido 24h!
          </p>
          <div className="absolute bottom-[-6px] right-6 w-3 h-3 bg-brand-gray-dark border-r border-b border-white/15 rotate-45" />
        </div>
      )}

      <a
        href="http://wa.me/5519988923111?text=Olá!%20Preciso%20de%20um%20chaveiro.%20Podem%20me%20ajudar?"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        onClick={() => setTooltipOpen(false)}
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20b858] shadow-[0_4px_20px_rgba(37,211,102,0.45)] hover:shadow-[0_4px_30px_rgba(37,211,102,0.65)] transition-all duration-200 hover:scale-110"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="white"
          className="relative z-10"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  );
}
