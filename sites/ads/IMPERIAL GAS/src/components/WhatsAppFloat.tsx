import { WhatsAppIcon } from './icons';

export default function WhatsAppFloat() {
  return (
    <div className="fixed bottom-6 right-6 z-50 transition-all duration-500 opacity-100 translate-y-0 scale-100">
      <div className="relative group">
        <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-50"></span>
        <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-30 animation-delay-300"></span>
        <a
          href="http://wa.me/556282381551"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Fale conosco pelo WhatsApp"
          className="relative flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-400 rounded-full shadow-2xl shadow-green-500/50 hover:shadow-green-400/60 transition-all duration-200 hover:scale-110 active:scale-95"
        >
          <WhatsAppIcon fill="white" className="w-7 h-7" />
        </a>
        <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-xs font-semibold px-3 py-1.5 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-xl">
          Fale pelo WhatsApp
          <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1.5 border-4 border-transparent border-l-gray-900"></span>
        </div>
      </div>
    </div>
  );
}
