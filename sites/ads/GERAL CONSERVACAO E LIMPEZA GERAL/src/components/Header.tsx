import { useState } from 'react';
import { Phone, Menu } from 'lucide-react';

const navItems = [
  { label: 'Início', id: 'home' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Avaliações', id: 'avaliacoes' },
  { label: 'Contato', id: 'contato' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="https://storage.lucasmendes.dev/site-sp/geral%20limpeza%2Fimg%2Flogo-sem-fundo.webp"
              alt="Geral Conservação & Limpeza"
              className="h-12 md:h-20 w-auto"
            />
          </div>
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-gray-700 hover:text-[rgb(2,103,253)] transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://wa.me/5592981671587"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-[rgb(2,103,253)] text-white px-6 py-3 rounded-full hover:bg-[rgb(3,171,255)] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Phone size={18} />
              <span className="font-semibold">Fale Conosco</span>
            </a>
          </nav>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden p-2 text-gray-700 hover:text-[rgb(2,103,253)] transition-colors"
            aria-label="Menu"
          >
            <Menu size={28} />
          </button>
        </div>
        {menuOpen && (
          <nav className="lg:hidden mt-4 flex flex-col space-y-2 pb-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-left text-gray-700 hover:text-[rgb(2,103,253)] transition-colors font-medium py-2"
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://wa.me/5592981671587"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-[rgb(2,103,253)] text-white px-6 py-3 rounded-full hover:bg-[rgb(3,171,255)] transition-all duration-300 shadow-lg"
            >
              <Phone size={18} />
              <span className="font-semibold">Fale Conosco</span>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
