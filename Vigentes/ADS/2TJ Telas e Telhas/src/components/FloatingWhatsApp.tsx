import WhatsAppIcon, { openWhatsApp } from './WhatsAppIcon';

export default function FloatingWhatsApp() {
  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 bg-[rgb(238,115,62)] text-white rounded-full shadow-2xl hover:bg-[rgb(218,95,42)] transition-all duration-300 flex items-center justify-center hover:scale-110 animate-pulse hover:animate-none group"
      aria-label="Contato via WhatsApp"
    >
      <div className="group-hover:rotate-12 transition-transform duration-300">
        <WhatsAppIcon width={32} height={32} />
      </div>
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-ping"></span>
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></span>
    </button>
  );
}
