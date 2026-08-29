import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5545988038430?text=Olá!%20Vim%20pelo%20site%20da%20Coopermédica%20e%20gostaria%20de%20mais%20informações."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all animate-pulse-slow group"
      title="Fale conosco pelo WhatsApp"
    >
      <MessageCircle className="text-white group-hover:rotate-12 transition-transform" size={32} />
    </a>
  );
}
