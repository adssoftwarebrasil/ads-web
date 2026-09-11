import { useState } from 'react';
import { Menu } from 'lucide-react';
import WhatsappIcon from './WhatsappIcon';
import { waLink, scrollToId } from '../lib/site';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Produtos', id: 'produtos' },
  { label: 'Vantagens', id: 'vantagens' },
  { label: 'Depoimentos', id: 'depoimentos' },
  { label: 'Contato', id: 'contato' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (id: string) => {
    setMenuOpen(false);
    scrollToId(id);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          <div className="flex-shrink-0">
            <img
              src="https://storage.lucasmendes.dev/site-sp/casadasbombasipatinga%2Flogo.png"
              alt="Casa das Bombas"
              className="h-12 lg:h-16 w-auto"
            />
          </div>
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="text-blue-900 hover:text-blue-500 font-medium transition-colors duration-300"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <a
            href={waLink('Olá! Gostaria de mais informações.')}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-2 bg-green-500 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            <WhatsappIcon className="w-5 h-5" />
            WhatsApp
          </a>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden text-blue-900 p-2"
            aria-label="Abrir menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </div>
      <div
        className={`lg:hidden fixed top-20 left-0 right-0 bg-white shadow-lg transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <nav className="flex flex-col px-4 py-4 space-y-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className="text-blue-900 hover:text-blue-500 font-medium text-left py-2 transition-colors duration-300"
            >
              {item.label}
            </button>
          ))}
          <a
            href={waLink('Olá! Gostaria de mais informações.')}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
          >
            <WhatsappIcon className="w-5 h-5" />
            WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
