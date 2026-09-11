import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://api.whatsapp.com/send/?phone=556599769001&text&type=phone_number&app_absent=0"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20BA5A] transition-all duration-300 hover:scale-110 animate-pulse group"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle className="lucide lucide-message-circle " width={28} height={28} />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-[rgb(114,115,119)] text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
        Fale conosco!
      </span>
    </a>
  );
}
