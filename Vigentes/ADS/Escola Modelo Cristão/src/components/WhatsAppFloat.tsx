import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/5511989742323"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-transform hover:scale-110 z-40 animate-pulse"
      aria-label="Falar no WhatsApp"
      style={{ backgroundColor: 'rgb(37, 211, 102)' }}
    >
      <MessageCircle className="lucide lucide-message-circle text-white" width={32} height={32} />
    </a>
  );
}
