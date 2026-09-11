import { MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

export default function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      className="btn-whatsapp animate-scale-in fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group hover:scale-110 hover:-translate-y-1 active:scale-90 transition-transform duration-200"
      aria-label="Agendar horário pelo WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-3 transition-all duration-500 font-outfit font-bold whitespace-nowrap">Agendar Horário</span>
    </a>
  );
}
