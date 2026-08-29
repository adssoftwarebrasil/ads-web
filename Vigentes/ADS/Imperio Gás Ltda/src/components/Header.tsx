import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { scrollToSection } from '../utils/scroll';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Produtos', id: 'produtos' },
  { label: 'Diferenciais', id: 'diferenciais' },
  { label: 'Localização', id: 'localizacao' },
  { label: 'Contato', id: 'contato' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (id: string) => {
    setMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center cursor-pointer" onClick={() => handleNav('inicio')}>
            <img
              src="https://storage.lucasmendes.dev/site-sp/Imperio%20Gas%2Fimg%2Flogo.png"
              alt="Império Gás Logo"
              className="h-12"
            />
          </div>
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="text-gray-700 hover:text-[#DEAC6C] transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="hidden md:block">
            <a
              href="https://wa.me/556281556605"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#DEAC6C] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#F2DFBF] transition-all duration-300 hover:scale-105 inline-block"
            >
              Peça Agora
            </a>
          </div>
          <button className="md:hidden text-gray-700" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className="block w-full text-left text-gray-700 hover:text-[#DEAC6C] transition-colors py-1"
            >
              {item.label}
            </button>
          ))}
          <a
            href="https://wa.me/556281556605"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#DEAC6C] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#F2DFBF] transition-all duration-300 inline-block"
          >
            Peça Agora
          </a>
        </div>
      )}
    </header>
  );
}
