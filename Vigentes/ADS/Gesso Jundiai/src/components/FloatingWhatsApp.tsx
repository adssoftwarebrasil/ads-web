import { MessageCircle } from './icons';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/5511933943710?text=Olá! Gostaria de saber mais sobre os produtos da Gesso Jundiaí."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 group flex items-center gap-3"
    >
      <span className="bg-black text-white text-sm font-medium px-3 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-lg">
        Fale Conosco
      </span>
      <div className="relative w-14 h-14 rounded-full bg-[#EE1E23] shadow-lg shadow-red-900/50 flex items-center justify-center hover:bg-red-700 transition-all duration-300 hover:scale-110">
        <span className="absolute inset-0 rounded-full bg-[#EE1E23] animate-ping opacity-30"></span>
        <MessageCircle size={26} className="text-white relative z-10" />
      </div>
    </a>
  );
}
