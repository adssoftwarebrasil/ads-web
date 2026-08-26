import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  currentPage?: string;
  setCurrentPage?: (page: string) => void;
}

export default function Header({ currentPage = 'home', setCurrentPage }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (currentPage !== 'home') {
      window.location.hash = 'home';
      setTimeout(() => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navigateToPage = (page: string) => {
    window.location.hash = page;
    setIsMobileMenuOpen(false);
  };

  const menuItems = [
    { label: 'Início', id: 'inicio', type: 'scroll' },
    { label: 'Sobre', id: 'sobre', type: 'scroll' },
    { label: 'Serviços', id: 'servicos', type: 'scroll' },
    { label: 'Aulas', id: 'aulas', type: 'page' },
    { label: 'Horários', id: 'horarios', type: 'scroll' },
    { label: 'Localização', id: 'localizacao', type: 'scroll' },
    { label: 'Contato', id: 'contato', type: 'scroll' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg py-3'
          : 'bg-white/95 backdrop-blur-sm shadow-md py-3'
      }`}
      role="banner"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            onClick={() => navigateToPage('home')}
            className="flex items-center cursor-pointer group relative z-10"
            aria-label="Voltar para página inicial"
          >
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 -my-6">
              <img
                src="https://storage.lucasmendes.dev/site-sp/speedarena%2F472453876_607353361778514_6167536542762011750_n.png"
                alt="Speed Arena - Beach Sports"
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                loading="eager"
              />
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block" role="navigation" aria-label="Menu principal">
            <ul className="flex items-center gap-1">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => 
                      item.type === 'page' 
                        ? navigateToPage(item.id)
                        : scrollToSection(item.id)
                    }
                    className="text-gray-700 hover:text-purple-600 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-purple-50 font-medium focus:outline-none focus:ring-2 focus:ring-purple-400"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Button Desktop - Gradiente roxo e verde */}
          <a
            href="https://wa.me/5562983092884?text=Ol%C3%A1!%20Gostaria%20de%20reservar%20uma%20quadra."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:block bg-gradient-to-r from-purple-400 to-green-400 text-white px-6 py-3 rounded-full font-bold hover:scale-105 hover:shadow-xl hover:from-purple-500 hover:to-green-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-white"
            aria-label="Reservar quadra online"
          >
            Reservar Quadra
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-gray-700 p-2 hover:bg-purple-50 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400"
            aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav
            id="mobile-menu"
            className="lg:hidden mt-4 pb-4 bg-white rounded-lg shadow-inner"
            role="navigation"
            aria-label="Menu mobile"
          >
            <ul className="flex flex-col gap-2">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() =>
                      item.type === 'page'
                        ? navigateToPage(item.id)
                        : scrollToSection(item.id)
                    }
                    className="text-gray-700 hover:text-purple-600 hover:bg-purple-50 px-4 py-3 rounded-lg transition-all duration-300 font-medium w-full text-left focus:outline-none focus:ring-2 focus:ring-purple-400"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li>
                <a
                  href="https://wa.me/5562983092884?text=Ol%C3%A1!%20Gostaria%20de%20reservar%20uma%20quadra."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-gradient-to-r from-purple-400 to-green-400 text-white px-4 py-3 rounded-lg font-bold text-center hover:from-purple-500 hover:to-green-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  aria-label="Reservar quadra online"
                >
                  Reservar Quadra
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}