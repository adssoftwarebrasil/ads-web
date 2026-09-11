import { useEffect, useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Galeria', id: 'galeria' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Contato', id: 'contato' },
];

const LOGO = 'https://storage.lucasmendes.dev/site-sp/tropical%20toldos/img/logo-sem-fundo.webp';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2 flex-shrink-0">
          <img src={LOGO} alt="Tropical Toldos" className="h-16 w-auto object-contain" />
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`text-sm font-semibold transition-colors duration-200 hover:text-tropical-blue ${
                scrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
        <a
          href="http://wa.me/556684533788"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:flex items-center gap-2 bg-tropical-blue hover:bg-tropical-navy text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg"
        >
          <Phone className="lucide lucide-phone" width={16} height={16} />
          Solicitar Orçamento
        </a>
        <button
          className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-gray-800' : 'text-white'}`}
          aria-label="Menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? (
            <X className="lucide lucide-x" width={24} height={24} />
          ) : (
            <Menu className="lucide lucide-menu" width={24} height={24} />
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-white shadow-lg border-t border-gray-100 mt-2">
          <nav className="flex flex-col px-4 py-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-left text-sm font-semibold text-gray-800 hover:text-tropical-blue py-3 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <a
              href="http://wa.me/556684533788"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 bg-tropical-blue hover:bg-tropical-navy text-white text-sm font-semibold px-5 py-3 rounded-full transition-all duration-200"
            >
              <Phone className="lucide lucide-phone" width={16} height={16} />
              Solicitar Orçamento
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
