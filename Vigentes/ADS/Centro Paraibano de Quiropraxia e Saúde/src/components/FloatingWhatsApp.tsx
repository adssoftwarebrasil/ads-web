import { MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

export default function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1ebe5d] text-white shadow-2xl rounded-full px-5 py-3.5 transition-all duration-300 hover:scale-105 group"
    >
      <span className="relative flex">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-40"></span>
        <MessageCircle
          width={22}
          height={22}
          className="lucide lucide-message-circle relative"
        />
      </span>
      <span className="font-bold text-sm hidden sm:block">Falar no WhatsApp</span>
    </a>
  );
}
