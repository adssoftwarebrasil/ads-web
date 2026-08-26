import { MessageCircle } from 'lucide-react';

const whatsappGeneral =
  'https://api.whatsapp.com/send?phone=5561983132002&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20Gerencial%20Cont%C3%A1bil.';

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappGeneral}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110 z-50"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <MessageCircle className="lucide lucide-message-circle" width={28} height={28} />
    </a>
  );
}
