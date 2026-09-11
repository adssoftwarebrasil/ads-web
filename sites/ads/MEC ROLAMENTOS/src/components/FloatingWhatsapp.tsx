import WhatsappIcon from './WhatsappIcon';

export default function FloatingWhatsapp() {
  return (
    <a
      href="https://wa.me/5566999952065"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#1DAA54] rounded-full flex items-center justify-center shadow-2xl shadow-green-500/40 hover:scale-110 transition-all duration-300 group"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30"></span>
      <WhatsappIcon width={28} height={28} fill="white" className="relative z-10" />
      <span className="absolute right-16 bg-gray-900 text-white text-xs font-medium px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none shadow-xl">
        Falar no WhatsApp
      </span>
    </a>
  );
}
