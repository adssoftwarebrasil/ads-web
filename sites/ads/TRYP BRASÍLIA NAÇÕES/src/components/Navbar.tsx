import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  const menuItems = [
    { label: 'Início', id: 'hero' },
    { label: 'Sobre', id: 'about' },
    { label: 'Serviços', id: 'services' },
    { label: 'Galeria', id: 'gallery' },
    { label: 'Localização', id: 'location' },
    { label: 'Contato', id: 'contact' }
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 bg-white ${
        isScrolled ? 'shadow-md' : 'border-b border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center py-3">
            <button 
              onClick={() => scrollToSection('hero')} 
              className="hover:opacity-80 transition-opacity focus:outline-none"
              aria-label="Ir para o início"
            >
              <img 
                src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=tryp%2F341577424_2216720101847230_8820045510436793954_n%20-%20Copia.jpg&version_id=null"
                alt="Tryp Brasília Nações"
                className={`transition-all duration-300 ${
                  isScrolled ? 'h-12' : 'h-16'
                }`}
              />
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="group relative text-gray-600 hover:text-blue-900 transition-colors duration-300 text-sm font-medium uppercase tracking-wide"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-900 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* CTA Button Desktop */}
          <div className="hidden md:block">
            <button
              onClick={() => window.open('https://wa.me/5561324695520?text=Olá! Gostaria de fazer uma reserva.', '_blank')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded shadow-sm hover:shadow-md font-semibold transition-all duration-300 transform hover:-translate-y-0.5 text-sm uppercase tracking-wide"
            >
              Reservar Agora
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-blue-900 focus:outline-none p-2"
              aria-label="Abrir menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-6 space-y-4 shadow-inner">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="block w-full text-left px-4 py-3 text-gray-700 font-medium hover:bg-gray-50 hover:text-blue-900 rounded-lg transition-colors border-l-4 border-transparent hover:border-amber-500"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4 px-4">
            <button
              onClick={() => {
                window.open('https://wa.me/5561324695520?text=Olá! Gostaria de fazer uma reserva.', '_blank');
                setIsMobileMenuOpen(false);
              }}
              className="block w-full bg-amber-500 hover:bg-amber-600 text-white px-4 py-3 rounded text-center font-bold uppercase tracking-wide shadow-sm"
            >
              Fazer Reserva
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}