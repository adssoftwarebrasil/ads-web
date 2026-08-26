import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Sobre', id: 'sobre' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Veículos', id: 'veiculos' },
  { label: 'Avaliações', id: 'avaliacoes' },
  { label: 'Contato', id: 'contato' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img
              src="https://storage.lucasmendes.dev/site-sp/l2%20carros%2Fimg%2Flogo-sem-fundo.webp"
              alt="L2 Carros"
              className="h-12 sm:h-16 w-auto"
            />
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-gray-800 hover:text-red-600 transition-colors duration-300 font-medium font-sans"
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://wa.me/5537999236447"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-full transition-all duration-300 transform hover:scale-105 font-semibold shadow-md hover:shadow-lg"
            >
              <Phone className="w-4 h-4" />
              Fale Conosco
            </a>
          </nav>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden text-gray-800 p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {menuOpen && (
          <nav className="md:hidden pb-4 flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-left text-gray-800 hover:text-red-600 transition-colors duration-300 font-medium font-sans py-2"
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://wa.me/5537999236447"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-full transition-all duration-300 font-semibold shadow-md"
            >
              <Phone className="w-4 h-4" />
              Fale Conosco
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
