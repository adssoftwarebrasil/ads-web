import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5566996360441?text=Olá!%20Gostaria%20de%20fazer%20uma%20reserva"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 group animate-pulse hover:animate-none"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle
        size={32}
        className="text-white group-hover:rotate-12 transition-transform"
      />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-ping"></span>
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full"></span>
    </a>
  );
}
