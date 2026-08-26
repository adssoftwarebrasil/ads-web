import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/556283177646"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 group animate-pulse hover:animate-none"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle
        className="lucide lucide-message-circle group-hover:scale-110 transition-transform duration-300"
        width={32}
        height={32}
      />
      <span className="absolute -top-12 right-0 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        Fale conosco!
      </span>
    </a>
  );
}
