import { MessageCircle } from 'lucide-react';
import { useWhatsAppModal, whatsappLink } from '../context/WhatsAppModalContext';

const floatingMessage =
  'Olá! Vim através do site e gostaria de mais informações sobre os serviços da Vidrolatas.';

export default function WhatsAppButton() {
  const { openModal } = useWhatsAppModal();

  return (
    <a
      href={whatsappLink(floatingMessage)}
      onClick={(e) => {
        e.preventDefault();
        openModal(floatingMessage);
      }}
      className="fixed bottom-6 right-6 z-[9999] w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 animate-pulse-soft group"
      aria-label="Abrir WhatsApp"
    >
      <MessageCircle className="text-white" size={28} />
      <span className="absolute right-full mr-3 bg-[#012d78] text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg pointer-events-none">
        Fale conosco
      </span>
    </a>
  );
}
