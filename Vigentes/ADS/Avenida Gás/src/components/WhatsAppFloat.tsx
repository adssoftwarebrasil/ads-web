import { MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

export default function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 group"
      aria-label="Fale conosco no WhatsApp"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-[#DBCC5E] rounded-full animate-ping opacity-75"></div>
        <div className="relative flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 bg-[#DBCC5E] rounded-full shadow-2xl hover:scale-110 transition-transform duration-300">
          <MessageCircle className="lucide lucide-message-circle w-8 h-8 text-[#021C3F]" />
        </div>
      </div>
      <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        Faça seu pedido
      </div>
    </a>
  );
}
