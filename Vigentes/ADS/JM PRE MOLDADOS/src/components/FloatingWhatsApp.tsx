import WhatsappIcon from './WhatsappIcon';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/5567999737241"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 md:p-5 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 animate-pulse group"
      aria-label="Falar no WhatsApp"
    >
      <WhatsappIcon
        size={32}
        className="group-hover:rotate-12 transition-transform duration-300"
      />
      <span className="absolute bottom-full right-0 mb-2 px-4 py-2 bg-[#0D1B4C] text-white text-sm font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none shadow-lg">
        Fale conosco!
      </span>
    </a>
  );
}
