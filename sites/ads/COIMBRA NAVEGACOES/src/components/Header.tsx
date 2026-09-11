import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { scrollToSection } from '../lib/scroll';

const navLinks = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre Nós', id: 'sobre' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Frota', id: 'frota' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (id: string) => {
    setMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <img
              src="https://storage.lucasmendes.dev/site-sp/coimbra%20navegacoes%2Fimg%2Flogo-horizental.webp"
              alt="Coimbra Navegações"
              className="h-12 sm:h-14 w-auto"
            />
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className="text-[rgb(41,41,41)] hover:text-[rgb(253,133,17)] font-medium transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNav('contato')}
              className="bg-[rgb(6,172,50)] text-white px-6 py-2.5 rounded-lg font-medium hover:bg-[rgb(5,150,43)] transition-all hover:shadow-lg"
            >
              Contato
            </button>
          </nav>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-[rgb(41,41,41)]"
            aria-label="Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {menuOpen && (
          <nav className="md:hidden pb-4 flex flex-col space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className="text-left text-[rgb(41,41,41)] hover:text-[rgb(253,133,17)] font-medium transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNav('contato')}
              className="bg-[rgb(6,172,50)] text-white px-6 py-2.5 rounded-lg font-medium hover:bg-[rgb(5,150,43)] transition-all hover:shadow-lg text-center"
            >
              Contato
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
