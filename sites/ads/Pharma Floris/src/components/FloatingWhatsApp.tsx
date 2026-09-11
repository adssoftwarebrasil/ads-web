import { MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '../lib/constants';

export default function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 animate-pulse hover:animate-none"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle
        width={32}
        height={32}
        className="lucide lucide-message-circle"
      />
    </a>
  );
}
