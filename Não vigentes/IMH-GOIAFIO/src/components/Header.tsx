import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { scrollToId } from '../whatsapp';

const navLinks = [
  { label: 'Sobre', id: 'sobre' },
  { label: 'Produtos', id: 'produtos' },
  { label: 'Diferenciais', id: 'diferenciais' },
  { label: 'Avaliações', id: 'avaliacoes' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (id: string) => {
    setMenuOpen(false);
    scrollToId(id);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 cursor-pointer" onClick={() => handleNav('hero')}>
            <img
              src="https://storage.lucasmendes.dev/site-sp/goiafio%2Fimg%2Flogo-sem-fundo.webp"
              alt="Goiafio Logo"
              className="h-12 sm:h-14 w-auto"
            />
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className="text-[rgb(2,45,103)] hover:text-blue-600 font-medium transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNav('contato')}
              className="bg-[rgb(2,45,103)] text-white px-6 py-2.5 rounded-lg hover:bg-blue-900 transition-all duration-300 font-medium shadow-md hover:shadow-lg"
            >
              Contato
            </button>
          </nav>
          <button
            className="md:hidden text-[rgb(2,45,103)] p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-100">
          <nav className="flex flex-col px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className="text-left text-[rgb(2,45,103)] hover:text-blue-600 font-medium transition-colors py-2"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNav('contato')}
              className="bg-[rgb(2,45,103)] text-white px-6 py-2.5 rounded-lg hover:bg-blue-900 transition-all duration-300 font-medium shadow-md text-center"
            >
              Contato
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
