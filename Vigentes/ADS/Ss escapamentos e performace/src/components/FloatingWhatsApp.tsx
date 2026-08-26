import { MessageCircle } from 'lucide-react';

const WHATSAPP_URL = 'https://api.whatsapp.com/send?phone=5575999369036';

export default function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[rgb(254,0,0)] hover:bg-[rgb(172,1,2)] text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 animate-pulse-slow"
      aria-label="WhatsApp"
    >
      <MessageCircle size={32} />
    </a>
  );
}
