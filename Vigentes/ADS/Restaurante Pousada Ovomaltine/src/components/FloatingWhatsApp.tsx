import { WhatsAppIcon } from './icons';

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 transition-all duration-500 opacity-100 translate-y-0">
      <a
        href="http://wa.me/5524998199101?text=Olá!%20Vi%20o%20site%20de%20vocês%20e%20gostaria%20de%20mais%20informações."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar pelo WhatsApp"
        className="relative flex items-center justify-center w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-xl shadow-green-500/40 transition-all duration-300 hover:scale-110 active:scale-95 group"
      >
        <WhatsAppIcon className="w-8 h-8 fill-white relative z-10" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-brand-orange rounded-full border-2 border-white"></span>
      </a>
    </div>
  );
}
