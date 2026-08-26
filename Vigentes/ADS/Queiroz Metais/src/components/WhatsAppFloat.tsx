import { MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

export default function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 group animate-pulse hover:animate-none"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle size={32} className="group-hover:scale-110 transition-transform" />
      <span className="absolute -top-2 -right-2 bg-primary text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center animate-bounce">
        1
      </span>
    </a>
  );
}
