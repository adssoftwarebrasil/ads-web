import { MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '../lib/scroll';

export default function FloatingWhatsApp() {
  return (
    <button
      onClick={() => window.open(WHATSAPP_URL, '_blank', 'noopener,noreferrer')}
      className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-40 animate-pulse hover:animate-none"
      title="Falar no WhatsApp"
    >
      <MessageCircle size={28} className="lucide lucide-message-circle mx-auto" />
    </button>
  );
}
