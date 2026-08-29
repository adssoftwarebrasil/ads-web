import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5571982041655"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition transform animate-bounce"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle size={32} />
    </a>
  );
}
