import { MessageCircle } from 'lucide-react';

const WHATSAPP_URL =
  'https://api.whatsapp.com/send/?phone=5511947279099&text&type=phone_number&app_absent=0';

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-gradient-to-br from-[#b900ba] to-[#38d060] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 animate-pulse hover:animate-none"
      aria-label="Entre em contato pelo WhatsApp"
    >
      <MessageCircle size={32} />
    </a>
  );
}
