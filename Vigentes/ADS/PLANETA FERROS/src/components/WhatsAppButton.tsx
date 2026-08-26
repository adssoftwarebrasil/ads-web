import { MessageCircle } from 'lucide-react';
import { WA_DEFAULT } from '../data';

export default function WhatsAppButton() {
  return (
    <a
      href={WA_DEFAULT}
      target="_blank"
      rel="noopener"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-xl flex items-center justify-center transition-transform hover:scale-110"
    >
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30"></span>
      <MessageCircle width={26} height={26} className="relative z-10" aria-hidden="true" />
    </a>
  );
}
