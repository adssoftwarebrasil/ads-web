import { MessageCircle } from 'lucide-react';

const WHATSAPP_URL =
  'https://wa.me/5562993240002?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20de%20engate.';

export default function WhatsAppFab() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 md:bottom-8 md:right-8 z-[9999] bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full w-14 h-14 md:w-16 md:h-16 flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 animate-pulse-subtle"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="lucide lucide-message-circle " width={28} height={28} />
    </a>
  );
}
