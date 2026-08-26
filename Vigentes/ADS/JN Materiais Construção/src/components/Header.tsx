import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { scrollToSection } from '../lib/scroll';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Produtos', id: 'produtos' },
  { label: 'Galeria', id: 'galeria' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const go = (id: string) => {
    setOpen(false);
    scrollToSection(id);
  };

  return (
    <header className="sticky top-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img
              src="https://storage.lucasmendes.dev/site-sp/j%20n%20materiais%20de%20construcao/img/logo-sem-fundo.png"
              alt="J N Materiais de Construção"
              className="h-12 md:h-16 w-auto"
            />
          </div>
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                className="text-[rgb(34,39,69)] hover:text-[rgb(216,27,27)] transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => go('contato')}
              className="bg-[rgb(216,27,27)] text-white px-6 py-2.5 rounded-lg hover:bg-[rgb(44,58,128)] transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Contato
            </button>
          </nav>
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden text-[rgb(34,39,69)]"
            aria-label="Menu"
          >
            {open ? <X width={28} height={28} /> : <Menu width={28} height={28} />}
          </button>
        </div>
        {open && (
          <nav className="md:hidden pb-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                className="text-left text-[rgb(34,39,69)] hover:text-[rgb(216,27,27)] transition-colors font-medium py-2"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => go('contato')}
              className="bg-[rgb(216,27,27)] text-white px-6 py-2.5 rounded-lg hover:bg-[rgb(44,58,128)] transition-all duration-300 font-semibold shadow-lg"
            >
              Contato
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
