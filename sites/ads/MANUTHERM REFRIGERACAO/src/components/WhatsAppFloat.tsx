import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/5571999313609"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-[30px] right-[30px] z-[1000] w-[55px] h-[55px] lg:w-[60px] lg:h-[60px] bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-115 transition-all duration-300 animate-pulse-subtle group"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle
        width={28}
        height={28}
        strokeWidth={2}
        className="lucide lucide-message-circle text-white"
      />
      <span className="absolute right-full mr-4 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Fale conosco no WhatsApp
      </span>
    </a>
  );
}
