import { MessageCircle } from 'lucide-react';

const WA_NUMBER = '5564999743169';

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WA_NUMBER}?text=Olá! Vim pelo site e gostaria de mais informações.`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 group flex items-center gap-3"
    >
      <span className="hidden sm:flex opacity-0 group-hover:opacity-100 translate-x-3 group-hover:translate-x-0 transition-all duration-300 bg-[#111111] border border-[#2a2a2a] text-white text-sm font-medium px-4 py-2.5 rounded-full shadow-xl whitespace-nowrap">
        Falar no WhatsApp
      </span>
      <div className="relative w-14 h-14 bg-green-500 hover:bg-green-400 rounded-full shadow-2xl shadow-green-500/40 flex items-center justify-center transition-all duration-200 hover:scale-110 animate-pulse-soft">
        <MessageCircle size={26} className="text-white" fill="white" />
      </div>
    </a>
  );
}
