import { MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

export default function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 animate-pulse hover:animate-none"
      aria-label="WhatsApp"
    >
      <MessageCircle className="lucide lucide-message-circle w-8 h-8" />
    </a>
  );
}
