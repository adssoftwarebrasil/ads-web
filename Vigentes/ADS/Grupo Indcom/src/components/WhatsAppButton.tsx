import { MessageCircle } from 'lucide-react';
import { waLink } from '../lib/site';

export default function WhatsAppButton() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 md:bottom-8 md:right-8 z-[9999] w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 hover:rotate-6 transition-all duration-300 animate-pulse-slow animate-slide-in-bottom"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="lucide lucide-message-circle w-7 h-7 md:w-8 md:h-8 text-white" />
    </a>
  );
}
