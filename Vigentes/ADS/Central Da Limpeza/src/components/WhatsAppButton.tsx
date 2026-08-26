import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5541999150216?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 md:px-5 bg-[#25D366] text-white font-semibold rounded-full shadow-2xl hover:bg-[#20b558] transition-all duration-300 hover:scale-105 active:scale-95 group"
      aria-label="Falar no WhatsApp"
    >
      <div className="relative">
        <MessageCircle size={24} className="fill-white" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse-slow" />
      </div>
      <span className="text-sm hidden sm:inline">Falar no WhatsApp</span>
    </a>
  );
}
