import { MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from './icons';

export default function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all z-50 animate-bounce-slow"
      aria-label="WhatsApp"
    >
      <MessageCircle width={32} height={32} className="lucide lucide-message-circle " />
    </a>
  );
}
