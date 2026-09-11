import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { scrollToSection } from '../lib/scroll';

const navItems: { label: string; target: string }[] = [
  { label: 'Início', target: 'hero' },
  { label: 'Sobre', target: 'about' },
  { label: 'Serviços', target: 'services' },
  { label: 'Cardápio', target: 'services' },
  { label: 'Galeria', target: 'gallery' },
  { label: 'Contato', target: 'location' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (target: string) => {
    setMenuOpen(false);
    scrollToSection(target);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#25262A] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <img
              src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=costelaco%2Flogo-Photoroom%20(3).png&version_id=null"
              alt="Costelaço"
              className="h-12 w-auto"
            />
            <div className="hidden sm:block">
              <h1 className="text-white text-xl font-bold">Costelaço</h1>
              <p className="text-[#F7BC33] text-xs">
                Churrasco de Excelência desde 2014
              </p>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNav(item.target)}
                className="text-white hover:text-[#F7BC33] transition-colors duration-300 font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav className="md:hidden bg-[#25262A] border-t border-white/10 px-4 py-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNav(item.target)}
              className="block w-full text-left text-white hover:text-[#F7BC33] transition-colors duration-300 font-medium py-2"
            >
              {item.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
