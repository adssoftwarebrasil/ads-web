import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Início', id: 'home' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Produtos', id: 'produtos' },
  { label: 'Avaliações', id: 'avaliacoes' },
  { label: 'Contato', id: 'contato' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-sm py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src="https://storage.lucasmendes.dev/site-sp/orquidario%20orquidea%2Fimg%2Flogo-sem-fundo.webp"
              alt="Orquidário Orquídea&amp;Cia"
              className="h-12 md:h-14 w-auto object-contain"
            />
          </div>
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-gray-700 hover:text-[rgb(22,126,79)] transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <a
              href="tel:1941171827"
              className="hidden md:flex items-center space-x-2 bg-[rgb(22,126,79)] text-white px-5 py-2.5 rounded-full hover:bg-[rgb(22,126,79)]/90 transition-all shadow-md hover:shadow-lg"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">(19) 4117-1827</span>
            </a>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="lg:hidden text-gray-700 hover:text-[rgb(22,126,79)] transition-colors"
              aria-label="Menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav className="lg:hidden mt-4 flex flex-col space-y-2 pb-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-left text-gray-700 hover:text-[rgb(22,126,79)] transition-colors font-medium py-2"
              >
                {item.label}
              </button>
            ))}
            <a
              href="tel:1941171827"
              className="md:hidden flex items-center space-x-2 bg-[rgb(22,126,79)] text-white px-5 py-2.5 rounded-full hover:bg-[rgb(22,126,79)]/90 transition-all shadow-md w-fit"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">(19) 4117-1827</span>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
