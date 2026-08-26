import { WhatsAppIcon } from './icons';
import { WHATSAPP_BASE } from '../hooks/useInView';

export default function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_BASE}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] text-white rounded-full shadow-2xl shadow-[#25D366]/40 hover:shadow-[#25D366]/60 hover:scale-110 active:scale-95 transition-all duration-300 group translate-y-0 opacity-100"
    >
      <div className="w-14 h-14 flex items-center justify-center flex-shrink-0">
        <WhatsAppIcon className="w-7 h-7" fill="white" />
      </div>
      <span className="pr-4 text-sm font-bold opacity-0 max-w-0 overflow-hidden group-hover:opacity-100 group-hover:max-w-xs transition-all duration-300 whitespace-nowrap">
        Fale Conosco
      </span>
    </a>
  );
}
