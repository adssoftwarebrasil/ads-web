import { MessageCircle } from 'lucide-react';

const WA_URL =
  'https://api.whatsapp.com/send?phone=5531999364049&text=Ol%C3%A1%20vim%20pelo%20Google!';

export default function WhatsAppButton() {
  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-30" />
        <div className="relative flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl shadow-green-500/40 transition-all duration-300 hover:scale-110 pl-4 pr-5 py-4 md:py-3.5">
          <MessageCircle size={26} className="shrink-0" />
          <span className="font-barlow font-700 text-sm uppercase tracking-wide hidden md:block whitespace-nowrap">
            WhatsApp
          </span>
        </div>
      </div>
    </a>
  );
}