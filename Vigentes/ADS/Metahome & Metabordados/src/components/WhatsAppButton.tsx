import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5584"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20ba5a] transition-all duration-300 hover:scale-110 animate-pulse"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
}
