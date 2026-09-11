import { useState } from 'react';
import { Phone, Menu } from 'lucide-react';

const WHATSAPP = 'http://wa.me/5538999719665';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Produtos', id: 'produtos' },
  { label: 'Sobre', id: 'sobre' },
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="flex flex-col">
              <h1 className="text-2xl sm:text-3xl font-bold text-blue-600">Noroeste Oxigênio</h1>
              <p className="text-xs sm:text-sm text-gray-600">Sua referência em Unaí</p>
            </div>
          </div>
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2.5 rounded-full hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Phone size={18} />
              <span className="font-semibold">Fale Conosco</span>
            </a>
          </nav>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-gray-700 hover:text-blue-600 transition-colors"
          >
            <Menu size={28} />
          </button>
        </div>
        {menuOpen && (
          <div className="lg:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
              >
                {item.label}
              </button>
            ))}
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2.5 rounded-full hover:bg-blue-700 transition-all shadow-lg justify-center mt-2"
            >
              <Phone size={18} />
              <span className="font-semibold">Fale Conosco</span>
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
