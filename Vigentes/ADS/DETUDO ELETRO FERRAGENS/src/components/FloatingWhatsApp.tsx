import { MessageCircle } from 'lucide-react';
import { WHATSAPP_DEFAULT } from '../constants';

export default function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_DEFAULT}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[rgb(246,239,3)] hover:scale-110 transition-all duration-300 animate-pulse group opacity-100 scale-100"
      style={{ boxShadow: 'rgba(37, 211, 102, 0.5) 0px 4px 20px' }}
    >
      <MessageCircle size={32} />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-[rgb(34,34,34)] text-white px-4 py-2 rounded-lg font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
        Fale conosco!
      </span>
    </a>
  );
}
