import { MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '../data';

export default function WhatsappButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 animate-pulse hover:animate-none"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle width={32} height={32} />
    </a>
  );
}
