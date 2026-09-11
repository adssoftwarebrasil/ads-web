import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { scrollToId } from '../utils/scroll';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Galeria', id: 'produtos' },
  { label: 'Contato', id: 'contato' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleNav = (id: string) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-black z-50 h-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-full flex items-center justify-between">
        <div className="flex items-center gap-8">
          <button className="flex items-center gap-2" onClick={() => handleNav('inicio')}>
            <img
              src="https://storage.lucasmendes.dev/site-sp/dobracoplanaltina%2Flogo.jpg"
              alt="Dobraço Logo"
              className="h-16 w-auto rounded"
            />
          </button>
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="text-white hover:text-[rgb(139,0,2)] transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
        <a
          href="tel:6134886060"
          className="hidden lg:flex items-center gap-2 bg-[rgb(139,0,2)] text-white px-6 py-3 rounded-lg hover:bg-[rgb(180,0,3)] transition-all shadow-lg"
        >
          <Phone width={18} height={18} />
          <span className="font-semibold">(61) 3488-6060</span>
        </a>
        <button className="lg:hidden text-white" onClick={() => setOpen((v) => !v)}>
          {open ? <X width={28} height={28} /> : <Menu width={28} height={28} />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-black border-t border-gray-800">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="text-white hover:text-[rgb(139,0,2)] transition-colors text-left"
              >
                {item.label}
              </button>
            ))}
            <a
              href="tel:6134886060"
              className="flex items-center gap-2 bg-[rgb(139,0,2)] text-white px-6 py-3 rounded-lg hover:bg-[rgb(180,0,3)] transition-all shadow-lg w-fit"
            >
              <Phone width={18} height={18} />
              <span className="font-semibold">(61) 3488-6060</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
