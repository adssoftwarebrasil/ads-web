import { MessageCircle } from 'lucide-react';
import { openWhatsApp } from '../lib/site';

export default function WhatsAppButton() {
  return (
    <button
      onClick={() => openWhatsApp('Olá! Gostaria de mais informações sobre a Chopp Nattos Brasil.')}
      className="fixed bottom-8 right-8 w-16 h-16 md:w-[65px] md:h-[65px] bg-[rgb(176,146,71)] rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl hover:shadow-[rgb(176,146,71)]/50 hover:scale-110 transition-all duration-300 z-50 animate-pulse-subtle group"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle size={35} strokeWidth={2.5} className="text-white" />
      <span className="absolute right-full mr-3 px-4 py-2 bg-[rgb(40,44,115)] text-white text-sm font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
        Fale Conosco
      </span>
    </button>
  );
}
