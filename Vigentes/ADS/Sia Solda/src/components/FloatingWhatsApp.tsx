import { WhatsAppIcon } from './icons';

export default function FloatingWhatsApp() {
  return (
    <a
      href="http://wa.me/556198770047?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 group flex items-center gap-3"
    >
      <span className="hidden group-hover:flex items-center bg-white text-brand-dark text-sm font-semibold px-4 py-2.5 rounded-xl shadow-lg shadow-black/10 whitespace-nowrap border border-gray-100">
        Fale Conosco!
      </span>
      <div className="relative w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-xl shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-300 hover:scale-110">
        <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20"></span>
        <WhatsAppIcon className="w-7 h-7 fill-white" />
      </div>
    </a>
  );
}
