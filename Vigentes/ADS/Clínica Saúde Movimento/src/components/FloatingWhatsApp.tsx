import { WHATSAPP_LINK } from '../lib/constants';
import WhatsAppIcon from './WhatsAppIcon';

export default function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group flex items-center gap-3"
      aria-label="Contato pelo WhatsApp"
    >
      <span className="bg-white text-clinic-teal text-xs font-semibold px-3 py-1.5 rounded-full shadow-md opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap pointer-events-none">
        Fale conosco!
      </span>
      <div className="relative">
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30"></span>
        <div className="relative w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300">
          <WhatsAppIcon className="w-7 h-7 text-white" />
        </div>
      </div>
    </a>
  );
}
