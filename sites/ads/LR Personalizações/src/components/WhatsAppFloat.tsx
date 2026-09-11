import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/5562985597671?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20as%20embalagens%20personalizadas."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 animate-bounce hover:animate-none"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle width={32} height={32} className="lucide lucide-message-circle fill-current" />
    </a>
  );
}
