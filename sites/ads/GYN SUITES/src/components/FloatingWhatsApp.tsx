import { MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

export default function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all duration-300 hover:scale-110 animate-pulse"
      aria-label="Enviar WhatsApp"
    >
      <MessageCircle width={32} height={32} />
    </a>
  );
}
