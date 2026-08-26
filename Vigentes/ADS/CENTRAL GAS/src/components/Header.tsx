import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { scrollToSection } from '../lib/scroll';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Produtos', id: 'produtos' },
  { label: 'Por que nós?', id: 'beneficios' },
  { label: 'Avaliações', id: 'avaliacoes' },
  { label: 'Contato', id: 'contato' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (id: string) => {
    setMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-primary/90 backdrop-blur-sm py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2 shrink-0">
          <img
            src="https://storage.lucasmendes.dev/site-sp/central%20gas/img/logo-sem-fundo.webp"
            alt="Central Gás"
            className="h-10 md:h-12 w-auto object-contain"
          />
        </a>
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className="text-white/90 hover:text-accent font-medium px-4 py-2 rounded-lg transition-all duration-200 hover:bg-white/10 text-sm"
            >
              {item.label}
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="http://wa.me/556696555500"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 bg-accent hover:bg-accent-bright text-primary font-bold px-5 py-2.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 text-sm"
          >
            <Phone
              size={16}
              className="lucide lucide-phone "
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            Pedir Agora
          </a>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav className="lg:hidden mt-3 mx-4 sm:mx-6 bg-primary-dark/95 backdrop-blur-sm rounded-2xl p-2 flex flex-col">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className="text-white/90 hover:text-accent font-medium px-4 py-3 rounded-lg transition-all duration-200 hover:bg-white/10 text-sm text-left"
            >
              {item.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
