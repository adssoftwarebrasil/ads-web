import { MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

export default function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20BA5A] transition-all duration-300 hover:scale-110 animate-pulse"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle size={32} />
    </a>
  );
}
