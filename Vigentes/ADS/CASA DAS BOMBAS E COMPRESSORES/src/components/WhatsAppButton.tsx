import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5592984428836"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-[#25D366] text-white w-14 h-14 sm:w-[60px] sm:h-[60px] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 animate-pulse"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle width={28} height={28} className="lucide lucide-message-circle " />
    </a>
  );
}
