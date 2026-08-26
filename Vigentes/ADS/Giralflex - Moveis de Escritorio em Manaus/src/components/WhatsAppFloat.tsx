import { WHATSAPP_URL, WhatsAppIcon } from './icons';

export default function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <span className="absolute -top-12 right-0 bg-white text-brand-navy text-xs font-semibold px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        Fale conosco!
      </span>
      <div className="relative">
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
        <div className="relative w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-green-500/40">
          <WhatsAppIcon className="w-7 h-7 fill-white" />
        </div>
      </div>
    </a>
  );
}
