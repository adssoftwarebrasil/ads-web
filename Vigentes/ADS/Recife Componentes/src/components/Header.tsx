import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Produtos', id: 'produtos' },
  { label: 'Avaliações', id: 'avaliacoes' },
  { label: 'Contato', id: 'contato' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <img
              src="https://storage.lucasmendes.dev/site-sp/recife%20componentes/img/logo-sem-fundo.webp"
              alt="Recife Componentes"
              className="h-16 w-auto"
            />
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-gray-700 hover:text-[rgb(231,195,37)] transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
            <a
              href="http://wa.me/558199266617"
              className="bg-[rgb(231,195,37)] text-[rgb(12,27,76)] px-6 py-3 rounded-lg font-semibold hover:bg-[rgb(187,133,19)] transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Fale Conosco
            </a>
          </div>
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="md:hidden text-gray-700 p-2"
            aria-label="Menu"
          >
            {menuOpen ? (
              <X className="lucide lucide-x w-6 h-6" />
            ) : (
              <Menu className="lucide lucide-menu w-6 h-6" />
            )}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="block w-full text-left px-2 py-2 text-gray-700 hover:text-[rgb(231,195,37)] transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
            <a
              href="http://wa.me/558199266617"
              className="block text-center bg-[rgb(231,195,37)] text-[rgb(12,27,76)] px-6 py-3 rounded-lg font-semibold hover:bg-[rgb(187,133,19)] transition-all duration-300 shadow-md"
            >
              Fale Conosco
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
