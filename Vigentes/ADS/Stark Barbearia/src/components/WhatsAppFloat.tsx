import { MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '../data';

export default function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20BA5A] transition-all duration-300 hover:scale-110 group"
      aria-label="Contato via WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30 pointer-events-none"></span>
      <MessageCircle className="w-7 h-7 relative z-10" />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-black text-white px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg">
        Fale conosco
      </span>
    </a>
  );
}
