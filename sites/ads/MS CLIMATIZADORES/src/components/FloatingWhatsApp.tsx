import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/556791135480?text=Ol%C3%A1!%20Vim%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-yellow-500 rounded-full shadow-2xl shadow-yellow-500/50 flex items-center justify-center hover:scale-110 transition-transform duration-300 animate-pulse-glow group"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle width={28} height={28} className="text-gray-900" />
      <span className="absolute right-full mr-3 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Fale Conosco
      </span>
    </a>
  );
}
