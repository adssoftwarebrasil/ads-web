import WhatsAppIcon from './WhatsAppIcon';

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-50 transition-all duration-500 opacity-100 translate-y-0">
      <a
        href="http://wa.me/5565996292448"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale pelo WhatsApp"
        className="group flex items-center gap-3"
      >
        <span className="hidden sm:block bg-white text-[rgb(53,53,53)] text-sm font-semibold px-4 py-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-2 group-hover:translate-x-0 whitespace-nowrap">
          Fale pelo WhatsApp
        </span>
        <div className="relative w-14 h-14 bg-[#25D366] hover:bg-[#1eb854] rounded-full flex items-center justify-center shadow-xl shadow-[#25D366]/40 transition-all duration-300 hover:scale-110 active:scale-95">
          <WhatsAppIcon className="w-7 h-7 text-white" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-[rgb(234,50,56)] rounded-full animate-ping"></span>
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-[rgb(234,50,56)] rounded-full"></span>
        </div>
      </a>
    </div>
  );
}
