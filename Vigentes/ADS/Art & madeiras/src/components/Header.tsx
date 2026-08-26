import { useState } from 'react';
import { Trees, Menu, X } from 'lucide-react';
import { scrollToId, scrollToTop } from '../lib/scroll';

const navItems = [
  { label: 'Serviços', id: 'servicos' },
  { label: 'Galeria', id: 'galeria' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Contato', id: 'contato' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const go = (id: string) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <header className="w-full bg-amber-950 shadow-xl fixed top-0 z-50 border-none outline-none">
      <div className="absolute inset-0 bg-amber-950/95 backdrop-blur-sm z-0"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div
          onClick={scrollToTop}
          className="text-2xl font-bold text-amber-100 flex items-center gap-2 cursor-pointer select-none hover:text-white transition-colors"
        >
          <Trees className="lucide lucide-trees text-amber-400 w-7 h-7" />
          Art &amp; madeiras
        </div>
        <nav className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => go(item.id)}
              className="text-stone-100 hover:text-amber-400 transition-colors duration-300 text-sm font-medium uppercase tracking-wide"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => go('contato')}
            className="bg-amber-600 hover:bg-amber-500 text-white px-6 py-2.5 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-amber-600/20 hover:-translate-y-0.5"
          >
            Solicitar Orçamento
          </button>
        </nav>
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex items-center text-amber-100 hover:text-white transition-colors"
          aria-label="Abrir menu"
        >
          {open ? <X className="w-7 h-7" /> : <Menu className="lucide lucide-menu w-7 h-7" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden relative z-10 bg-amber-950/95 backdrop-blur-sm border-t border-amber-900 px-6 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => go(item.id)}
              className="text-left text-stone-100 hover:text-amber-400 transition-colors duration-300 text-sm font-medium uppercase tracking-wide"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => go('contato')}
            className="bg-amber-600 hover:bg-amber-500 text-white px-6 py-2.5 rounded-lg font-bold transition-all duration-300 shadow-lg"
          >
            Solicitar Orçamento
          </button>
        </div>
      )}
    </header>
  );
}
