import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5581994073827?text=Olá! Gostaria de agendar uma consulta na Clínica Werneck."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-[9999] bg-[#25D366] text-white w-[60px] h-[60px] rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300 animate-pulse"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle size={32} />
    </a>
  );
}
