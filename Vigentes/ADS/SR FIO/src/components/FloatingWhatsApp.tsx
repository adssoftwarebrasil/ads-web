import WhatsAppIcon from './WhatsAppIcon';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/5516991998208?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação%20capilar."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1da851] text-white font-body font-semibold text-sm px-4 py-3 rounded-full shadow-xl shadow-black/20 hover:shadow-2xl hover:shadow-[#25D366]/40 transition-all duration-300 hover:scale-105 animate-pulse-slow group"
      aria-label="Falar no WhatsApp"
    >
      <WhatsAppIcon size={22} className="shrink-0" />
      <span className="hidden sm:inline">Agendar pelo WhatsApp</span>
    </a>
  );
}
