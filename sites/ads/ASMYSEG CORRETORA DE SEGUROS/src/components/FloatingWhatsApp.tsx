import { MessageCircle } from 'lucide-react';

const quoteUrl =
  'https://api.whatsapp.com/send?phone=553186610041&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Acabei%20de%20visitar%20o%20site%20poderia%20me%20falar%20um%20pouco%20mais%20sobre%20seus%20servi%C3%A7os%3F';

export default function FloatingWhatsApp() {
  return (
    <a
      href={quoteUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all duration-300 hover:scale-110 animate-pulse hover:animate-none"
      aria-label="WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
    </a>
  );
}
