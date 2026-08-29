import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=556284455153&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Acabei%20de%20visitar%20o%20site%20poderia%20me%20falar%20um%20pouco%20mais%20sobre%20seus%20servi%C3%A7os%3F"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-5 rounded-full shadow-2xl hover:bg-green-600 transition-all duration-300 transform hover:scale-110 animate-pulse"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle className="lucide lucide-message-circle" width={36} height={36} />
    </a>
  );
}
