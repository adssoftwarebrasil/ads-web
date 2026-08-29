import { MessageCircle } from 'lucide-react';
import { WHATSAPP_ACCENTED } from '../constants';

export default function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_ACCENTED}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[60] bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all duration-300 hover:scale-110 group"
      aria-label="WhatsApp"
    >
      <MessageCircle size={32} className="group-hover:animate-bounce" />
      <span className="absolute right-full mr-3 bg-white text-gray-800 px-4 py-2 rounded-lg text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden sm:block">
        Dúvidas? Fale conosco!
      </span>
    </a>
  );
}
