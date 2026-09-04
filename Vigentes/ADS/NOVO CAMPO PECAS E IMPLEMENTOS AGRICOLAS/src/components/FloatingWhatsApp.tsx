import { MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '../lib/whatsapp';

export default function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-all animate-pulse-subtle"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle
        width={32}
        height={32}
        className="lucide lucide-message-circle text-white"
      />
    </a>
  );
}
