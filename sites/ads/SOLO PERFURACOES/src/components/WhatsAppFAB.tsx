import { MessageCircle } from 'lucide-react';
import { openWhatsApp } from '../lib/whatsapp';

export default function WhatsAppFAB() {
  return (
    <button
      onClick={() => openWhatsApp('Olá! Gostaria de mais informações.')}
      className="fixed bottom-6 right-6 lg:bottom-6 lg:right-6 w-14 h-14 lg:w-16 lg:h-16 bg-[#25D366] rounded-full shadow-2xl flex items-center justify-center z-50 hover:scale-110 transition-transform duration-300 animate-pulse hover:animate-none group"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
      <span className="absolute right-full mr-4 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Fale Conosco
      </span>
    </button>
  );
}
