import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Sobre', id: 'sobre' },
  { label: 'Cardápio', id: 'cardapio' },
  { label: 'Avaliações', id: 'avaliacoes' },
  { label: 'Contato', id: 'contato' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <img
              src="https://storage.lucasmendes.dev/site-sp/choppao%20restaurante%2Fimg%2Flogo-sem-fundo.webp"
              alt="CHOPPÃO Desde 1974"
              className="h-16 w-auto object-contain"
            />
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-gray-700 hover:text-[rgb(71,136,84)] transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
            <a
              href="tel:6536235005"
              className="flex items-center gap-2 bg-[rgb(71,136,84)] text-white px-6 py-2.5 rounded-full hover:bg-[rgb(61,126,74)] transition-all duration-200 font-medium shadow-md hover:shadow-lg"
            >
              <Phone className="w-4 h-4" />
              <span>(65) 3623-5005</span>
            </a>
          </nav>
          <button
            className="md:hidden text-gray-700 p-2"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-[rgb(71,136,84)] hover:bg-gray-50 rounded-lg transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
            <a
              href="tel:6536235005"
              className="flex items-center gap-2 bg-[rgb(71,136,84)] text-white px-6 py-2.5 rounded-full hover:bg-[rgb(61,126,74)] transition-all duration-200 font-medium mt-2 justify-center"
            >
              <Phone className="w-4 h-4" />
              <span>(65) 3623-5005</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
