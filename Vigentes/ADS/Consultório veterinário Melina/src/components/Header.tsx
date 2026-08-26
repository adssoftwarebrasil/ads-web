import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
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
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const menuItems = [
    { label: 'Início', id: 'hero' },
    { label: 'Serviços', id: 'services' },
    { label: 'Sobre Nós', id: 'about' },
    { label: 'Especialidades', id: 'differentials' },
    { label: 'Contato', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img
              src="https://storage.lucasmendes.dev/site-sp/Consult%C3%B3rio%20veterin%C3%A1rio%20Melina%2FLOGO-SEM-FUNDO.png"
              alt="Consultório Veterinário Melina"
              className="h-12 sm:h-16 w-auto object-contain cursor-pointer"
              onClick={() => scrollToSection('hero')}
            />
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-secondary hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+5561992486998"
              className="flex items-center space-x-2 text-secondary hover:text-primary transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="font-semibold">(61) 99248-6998</span>
            </a>
            <a
              href="https://wa.me/5561992486998"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary-light text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Agendar Consulta
            </a>
          </div>

          <button
            className="lg:hidden text-secondary p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <nav className="px-4 py-6 space-y-4">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-secondary hover:text-primary transition-colors duration-200 font-medium py-2"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 border-t border-gray-200 space-y-3">
              <a
                href="tel:+5561992486998"
                className="flex items-center space-x-2 text-secondary hover:text-primary transition-colors py-2"
              >
                <Phone className="w-5 h-5" />
                <span className="font-semibold">(61) 99248-6998</span>
              </a>
              <a
                href="https://wa.me/5561992486998"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-primary hover:bg-primary-light text-white px-6 py-3 rounded-full font-semibold text-center transition-all duration-300"
              >
                Agendar Consulta
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
