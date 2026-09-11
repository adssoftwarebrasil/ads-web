import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <button
      className="fixed bottom-6 right-6 md:bottom-6 md:right-6 w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 z-[9999] animate-pulse-slow"
      aria-label="WhatsApp"
    >
      <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-white" />
    </button>
  );
}
