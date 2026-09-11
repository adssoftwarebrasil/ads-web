import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5562984164141?text=Olá, gostaria de solicitar um orçamento"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white w-14 h-14 md:w-16 md:h-16 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300 hover:bg-green-600"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-7 h-7 md:w-8 md:h-8" />
    </a>
  );
}
