import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloat() {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=55556536254300&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Acabei%20de%20visitar%20o%20site%20poderia%20me%20falar%20um%20pouco%20mais%20sobre%20seus%20servi%C3%A7os%3F"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 animate-pulse hover:animate-none group"
      aria-label="Contato WhatsApp"
    >
      <MessageCircle
        size={28}
        className="group-hover:rotate-12 transition-transform duration-300"
      />
      <span className="absolute -top-12 right-0 bg-[#2A2A77] text-white px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
        Faça seu pedido!
      </span>
    </a>
  );
}
