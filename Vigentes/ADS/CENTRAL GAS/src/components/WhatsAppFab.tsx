import WhatsAppIcon from './WhatsAppIcon';

export default function WhatsAppFab() {
  return (
    <a
      href="http://wa.me/556696555500?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 group transition-all duration-500 opacity-100 translate-y-0"
    >
      <div className="relative whatsapp-fab-pulse">
        <div className="w-16 h-16 bg-[#25D366] hover:bg-[#20bc5a] rounded-full flex items-center justify-center shadow-2xl shadow-[#25D366]/40 transition-all duration-300 group-hover:scale-110 active:scale-95">
          <WhatsAppIcon className="w-8 h-8" fill="white" />
        </div>
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full border-2 border-white animate-pulse"></span>
      </div>
      <div className="absolute right-[72px] top-1/2 -translate-y-1/2 bg-gray-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
        Falar no WhatsApp
        <span className="absolute right-[-6px] top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900"></span>
      </div>
    </a>
  );
}
