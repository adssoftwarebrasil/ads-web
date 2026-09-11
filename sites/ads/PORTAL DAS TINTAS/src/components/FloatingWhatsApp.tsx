import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/5527997073666?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20os%20produtos%20da%20Portal%20Tintas"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[9999] bg-[#25D366] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 animate-pulse"
      aria-label="Contato WhatsApp"
      style={{ boxShadow: 'rgba(37, 211, 102, 0.4) 0px 4px 16px' }}
    >
      <MessageCircle className="lucide lucide-message-circle " width={32} height={32} />
    </a>
  );
}
