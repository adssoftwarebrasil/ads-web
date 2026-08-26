import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5545999207671"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Falar no WhatsApp"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-[#25d366] rounded-full animate-ping opacity-75"></div>
        <div className="relative w-14 h-14 bg-[#25d366] hover:bg-[#0caff0] rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 transform group-hover:scale-110">
          <MessageCircle className="w-7 h-7 text-white" />
        </div>
      </div>

      <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-[#34393a] text-white px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        <span className="text-sm font-semibold">Fale Conosco</span>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
          <div className="border-8 border-transparent border-l-[#34393a]"></div>
        </div>
      </div>
    </a>
  );
}
