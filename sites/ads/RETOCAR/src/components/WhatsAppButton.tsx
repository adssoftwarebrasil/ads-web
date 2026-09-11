import { MessageCircle } from 'lucide-react';

const WHATSAPP_URL =
  'https://api.whatsapp.com/send/?phone=556233396922&text&type=phone_number&app_absent=0';

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chamar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] hover:bg-[#1db955] text-white font-bold py-3 px-4 rounded-full shadow-2xl shadow-green-900/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1 group"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25"></span>
      <MessageCircle
        className="lucide lucide-message-circle relative z-10 flex-shrink-0"
        width={22}
        height={22}
      />
      <span className="relative z-10 text-sm hidden sm:inline whitespace-nowrap">
        Fale no WhatsApp
      </span>
    </a>
  );
}
