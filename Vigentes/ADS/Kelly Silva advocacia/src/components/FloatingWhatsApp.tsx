import WhatsAppIcon from './WhatsAppIcon';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/5562999714722?text=Olá"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 lg:bottom-8 lg:right-8 z-50 bg-gradient-to-br from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#25D366] w-16 h-16 lg:w-[70px] lg:h-[70px] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 group"
      aria-label="Falar no WhatsApp"
      style={{ boxShadow: 'rgba(37, 211, 102, 0.4) 0px 8px 25px' }}
    >
      <WhatsAppIcon className="w-9 h-9 lg:w-10 lg:h-10 text-off-white group-hover:scale-110 transition-transform duration-300" />
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25"></span>
    </a>
  );
}
