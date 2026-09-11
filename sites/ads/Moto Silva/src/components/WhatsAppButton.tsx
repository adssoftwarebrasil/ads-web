import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/551937138008"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:bg-[#20BA5A] transition-all duration-300 hover:scale-110 animate-pulse"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
    </a>
  );
}
