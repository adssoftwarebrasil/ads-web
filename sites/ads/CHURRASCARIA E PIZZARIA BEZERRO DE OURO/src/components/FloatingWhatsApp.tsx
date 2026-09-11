import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/556733265463"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 lg:bottom-6 lg:right-6 z-[1000] w-14 h-14 lg:w-16 lg:h-16 bg-[rgba(208,53,77,0.99)] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 animate-pulse hover:animate-none group"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle
        width={28}
        height={28}
        className="lucide lucide-message-circle text-white"
      />
      <span className="absolute right-full mr-3 bg-[rgb(31,29,30)] text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Fale Conosco
      </span>
    </a>
  );
}
