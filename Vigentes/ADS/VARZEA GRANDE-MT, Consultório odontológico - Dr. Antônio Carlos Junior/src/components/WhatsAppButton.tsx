import { MessageCircle } from 'lucide-react';

const WA_LINK =
  'https://wa.me/5565996610607?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.';

export default function WhatsAppButton() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white font-semibold text-sm px-4 py-3 rounded-full shadow-2xl hover:shadow-[#25D366]/40 transition-all duration-300 hover:scale-110 group"
    >
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-60" />
        <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
      </span>
      <MessageCircle size={20} />
      <span className="hidden sm:inline whitespace-nowrap">Agendar via WhatsApp</span>
    </a>
  );
}
