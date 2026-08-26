import { MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

export default function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center"
    >
      <span className="absolute w-14 h-14 rounded-full bg-[#25d366] animate-pulse-slow opacity-50"></span>
      <div className="relative w-14 h-14 bg-[#25d366] hover:bg-[#1ebe5d] rounded-full flex items-center justify-center shadow-2xl shadow-green-600/40 transition-all duration-300 hover:scale-110">
        <MessageCircle
          width={26}
          height={26}
          fill="white"
          stroke="white"
          className="lucide lucide-message-circle "
        />
      </div>
    </a>
  );
}
