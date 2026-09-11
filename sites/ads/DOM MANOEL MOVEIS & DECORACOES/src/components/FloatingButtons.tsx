import { Instagram } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 transition-all duration-500 opacity-100 translate-y-0">
      <button
        aria-label="Instagram"
        className="w-14 h-14 rounded-full bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045] shadow-xl flex items-center justify-center hover:scale-110 transition-transform duration-300"
      >
        <Instagram size={24} className="text-white" />
      </button>
      <a
        href="http://wa.me/556696455950?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20móveis."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale pelo WhatsApp"
        className="relative w-16 h-16 rounded-full bg-[#25D366] hover:bg-[#20ba58] shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30 group-hover:opacity-0"></span>
        <WhatsAppIcon width={30} height={30} className="relative z-10" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-[rgb(103,66,42)] text-cream text-xs font-semibold px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
          Fale conosco!
          <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1.5 w-0 h-0 border-l-[6px] border-l-[rgb(103,66,42)] border-y-[5px] border-y-transparent"></span>
        </span>
      </a>
    </div>
  );
}
