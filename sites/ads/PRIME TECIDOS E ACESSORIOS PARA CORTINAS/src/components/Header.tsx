import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Produtos', id: 'produtos' },
  { label: 'Avaliações', id: 'avaliacoes' },
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
          <div className="flex items-center">
            <img
              src="https://storage.lucasmendes.dev/site-sp/prime%20tecidos%2Fimg%2Flogo-sem-fundo.webp"
              alt="Prime Têxtil"
              className="h-12 sm:h-14 w-auto"
            />
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-gray-700 hover:text-black font-medium transition-colors"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo('contato')}
              className="bg-black text-white px-6 py-2.5 rounded-full font-medium hover:bg-gray-800 transition-all hover:scale-105"
            >
              Contato
            </button>
          </nav>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden text-gray-700 hover:text-black"
            aria-label="Menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        {menuOpen && (
          <nav className="md:hidden pb-4 flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-left text-gray-700 hover:text-black font-medium transition-colors py-2"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo('contato')}
              className="bg-black text-white px-6 py-2.5 rounded-full font-medium hover:bg-gray-800 transition-all text-center"
            >
              Contato
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
