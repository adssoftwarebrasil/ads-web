import { MessageCircle } from 'lucide-react';
import { useState } from 'react';

export function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href="https://wa.me/5592981059681"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <div className="bg-[#059669] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform animate-pulse-slow">
          <MessageCircle className="w-8 h-8" />
        </div>

        <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#059669] rounded-full animate-ping"></div>
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#059669] rounded-full border-2 border-white"></div>

        {isHovered && (
          <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 whitespace-nowrap bg-[#059669] text-white px-4 py-2 rounded-lg shadow-xl">
            <span className="font-semibold">Fale Conosco</span>
            <div className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-full">
              <div className="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-[#059669]"></div>
            </div>
          </div>
        )}
      </div>
    </a>
  );
}
