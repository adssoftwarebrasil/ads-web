import { MessageCircle } from 'lucide-react';
import { openWhatsApp } from '../lib/whatsapp';

export default function WhatsAppButton() {
  return (
    <button
      onClick={() => openWhatsApp()}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 animate-pulse-slow group"
      aria-label="Enviar mensagem no WhatsApp"
    >
      <MessageCircle className="w-8 h-8 group-hover:scale-110 transition-transform" />
      <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
        <span className="absolute w-full h-full bg-red-500 rounded-full animate-ping opacity-75"></span>
        <span className="relative w-2 h-2 bg-white rounded-full"></span>
      </span>
    </button>
  );
}
