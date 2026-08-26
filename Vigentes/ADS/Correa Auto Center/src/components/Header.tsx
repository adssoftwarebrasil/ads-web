import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { scrollToSection } from '../utils';

const navItems = [
  { label: 'Serviços', id: 'services' },
  { label: 'Sobre', id: 'about' },
  { label: 'Galeria', id: 'gallery' },
  { label: 'Avaliações', id: 'testimonials' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (id: string) => {
    scrollToSection(id);
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 shadow-lg' : 'bg-black/90'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('hero')}>
            <img
              src="https://storage.lucasmendes.dev/site-sp/correa%20auto%20center%2Fimg%2Flogo-sem-fundo.webp"
              alt="Correa Auto Center"
              className="h-20 w-auto brightness-0 invert"
            />
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="text-white hover:text-[rgb(207,30,37)] transition-colors duration-300 font-medium"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNav('contact')}
              className="bg-[rgb(207,30,37)] text-white px-6 py-3 rounded-lg hover:bg-[rgb(187,20,27)] transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Contato
            </button>
          </nav>
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        {isMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="text-white hover:text-[rgb(207,30,37)] transition-colors duration-300 font-medium text-left py-2"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNav('contact')}
              className="bg-[rgb(207,30,37)] text-white px-6 py-3 rounded-lg hover:bg-[rgb(187,20,27)] transition-all duration-300 font-semibold shadow-lg"
            >
              Contato
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
