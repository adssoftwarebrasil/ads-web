import { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href="https://wa.me/553497228602?text=Olá! Vim pelo site e gostaria de mais informações sobre os suplementos."
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[9999] transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20 pointer-events-none'
      }`}
      aria-label="Contato via WhatsApp"
    >
      <div className="relative group">
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
        <div className="relative w-14 h-14 md:w-16 md:h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110">
          <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-white" />
        </div>
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Fale conosco no WhatsApp
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full border-8 border-transparent border-l-gray-900"></div>
        </div>
      </div>
    </a>
  );
}
