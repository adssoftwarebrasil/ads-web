import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/5581996457782?text=Olá! Gostaria de solicitar um orçamento."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#1db954] text-white rounded-full shadow-2xl shadow-green-900/40 transition-all duration-300 hover:scale-110 group"
      aria-label="Falar no WhatsApp"
    >
      <span className="hidden group-hover:flex items-center pl-5 pr-2 py-3 font-semibold text-sm whitespace-nowrap">
        Fale no WhatsApp
      </span>
      <div className="relative p-4">
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30"></span>
        <MessageCircle className="lucide lucide-message-circle w-7 h-7 relative z-10" />
      </div>
    </a>
  );
}
