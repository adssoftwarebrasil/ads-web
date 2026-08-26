import WhatsAppIcon from './WhatsAppIcon';

export default function WhatsAppFloat() {
  return (
    <a
      href="http://wa.me/5566996116371"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#1ebe5e] rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 hover:scale-110 group opacity-100 translate-y-0"
    >
      <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></div>
      <WhatsAppIcon size={28} fill="white" className="relative z-10" />
      <span className="absolute right-16 bg-black text-white text-xs font-semibold px-3 py-1.5 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
        Falar no WhatsApp
      </span>
    </a>
  );
}
