import { WhatsAppIcon } from './icons';

export default function WhatsAppFloat() {
  return (
    <button
      aria-label="Falar pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20b858] text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1 animate-pulse-soft"
    >
      <WhatsAppIcon className="w-7 h-7" />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full border-2 border-white animate-ping opacity-75"></span>
    </button>
  );
}
