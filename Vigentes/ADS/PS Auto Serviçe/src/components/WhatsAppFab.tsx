import { WhatsAppIcon } from './icons';

export default function WhatsAppFab() {
  return (
    <div className="whatsapp-fab transition-all duration-500 opacity-100 translate-y-0">
      <a
        href="http://wa.me/5581991461355?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20um%20orçamento."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="relative flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5b] text-white rounded-full shadow-2xl shadow-green-500/40 transition-all duration-300 hover:scale-110 active:scale-95 group overflow-hidden"
        style={{ padding: '14px 20px 14px 16px' }}
      >
        <WhatsAppIcon className="w-7 h-7 flex-shrink-0" />
        <span className="text-sm font-bold whitespace-nowrap pr-1">Falar no WhatsApp</span>
      </a>
    </div>
  );
}
