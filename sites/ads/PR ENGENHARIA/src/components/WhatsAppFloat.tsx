import WhatsAppIcon from './WhatsAppIcon';

export default function WhatsAppFloat() {
  return (
    <div className="fixed bottom-6 right-5 z-50 transition-all duration-500 opacity-100 translate-y-0">
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30"></span>
      <a
        href="http://wa.me/556284826969"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg hover:bg-[#128C7E] hover:scale-110 active:scale-95 transition-all duration-300"
      >
        <WhatsAppIcon width={28} height={28} fill="white" />
      </a>
    </div>
  );
}
