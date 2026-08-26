import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <a
      href="https://wa.me/5562981369983?text=Olá,%20acabei%20de%20visitar%20o%20seu%20site%20e%20gostaria%20de%20mais%20informações."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 md:bottom-6 md:right-6 z-50 group animate-fade-in"
      aria-label="Fale conosco no WhatsApp"
    >
      <div className="relative">
        <div className="w-16 h-16 bg-[#25D366] hover:bg-[#20BA5A] rounded-full flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 transition-all duration-300 animate-pulse-subtle">
          <MessageCircle className="w-8 h-8 text-white" />
        </div>

        <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-ping">
          <span className="text-white text-xs font-bold">1</span>
        </div>

        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-gray-900 text-white text-sm px-4 py-2 rounded-lg shadow-lg whitespace-nowrap">
            Fale conosco no WhatsApp
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
              <div className="border-8 border-transparent border-l-gray-900"></div>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default FloatingWhatsApp;
