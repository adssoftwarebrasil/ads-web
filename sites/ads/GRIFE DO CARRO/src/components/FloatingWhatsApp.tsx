import { MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '../data';

export default function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-black/40 hover:scale-105 transition-transform animate-floaty"
    >
      <MessageCircle className="h-7 w-7 text-white" />
    </a>
  );
}
