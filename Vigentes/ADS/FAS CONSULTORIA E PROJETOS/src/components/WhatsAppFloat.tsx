import WhatsAppIcon from './WhatsAppIcon';

export default function WhatsAppFloat() {
  return (
    <a
      href="http://wa.me/556592264219?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20rastreamento%20veicular."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-500 whatsapp-pulse opacity-100 translate-y-0"
      style={{ backgroundColor: 'rgb(37, 211, 102)' }}
    >
      <WhatsAppIcon className="w-7 h-7" fill="white" />
    </a>
  );
}
