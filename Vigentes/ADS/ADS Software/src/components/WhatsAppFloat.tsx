import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/558007800040"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group transition-all duration-300 translate-y-0 opacity-100"
      aria-label="Fale Conosco no WhatsApp"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-[#33a753] rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity animate-pulse"></div>
        <div className="relative bg-[#33a753] hover:bg-[#2d9249] text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform group-hover:scale-110">
          <MessageCircle className="w-8 h-8" />
        </div>
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold animate-bounce">
          1
        </div>
      </div>
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        <span className="font-semibold">Fale Conosco</span>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
          <div className="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-white"></div>
        </div>
      </div>
    </a>
  );
}
