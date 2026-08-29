import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/5579991570550"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center text-white shadow-xl hover:scale-110 transition-transform duration-300 whatsapp-pulse"
      style={{ backgroundColor: 'rgb(37, 211, 102)' }}
    >
      <MessageCircle
        width={26}
        height={26}
        fill="white"
        className="lucide lucide-message-circle"
        aria-hidden="true"
      />
    </a>
  );
}
