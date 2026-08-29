import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloat() {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=5574981267777&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Acabei%20de%20visitar%20o%20site%20poderia%20me%20falar%20um%20pouco%20mais%20sobre%20seus%20servi%C3%A7os%3F"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-whatsapp text-white w-16 h-16 rounded-full shadow-2xl hover:scale-110 hover:bg-[#1fb855] transition-all duration-300 flex items-center justify-center animate-pulse"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
    </a>
  );
}
