import { MessageCircle } from 'lucide-react';

export default function WhatsappButton() {
  return (
    <a
      href="https://wa.me/5585987753852"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all transform hover:scale-110 z-50 animate-bounce"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="lucide lucide-message-circle" width={28} height={28} />
    </a>
  );
}
