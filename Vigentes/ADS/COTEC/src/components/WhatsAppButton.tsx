import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5579998311944"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 z-[9999] animate-bounce hover:animate-none"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle size={28} className="lucide lucide-message-circle " />
    </a>
  );
}
