import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { scrollToSection } from '../lib/scroll';

const links = [
  { label: 'Início', id: 'hero' },
  { label: 'Sobre', id: 'about' },
  { label: 'Produtos', id: 'products' },
  { label: 'Diferenciais', id: 'differentials' },
  { label: 'Cases', id: 'cases' },
  { label: 'Contato', id: 'contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const go = (id: string) => {
    setOpen(false);
    scrollToSection(id);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 "
      style={{ backgroundColor: 'rgb(0, 45, 100)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-20">
          <div className="flex-shrink-0">
            <img
              src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=brasil-camisetas%2Fimage%2057.png&version_id=null"
              alt="Brasil Camisetas"
              className="h-12 lg:h-14 w-auto"
            />
          </div>
          <div className="hidden lg:flex items-center space-x-8">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className="text-white hover:text-opacity-80 transition-colors duration-200 text-base font-medium"
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => go('contact')}
              className="px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{ backgroundColor: 'rgb(6, 138, 80)' }}
            >
              Solicitar Orçamento
            </button>
          </div>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      {open && (
        <div
          className="lg:hidden px-6 pb-6 pt-2 space-y-2"
          style={{ backgroundColor: 'rgb(0, 45, 100)' }}
        >
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className="block w-full text-left text-white hover:text-opacity-80 transition-colors duration-200 text-base font-medium py-2"
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => go('contact')}
            className="w-full px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{ backgroundColor: 'rgb(6, 138, 80)' }}
          >
            Solicitar Orçamento
          </button>
        </div>
      )}
    </nav>
  );
}
