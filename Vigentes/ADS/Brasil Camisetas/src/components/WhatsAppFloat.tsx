import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloat() {
  return (
    <div className="fixed bottom-6 right-6 lg:bottom-8 lg:right-8 z-50">
      <a
        href="https://wa.me/556234134865"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 lg:w-16 lg:h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-115 animate-pulse-subtle"
        aria-label="Fale conosco pelo WhatsApp"
        style={{ backgroundColor: 'rgb(6, 138, 80)' }}
      >
        <MessageCircle size={28} className="text-white lg:w-8 lg:h-8" />
      </a>
    </div>
  );
}
