import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/5548991372058?text=Olá! Vim pelo site e gostaria de solicitar um orçamento."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#1ebe5c] text-white rounded-full shadow-2xl shadow-green-500/40 transition-all duration-300 hover:scale-110 active:scale-95"
      aria-label="Falar no WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30"></span>
      <MessageCircle
        width={26}
        height={26}
        fill="white"
        className="lucide lucide-message-circle "
      />
    </a>
  );
}
