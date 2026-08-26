import { WhatsAppIcon } from './icons';

const WHATSAPP_URL = 'https://wa.me/5562982972917';

export default function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 rounded-full bg-whatsapp text-white flex items-center justify-center shadow-xl hover:scale-110 transition-transform whatsapp-pulse"
    >
      <WhatsAppIcon height={30} width={30} />
    </a>
  );
}
