import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5562983092884"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-accent-green-vibrant text-primary-dark p-4 rounded-full shadow-2xl hover:scale-110 transition-all animate-float group"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
      <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-primary-dark text-white px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
        Fale Conosco
      </span>
    </a>
  );
}
