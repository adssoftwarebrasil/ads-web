import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5594991379414?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20na%20RC%20Flor%20De%20Salute."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-[60px] h-[60px] bg-gradient-to-br from-flor-green to-[#4a6b5e] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 animate-pulse-soft"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle size={28} className="text-white" />
    </a>
  );
};

export default WhatsAppButton;
