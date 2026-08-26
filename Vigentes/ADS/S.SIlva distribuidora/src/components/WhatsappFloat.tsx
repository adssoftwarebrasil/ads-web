import { useState } from 'react';
import { X } from 'lucide-react';

export default function WhatsappFloat() {
  const [showBubble, setShowBubble] = useState(true);

  return (
    <div className="fixed bottom-5 right-5 md:bottom-7 md:right-7 z-40 flex flex-col items-end gap-3">
      {showBubble && (
        <div className="relative max-w-[240px] bg-white rounded-2xl shadow-2xl shadow-black/20 p-4 border border-slate-200 animate-fade-up">
          <button
            aria-label="Fechar"
            onClick={() => setShowBubble(false)}
            className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-slate-200 hover:bg-slate-300 flex items-center justify-center text-slate-700 transition-colors"
          >
            <X className="lucide lucide-x w-3.5 h-3.5" />
          </button>
          <p className="text-sm font-bold text-brand-navy leading-tight mb-1">Fale com um consultor</p>
          <p className="text-xs text-slate-600 leading-snug">Consulte peças, preços e prazos direto pelo WhatsApp.</p>
          <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-r border-b border-slate-200 rotate-45"></div>
        </div>
      )}
      <a
        href="https://wa.me/5575981960232?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20um%20consultor%20da%20S.%20Silva%20Distribuidora."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir conversa no WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full text-white shadow-2xl animate-pulse-slow transition-transform hover:scale-110 active:scale-95"
        style={{ backgroundColor: 'rgb(37, 211, 102)' }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-8 h-8 md:w-9 md:h-9"
        >
          <path
            fill="currentColor"
            stroke="none"
            d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.396.015 12.03a11.782 11.782 0 001.592 5.925L0 24l6.122-1.605a11.793 11.793 0 005.926 1.594h.005c6.637 0 12.032-5.396 12.035-12.03a11.85 11.85 0 00-3.536-8.502"
          ></path>
        </svg>
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-brand-red"></span>
        </span>
      </a>
    </div>
  );
}
