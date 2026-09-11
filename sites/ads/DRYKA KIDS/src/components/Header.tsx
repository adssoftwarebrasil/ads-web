import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Sobre Nós', target: 'sobre' },
  { label: 'Categorias', target: 'categorias' },
  { label: 'Depoimentos', target: 'depoimentos' },
  { label: 'Contato', target: 'contato' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center cursor-pointer" onClick={() => scrollTo('hero')}>
            <img
              src="https://storage.lucasmendes.dev/site-sp/dryka%20kids%2Flogo-sem-fundo.png"
              alt="Shop Dryka Kids Logo"
              className="h-14 md:h-16 w-auto object-contain"
            />
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.target)}
                className="text-gray-700 hover:text-pink-600 font-medium transition-colors"
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://wa.me/558888033252"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-pink-500 to-orange-400 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all"
            >
              Fale Conosco
            </a>
          </nav>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden p-2 text-gray-700 hover:text-pink-600 transition-colors"
            aria-label="Menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {menuOpen && (
          <nav className="md:hidden pb-4 flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.target)}
                className="text-left px-2 py-2 text-gray-700 hover:text-pink-600 font-medium transition-colors"
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://wa.me/558888033252"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-pink-500 to-orange-400 text-white px-6 py-2.5 rounded-full font-semibold text-center hover:shadow-lg transition-all"
            >
              Fale Conosco
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
