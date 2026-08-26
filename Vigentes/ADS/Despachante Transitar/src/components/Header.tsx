import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <div className={`bg-secondary text-white py-2.5 text-sm transition-all duration-300 ${isScrolled ? 'hidden' : 'block'} hidden lg:block`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <span className="font-semibold">20 anos facilitando sua vida no trânsito</span>
          <div className="flex items-center gap-6">
            <a href="tel:+556699959486" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone size={14} />
              (66) 9 9953-9486
            </a>
            <a href="tel:+556634222732" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone size={14} />
              (66) 3422-2732
            </a>
            <a href="mailto:despachantetransitarmt@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail size={14} />
              despachantetransitarmt@gmail.com
            </a>
          </div>
        </div>
      </div>

      <header className={`bg-white sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg border-b-2' : 'border-b-3'} border-primary`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <img
              src="https://storage.lucasmendes.dev/site-sp/despachante%20transitar%2Fimgi_1_logo-4.png"
              alt="Despachante Transitar"
              className="h-12 lg:h-16 w-auto object-contain"
              style={{ 
                filter: 'brightness(0) saturate(100%) invert(27%) sepia(87%) saturate(1678%) hue-rotate(174deg) brightness(92%) contrast(99%)' 
              }}
            />
            <nav className="hidden lg:flex items-center gap-8">
              <button onClick={() => scrollToSection('inicio')} className="text-gray-700 hover:text-primary font-semibold transition-colors relative group">
                Início
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
              </button>
              <button onClick={() => scrollToSection('sobre')} className="text-gray-700 hover:text-primary font-semibold transition-colors relative group">
                Sobre
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
              </button>
              <button onClick={() => scrollToSection('servicos')} className="text-gray-700 hover:text-primary font-semibold transition-colors relative group">
                Serviços
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
              </button>
              <button onClick={() => scrollToSection('vantagens')} className="text-gray-700 hover:text-primary font-semibold transition-colors relative group">
                Vantagens
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
              </button>
              <button onClick={() => scrollToSection('depoimentos')} className="text-gray-700 hover:text-primary font-semibold transition-colors relative group">
                Depoimentos
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
              </button>
              <button onClick={() => scrollToSection('contato')} className="text-gray-700 hover:text-primary font-semibold transition-colors relative group">
                Contato
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
              </button>
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <a
                href="https://wa.me/556699854973"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-6 py-3 rounded-lg font-bold hover:scale-105 transition-transform shadow-lg flex items-center gap-2"
              >
                <Phone size={18} />
                WhatsApp
              </a>
              <a
                href="tel:+556634222732"
                className="bg-primary text-white px-6 py-3 rounded-lg font-bold hover:scale-105 transition-transform shadow-lg"
              >
                Ligar Agora
              </a>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-primary"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 animate-slide-in-right">
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              <button onClick={() => scrollToSection('inicio')} className="text-gray-700 hover:text-primary font-semibold text-left py-2">
                Início
              </button>
              <button onClick={() => scrollToSection('sobre')} className="text-gray-700 hover:text-primary font-semibold text-left py-2">
                Sobre
              </button>
              <button onClick={() => scrollToSection('servicos')} className="text-gray-700 hover:text-primary font-semibold text-left py-2">
                Serviços
              </button>
              <button onClick={() => scrollToSection('vantagens')} className="text-gray-700 hover:text-primary font-semibold text-left py-2">
                Vantagens
              </button>
              <button onClick={() => scrollToSection('depoimentos')} className="text-gray-700 hover:text-primary font-semibold text-left py-2">
                Depoimentos
              </button>
              <button onClick={() => scrollToSection('contato')} className="text-gray-700 hover:text-primary font-semibold text-left py-2">
                Contato
              </button>
              <a
                href="https://wa.me/556699854973"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-6 py-3 rounded-lg font-bold text-center mt-4"
              >
                WhatsApp
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
