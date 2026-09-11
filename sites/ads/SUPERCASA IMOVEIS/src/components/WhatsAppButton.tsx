import { MessageCircle } from 'lucide-react';

const WHATSAPP =
  'https://api.whatsapp.com/send/?phone=556699231818&text&type=phone_number&app_absent=0';

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25d366] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 animate-pulse-slow"
    >
      <MessageCircle size={28} fill="white" strokeWidth={0} className="relative z-10" />
    </a>
  );
}
