import WhatsAppIcon from './WhatsAppIcon';

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/5567996712871?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20hospedagem."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 animate-pulse"
      aria-label="Fale Conosco pelo WhatsApp"
      style={{ boxShadow: 'rgba(37, 211, 102, 0.4) 0px 4px 20px' }}
    >
      <WhatsAppIcon width={32} height={32} fill="#FFFFFF" />
    </a>
  );
}
