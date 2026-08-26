import { Phone, Clock } from 'lucide-react';
import { WHATSAPP_URL } from './icons';

export default function TopBar() {
  return (
    <div className="bg-brand-navy text-white/80 text-xs sm:text-sm py-2 section-padding">
      <div className="container-max flex items-center justify-between">
        <div className="flex items-center gap-4 sm:gap-6">
          <a href="tel:92981115255" className="flex items-center gap-1.5 hover:text-brand-yellow transition-colors">
            <Phone width={13} height={13} className="lucide lucide-phone " />
            <span>(92) 98111-5255</span>
          </a>
          <span className="hidden sm:flex items-center gap-1.5">
            <Clock width={13} height={13} className="lucide lucide-clock " />
            Seg-Sex 08h-17h | Sáb 09h-13h
          </span>
        </div>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-brand-red hover:bg-brand-red-dark text-white px-3 py-1 rounded text-xs font-semibold transition-colors"
        >
          Fale Conosco
        </a>
      </div>
    </div>
  );
}
