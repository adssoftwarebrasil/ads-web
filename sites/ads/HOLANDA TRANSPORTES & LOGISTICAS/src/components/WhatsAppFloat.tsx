import WhatsAppIcon from './WhatsAppIcon';

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/5595991507264?text=Olá! Gostaria de mais informações sobre os serviços da Holanda Transportes."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 lg:bottom-8 lg:right-8 z-[9999] w-14 h-14 lg:w-16 lg:h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-pulse-subtle"
      aria-label="Fale conosco no WhatsApp"
    >
      <WhatsAppIcon className="w-8 h-8 lg:w-9 lg:h-9" fill="white" />
    </a>
  );
}
