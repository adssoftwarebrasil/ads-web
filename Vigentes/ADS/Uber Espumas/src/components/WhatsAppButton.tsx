import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 animate-slideIn group">
      <div className="absolute right-20 bottom-2 bg-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium text-gray-900 border border-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        Precisa de ajuda? Fale conosco!
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-0 h-0 border-8 border-transparent border-l-white"></div>
      </div>
      <a
        href="https://wa.me/5534991421598"
        target="_blank"
        rel="noopener noreferrer"
        className="w-16 h-16 bg-[#25D366] rounded-full shadow-2xl hover:shadow-[0_10px_40px_rgba(37,211,102,0.4)] flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 animate-pulseSlow relative"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle
          className="lucide lucide-message-circle"
          width={32}
          height={32}
          stroke="white"
        />
        <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full text-white text-xs font-bold flex items-center justify-center">
          1
        </div>
      </a>
    </div>
  );
}
