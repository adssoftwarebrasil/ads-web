import WhatsAppIcon from './WhatsAppIcon';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/556198423838"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-gold rounded-full p-4 md:p-5 shadow-2xl hover:scale-110 transition-all duration-300 animate-pulse-soft"
      aria-label="Contato via WhatsApp"
      style={{ boxShadow: 'rgba(212, 175, 55, 0.4) 0px 4px 24px' }}
    >
      <WhatsAppIcon width={32} height={32} fill="white" className="w-7 h-7 md:w-8 md:h-8" />
    </a>
  );
}
