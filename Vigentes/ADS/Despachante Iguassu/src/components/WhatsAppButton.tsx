import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="http://wa.me/5545999661849"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 transition-all duration-300 animate-pulse hover:animate-none group"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <MessageCircle className="group-hover:scale-110 transition-transform" size={32} />
      <span className="absolute right-full mr-4 px-4 py-2 bg-[#021D46] text-white text-sm font-semibold rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        Fale Conosco!
      </span>
    </a>
  );
}
