import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { scrollToSection } from '../lib/whatsapp';

const NAV_ITEMS = [
  { label: 'Início', id: 'hero' },
  { label: 'Sobre', id: 'about' },
  { label: 'Serviços', id: 'services' },
  { label: 'Vantagens', id: 'advantages' },
  { label: 'Depoimentos', id: 'testimonials' },
  { label: 'Contato', id: 'contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (id: string) => {
    setMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-[#721515] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <img
              src="https://storage.lucasmendes.dev/site-sp/atelienoivaecia%2Flogo.webp"
              alt="Ateliê Noiva e Cia"
              className="h-14 w-auto"
            />
          </div>
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="text-sm font-medium transition-colors text-[#FAFFEF] hover:text-white/80 hover:underline decoration-[#FAFFEF] underline-offset-4"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden p-2 rounded-lg transition-colors text-[#FAFFEF] hover:bg-[#5c1111]"
            aria-label="Menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav className="md:hidden bg-[#721515] border-t border-[#FAFFEF]/10 px-4 py-4 flex flex-col gap-2">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className="text-left text-sm font-medium text-[#FAFFEF] hover:text-white/80 py-2"
            >
              {item.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
