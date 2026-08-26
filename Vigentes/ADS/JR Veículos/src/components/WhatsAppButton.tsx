import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5566999755005?text=Olá! Vim pelo site da JR Veículos e gostaria de mais informações."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3.5 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold text-sm rounded-2xl shadow-2xl shadow-[#25D366]/40 transition-all duration-300 hover:scale-105 group"
      aria-label="Falar pelo WhatsApp"
    >
      <MessageCircle size={22} className="animate-pulse-slow" />
      <span className="hidden sm:inline">Falar no WhatsApp</span>
    </a>
  );
}
