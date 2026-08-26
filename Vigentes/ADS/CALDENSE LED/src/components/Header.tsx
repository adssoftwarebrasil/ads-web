import { useState, useEffect } from 'react';
import { Phone, Menu } from 'lucide-react';
import { scrollToSection } from '../utils/scroll';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Produtos', id: 'produtos' },
  { label: 'Diferenciais', id: 'diferenciais' },
  { label: 'Galeria', id: 'galeria' },
  { label: 'Contato', id: 'contato' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (id: string) => {
    setMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#010101]/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              handleNav('inicio');
            }}
            className="flex items-center gap-3 group"
          >
            <img
              src="https://storage.lucasmendes.dev/site-sp/caldense%20led/img/logo-sem-fundo.webp"
              alt="Caldense LED Iluminação"
              className="h-10 sm:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105 brightness-0 invert"
            />
          </a>
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="px-4 py-2 text-sm font-medium text-white/90 hover:text-[#F9AA0C] transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F9AA0C] transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+553530646373"
              className="flex items-center gap-2 text-sm text-white/80 hover:text-[#F9AA0C] transition-colors"
            >
              <Phone className="lucide lucide-phone" width={16} height={16} />
              <span>(35) 3064-6373</span>
            </a>
            <a
              href="http://wa.me/553530646373"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#239110] hover:bg-[#1a6b0c] text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-green-900/40 hover:-translate-y-0.5"
            >
              Fale Conosco
            </a>
          </div>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Menu"
          >
            <Menu className="lucide lucide-menu" width={24} height={24} />
          </button>
        </div>
      </div>
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[#010101] border-t border-white/10 px-4 py-4 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className="block w-full text-left px-4 py-3 text-white/90 hover:text-[#F9AA0C] hover:bg-white/5 rounded-lg transition-all duration-200 text-sm font-medium"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <a
              href="tel:+553530646373"
              className="flex items-center gap-2 px-4 py-2 text-sm text-white/80"
            >
              <Phone className="lucide lucide-phone" width={16} height={16} />
              (35) 3064-6373
            </a>
            <a
              href="http://wa.me/553530646373"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#239110] text-white px-5 py-3 rounded-full text-sm font-semibold text-center transition-all duration-300 hover:bg-[#1a6b0c]"
            >
              Fale pelo WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
