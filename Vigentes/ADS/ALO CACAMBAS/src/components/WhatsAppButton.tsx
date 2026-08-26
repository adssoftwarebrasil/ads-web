import WhatsAppIcon from './WhatsAppIcon';

export default function WhatsAppButton() {
  return (
    <a
      href="http://wa.me/553491233322"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25d366] hover:bg-[#20b957] rounded-full shadow-xl hover:shadow-2xl flex items-center justify-center transition-all duration-300 group opacity-100 translate-y-0 scale-100"
    >
      <span className="absolute inset-0 rounded-full bg-[#25d366] animate-ping opacity-30"></span>
      <WhatsAppIcon className="w-7 h-7 relative z-10 text-white group-hover:scale-110 transition-transform" />
      <div className="absolute right-16 bg-[#343434] text-[#fefefe] text-xs font-semibold px-3 py-1.5 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-md">
        Falar no WhatsApp
      </div>
    </a>
  );
}
