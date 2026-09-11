import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const openWhatsApp = () => {
    window.open('https://wa.me/5508005552569?text=Olá!%20Vim%20do%20site%20e%20gostaria%20de%20mais%20informações', '_blank');
  };

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 w-16 h-16 bg-[#5ca57a] text-white rounded-full shadow-[0_4px_16px_rgba(92,165,122,0.4)] hover:scale-110 hover:rotate-[360deg] transition-all duration-300 flex items-center justify-center z-[9999] animate-pulse-subtle"
      aria-label="Abrir WhatsApp"
    >
      <MessageCircle size={32} />
    </button>
  );
}
