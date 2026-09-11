import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { scrollToSection } from '../lib/scroll';

const navItems: { label: string; id: string }[] = [
  { label: 'Início', id: 'inicio' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Galeria', id: 'galeria' },
  { label: 'Área de Atendimento', id: 'atendimento' },
  { label: 'Contato', id: 'contato' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleNav = (id: string) => {
    setOpen(false);
    scrollToSection(id);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#inicio" className="flex items-center gap-3 shrink-0">
            <img
              src="/logo.webp"
              alt="Sulltec Geradores"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </a>
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="text-gray-600 hover:text-gray-900 text-sm font-medium px-3 py-2 rounded-lg hover:bg-gray-100 transition-all duration-200"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+5548991372058"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
            >
              <Phone
                width={15}
                height={15}
                className="lucide lucide-phone "
              />
              (48) 99137-2058
            </a>
            <a
              href="#contato"
              className="bg-brand-red hover:bg-brand-red-dark text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-brand-red/30"
            >
              Solicitar Orçamento
            </a>
          </div>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden text-gray-900 p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Menu"
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
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="text-left text-gray-600 hover:text-gray-900 text-sm font-medium px-3 py-2.5 rounded-lg hover:bg-gray-100 transition-all duration-200"
              >
                {item.label}
              </button>
            ))}
            <a
              href="tel:+5548991372058"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 text-sm font-medium px-3 py-2.5"
            >
              <Phone width={15} height={15} className="lucide lucide-phone " />
              (48) 99137-2058
            </a>
            <button
              onClick={() => handleNav('contato')}
              className="bg-brand-red hover:bg-brand-red-dark text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 mt-2"
            >
              Solicitar Orçamento
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
