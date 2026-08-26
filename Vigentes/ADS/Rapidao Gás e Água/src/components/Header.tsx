import { useEffect, useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { scrollToSection, WA_NUMBER } from '../lib';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Produtos', id: 'produtos' },
  { label: 'Sobre', id: 'sobre' },
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

  const handleNav = (id: string) => {
    setMenuOpen(false);
    scrollToSection(id);
  };

  const textClass = scrolled ? 'text-gray-800' : 'text-white drop-shadow';

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#inicio" className="flex items-center gap-2">
            <img
              src="https://storage.lucasmendes.dev/site-sp/rapidao%20gas%20e%20agua/img/logo-sem-fundo.webp"
              alt="Rapidão Gás e Água"
              className="h-12 md:h-16 w-auto object-contain drop-shadow"
            />
          </a>
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`text-sm font-semibold transition-colors duration-200 hover:text-orange-500 ${textClass}`}
              >
                {item.label}
              </button>
            ))}
            <a
              href={`http://wa.me/${WA_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold px-5 py-2.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              style={{ backgroundColor: 'rgb(241, 93, 34)' }}
            >
              <Phone size={15} strokeWidth={2} />
              Peça Agora
            </a>
          </nav>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-gray-800' : 'text-white'
            }`}
            aria-label="Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="text-left text-sm font-semibold text-gray-800 hover:text-orange-500 py-2 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <a
              href={`http://wa.me/${WA_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-white text-sm font-bold px-5 py-3 rounded-full mt-2"
              style={{ backgroundColor: 'rgb(241, 93, 34)' }}
            >
              <Phone size={15} strokeWidth={2} />
              Peça Agora
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
