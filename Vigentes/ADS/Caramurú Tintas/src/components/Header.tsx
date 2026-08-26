import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Início', id: 'home' },
  { label: 'Sobre', id: 'about' },
  { label: 'Produtos', id: 'products' },
  { label: 'Avaliações', id: 'testimonials' },
];

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (id: string) => {
    scrollToSection(id);
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src="https://storage.lucasmendes.dev/site-sp/caramuru%20tintas%2Fimg%2Flogo-sem-fundo.png"
              alt="Caramurú Tintas"
              className="h-12 md:h-16 w-auto object-contain transition-all duration-300"
            />
          </div>
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNav('contact')}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Contato
            </button>
          </nav>
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="lg:hidden p-2 text-gray-700 hover:text-blue-600"
            aria-label="Menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {menuOpen && (
          <nav className="lg:hidden mt-4 flex flex-col space-y-2 pb-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="text-left text-gray-700 hover:text-blue-600 font-medium transition-colors py-2"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNav('contact')}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-lg font-medium hover:shadow-lg transition-all duration-300 text-center"
            >
              Contato
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
