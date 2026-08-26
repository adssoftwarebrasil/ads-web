import { MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '../data';

export default function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 transition-all duration-300 hover:scale-110 animate-pulse-subtle"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
    </a>
  );
}
