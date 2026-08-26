import { MessageCircle } from 'lucide-react';
import { whatsappUrl } from '../lib/whatsapp';

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 w-14 h-14 md:w-16 md:h-16 bg-[rgb(250,204,21)] rounded-full flex items-center justify-center shadow-lg hover:scale-115 transition-all duration-300 animate-pulse-scale"
      aria-label="Contato via WhatsApp"
      style={{ boxShadow: 'rgba(250, 204, 21, 0.4) 0px 4px 15px' }}
    >
      <MessageCircle className="lucide lucide-message-circle w-7 h-7 md:w-9 md:h-9 text-black" />
    </a>
  );
}
