import { MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        {showTooltip && (
          <div className="absolute bottom-full right-0 mb-2 px-4 py-2 bg-gray-dark text-white text-sm rounded-lg whitespace-nowrap shadow-lg animate-fadeIn">
            Fale Comigo
          </div>
        )}
        <a
          href="https://wa.me/556282702366?text=Olá, gostaria de saber mais sobre como funciona a terapia."
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 transition-transform animate-pulse hover:animate-none"
        >
          <MessageCircle className="w-8 h-8" />
        </a>
      </div>
    </div>
  );
}
