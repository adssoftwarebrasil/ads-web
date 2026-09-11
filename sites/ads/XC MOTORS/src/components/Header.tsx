import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Catálogo', id: 'catalogo' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Clientes', id: 'clientes' },
  { label: 'Contato', id: 'contato' },
];

export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (id: string) => {
    scrollToSection(id);
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#inicio" className="flex items-center gap-3 group">
            <img
              src="https://storage.lucasmendes.dev/site-sp/xc%20motors/img/logo-sem-fundo.webp"
              alt="XC Motors Logo"
              className="h-12 w-auto object-contain"
            />
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="text-[#fefefe]/80 hover:text-[#f8c102] text-sm font-medium tracking-wide transition-colors duration-200 uppercase"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <a
            href="tel:+5565984310000"
            className="hidden md:flex items-center gap-2 bg-[#f8c102] text-[#0c0c0c] px-5 py-2.5 rounded-full text-sm font-bold hover:bg-[#f8c102]/90 transition-all duration-200 hover:scale-105"
          >
            <Phone className="lucide lucide-phone" width={15} height={15} />
            (65) 98431-0000
          </a>
          <button
            className="md:hidden text-[#fefefe] p-2"
            aria-label="Menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? (
              <X className="lucide lucide-x" width={26} height={26} />
            ) : (
              <Menu className="lucide lucide-menu" width={26} height={26} />
            )}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-[#0c0c0c]/95 backdrop-blur-sm border-t border-white/5">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="text-left text-[#fefefe]/80 hover:text-[#f8c102] text-sm font-medium tracking-wide transition-colors duration-200 uppercase py-3"
              >
                {item.label}
              </button>
            ))}
            <a
              href="tel:+5565984310000"
              className="flex items-center gap-2 bg-[#f8c102] text-[#0c0c0c] px-5 py-2.5 rounded-full text-sm font-bold hover:bg-[#f8c102]/90 transition-all duration-200 mt-2 w-max"
            >
              <Phone className="lucide lucide-phone" width={15} height={15} />
              (65) 98431-0000
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
