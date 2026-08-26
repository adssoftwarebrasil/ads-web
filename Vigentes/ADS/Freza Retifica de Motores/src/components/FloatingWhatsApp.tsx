import WhatsAppIcon from './WhatsAppIcon';

export default function FloatingWhatsApp() {
  return (
    <a
      href="http://wa.me/5566996524291?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20um%20or%C3%A7amento."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Falar no WhatsApp"
    >
      <div className="relative">
        <div className="whatsapp-pulse w-14 h-14 relative flex items-center justify-center bg-[#25D366] rounded-full shadow-xl shadow-[#25D366]/40 hover:scale-110 transition-transform duration-200">
          <WhatsAppIcon className="w-7 h-7 text-white" />
        </div>
        <div className="absolute bottom-0 right-16 mb-1 bg-brand-dark text-white text-xs font-semibold px-3 py-2 rounded-lg shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-200 pointer-events-none">
          Fale conosco!
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-2 h-2 bg-brand-dark rotate-45"></div>
        </div>
      </div>
    </a>
  );
}
