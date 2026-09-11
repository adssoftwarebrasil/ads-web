import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/5562992861117?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-[#25D366] text-white font-semibold text-sm px-5 py-3.5 shadow-xl shadow-black/20 hover:bg-[#1ebe58] transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5 active:scale-95"
    >
      <MessageCircle className="lucide lucide-message-circle" width={20} height={20} />
      <span className="hidden sm:inline">Pedir Orçamento</span>
    </a>
  );
}
