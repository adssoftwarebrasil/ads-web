import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <button
      onClick={() => window.open('https://wa.me/5545991434496', '_blank')}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 hover:bg-[#128C7E] animate-pulse"
      aria-label="Enviar mensagem no WhatsApp"
    >
      <MessageCircle size={32} />
    </button>
  );
}
