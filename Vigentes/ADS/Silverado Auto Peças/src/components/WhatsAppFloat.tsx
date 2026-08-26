import WhatsAppIcon from './WhatsAppIcon';

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/556634261853"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Fale conosco no WhatsApp"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-30"></div>
        <div className="relative w-14 h-14 bg-[#25D366] hover:bg-[#1ebe5d] rounded-full flex items-center justify-center shadow-2xl transition-all duration-200 hover:scale-110">
          <WhatsAppIcon className="w-7 h-7 text-white" />
        </div>
      </div>
      <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-brand-black text-white text-xs font-semibold px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg pointer-events-none">
        Fale no WhatsApp
      </span>
    </a>
  );
}
