import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X } from 'lucide-react';

const menuItems = [
  { label: 'Serviços', id: 'services' },
  { label: 'Diferenciais', id: 'differentials' },
  { label: 'Projetos', id: 'gallery' },
  { label: 'Processo', id: 'process' },
  { label: 'Sobre', id: 'about' },
  { label: 'Contato', id: 'contact' }
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // OTIMIZAÇÃO DE PERFORMANCE NO SCROLL
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const shouldBeScrolled = window.scrollY > 50;
          
          setIsScrolled((prev) => {
             // Só atualiza o estado se realmente mudou
             if (prev !== shouldBeScrolled) {
                 return shouldBeScrolled;
             }
             return prev;
          });
          
          ticking = false;
        });
        
        ticking = true;
      }
    };
    
    // { passive: true } melhora a performance em navegadores modernos
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  const whatsappNumber = '5562999851162';
  const whatsappMessage = 'Olá! Vim pelo site e gostaria de conhecer os serviços da Mais Luz Engenharia.';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[rgb(8,14,92)] ${
          isScrolled ? 'py-3 shadow-lg' : 'py-5 shadow-none'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center focus:outline-none"
              aria-label="Voltar ao topo"
            >
              <img
                src="https://storage.lucasmendes.dev/site-sp/mais%20luz%20service%2Fimg%2Flogo.webp"
                alt="Mais Luz Engenharia"
                className={`w-auto object-contain transition-all duration-300 ${
                  isScrolled ? 'h-20' : 'h-14 sm:h-16'
                }`}
              />
            </button>

            {/* Menu Desktop */}
            <nav className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="font-medium text-white hover:text-yellow-400 transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Botão WhatsApp Desktop */}
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-2 bg-yellow-400 text-blue-900 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-yellow-300 hover:scale-105 transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              Falar no WhatsApp
            </a>

            {/* Botão Menu Mobile */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
              aria-label="Abrir menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Menu Mobile Overlay */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        <div
          className={`absolute top-0 right-0 bottom-0 w-full max-w-sm bg-white shadow-2xl transform transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-[rgb(8,14,92)]">
            <img
              src="https://storage.lucasmendes.dev/site-sp/mais%20luz%20service%2Fimg%2Flogo.webp"
              alt="Mais Luz Engenharia"
              className="h-10 w-auto object-contain brightness-0 invert" 
            />
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Fechar menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col p-6 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left text-lg font-medium text-gray-700 hover:text-[rgb(8,14,92)] hover:bg-gray-50 px-4 py-3 rounded-lg transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200 bg-gray-50">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-[rgb(8,14,92)] text-white px-6 py-4 rounded-lg font-semibold shadow-md hover:bg-blue-900 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;