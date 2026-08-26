import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { WHATSAPP_URL, scrollToSection, scrollToTop } from '../constants';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Localização', id: 'localizacao' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleNav = (id: string) => {
    setOpen(false);
    scrollToSection(id);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-brand-navy">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button className="flex items-center group" aria-label="Ir para o início" onClick={scrollToTop}>
            <img
              src="https://storage.lucasmendes.dev/site-sp/Eslei%20Auto/Captura%20de%20Tela%202026-02-27%20a%CC%80s%2013.19.20-Photoroom.png"
              alt="Eslei Auto Logo"
              className="h-10 md:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            />
          </button>
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="text-gray-300 hover:text-white text-sm font-medium tracking-wide transition-colors duration-200 hover:text-brand-yellow"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-brand-red hover:bg-red-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 hover:scale-105"
          >
            <Phone width={15} height={15} className="lucide lucide-phone " />
            Fale Conosco
          </a>
          <button
            className="md:hidden text-white p-2"
            aria-label="Menu"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <X width={24} height={24} className="lucide lucide-x " />
            ) : (
              <Menu width={24} height={24} className="lucide lucide-menu " />
            )}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-brand-navy border-t border-white/10 px-4 pb-4">
          <nav className="flex flex-col gap-1 pt-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="text-left text-gray-300 hover:text-brand-yellow text-sm font-medium tracking-wide transition-colors duration-200 py-3"
              >
                {item.label}
              </button>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 bg-brand-red hover:bg-red-700 text-white text-sm font-semibold px-5 py-3 rounded-full transition-all duration-200"
            >
              <Phone width={15} height={15} className="lucide lucide-phone " />
              Fale Conosco
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
