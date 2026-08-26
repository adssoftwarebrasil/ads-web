import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Início', id: 'home' },
  { label: 'Sobre', id: 'about' },
  { label: 'Produtos', id: 'products' },
  { label: 'Avaliações', id: 'testimonials' },
  { label: 'Contato', id: 'contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img
              src="https://storage.lucasmendes.dev/site-sp/batersouza%2Fimg%2Flogo-sem-fundo.webp"
              alt="BaterSouza Logo"
              className="h-12 sm:h-20 w-auto"
            />
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                {item.label}
              </button>
            ))}
            <a
              href="http://wa.me/556292766466"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              <Phone className="lucide lucide-phone" width={20} height={20} />
              <span className="hidden lg:inline">Ligue Agora</span>
            </a>
          </nav>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden p-2 text-gray-700"
            aria-label="Menu"
          >
            {menuOpen ? (
              <X className="lucide lucide-x" width={24} height={24} />
            ) : (
              <Menu className="lucide lucide-menu" width={24} height={24} />
            )}
          </button>
        </div>
        {menuOpen && (
          <nav className="md:hidden pb-4 flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-left text-gray-700 hover:text-blue-600 font-medium transition-colors py-2"
              >
                {item.label}
              </button>
            ))}
            <a
              href="http://wa.me/556292766466"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium justify-center"
            >
              <Phone width={20} height={20} />
              <span>Ligue Agora</span>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
