import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsapp() {
  return (
    <a
      href="https://wa.me/5562982830047"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 bg-[rgb(37,211,102)] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform animate-pulse-soft"
      aria-label="WhatsApp"
    >
      <MessageCircle
        className="lucide lucide-message-circle text-white sm:w-8 sm:h-8"
        size={28}
      />
    </a>
  );
}
