import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/558432239388"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#E76012] hover:bg-[#c9520f] rounded-full flex items-center justify-center shadow-2xl shadow-orange-900/50 transition-all duration-300 hover:scale-110"
    >
      <span className="absolute w-14 h-14 rounded-full bg-[#E76012] opacity-40 animate-ping" />
      <MessageCircle size={24} className="text-white relative z-10" />
    </a>
  );
}
