import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { scrollToSection } from '../lib/utils';

const navItems: { label: string; id: string }[] = [
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
    scrollToSection(id);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white"
      style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 2px 10px' }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 lg:h-20">
          <div className="flex-shrink-0">
            <img
              src="https://storage.lucasmendes.dev/site-sp/protaldastintas%2Fimg%2Flogomarca%201.png"
              alt="Portal Tintas"
              className="h-12 lg:h-14 w-auto"
            />
          </div>
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="text-black hover:text-[#f08736] transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:2732523666"
              className="flex items-center space-x-2 text-black hover:text-[#f08736] transition-colors"
            >
              <Phone
                className="lucide lucide-phone "
                width={20}
                height={20}
              />
              <span className="font-medium">(27) 3252-3666</span>
            </a>
            <a
              href="https://wa.me/5527997073666?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20os%20produtos%20da%20Portal%20Tintas"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#1fb855] transition-all duration-200 hover:scale-105"
            >
              WhatsApp
            </a>
          </div>
          <button
            className="lg:hidden text-black"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? (
              <X className="lucide lucide-x " width={28} height={28} />
            ) : (
              <Menu className="lucide lucide-menu " width={28} height={28} />
            )}
          </button>
        </div>

        {menuOpen && (
          <nav className="lg:hidden pb-4 flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="text-left text-black hover:text-[#f08736] transition-colors duration-200 font-medium py-2"
              >
                {item.label}
              </button>
            ))}
            <a
              href="tel:2732523666"
              className="flex items-center space-x-2 text-black hover:text-[#f08736] transition-colors py-2"
            >
              <Phone width={20} height={20} />
              <span className="font-medium">(27) 3252-3666</span>
            </a>
            <a
              href="https://wa.me/5527997073666?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20os%20produtos%20da%20Portal%20Tintas"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#1fb855] transition-all duration-200 text-center"
            >
              WhatsApp
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
