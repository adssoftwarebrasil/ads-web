import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { WHATSAPP_URL, IMG, scrollToSection } from '../constants';

const NAV_ITEMS = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Galeria', id: 'galeria' },
  { label: 'Vantagens', id: 'vantagens' },
  { label: 'Depoimentos', id: 'depoimentos' },
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
    scrollToSection(id);
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[rgb(29,29,27)]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <img src={IMG.logo} alt="Ouro Fino Joias" className="h-12 w-auto" />
          </div>
          <nav className="hidden lg:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="text-white hover:text-[rgb(186,176,97)] transition-colors duration-300 text-sm font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:block bg-[rgb(186,176,97)] text-[rgb(29,29,27)] px-6 py-3 rounded-md hover:bg-[rgb(126,102,42)] transition-all duration-300 font-semibold"
          >
            Fale Conosco
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="lg:hidden bg-[rgb(29,29,27)]/98 backdrop-blur-md border-t border-[rgb(186,176,97)]/20">
          <nav className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="text-white hover:text-[rgb(186,176,97)] transition-colors duration-300 text-base font-medium text-left"
              >
                {item.label}
              </button>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[rgb(186,176,97)] text-[rgb(29,29,27)] px-6 py-3 rounded-md hover:bg-[rgb(126,102,42)] transition-all duration-300 font-semibold text-center"
            >
              Fale Conosco
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
