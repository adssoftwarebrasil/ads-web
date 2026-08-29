import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { scrollToSection } from '../lib/scroll';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Vantagens', id: 'vantagens' },
  { label: 'Depoimentos', id: 'depoimentos' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const go = (id: string) => {
    setOpen(false);
    scrollToSection(id);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#09b588] shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <img
              src="https://storage.lucasmendes.dev/site-sp/petshowe%2Flogo.png"
              alt="Pet Show Estética Animal"
              className="h-16 w-auto"
            />
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                className="text-white hover:text-black transition-colors duration-300 font-medium"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => go('contato')}
              className="bg-white text-[#09b588] px-6 py-2 rounded-full font-semibold hover:bg-black hover:text-white transition-all duration-300 shadow-lg"
            >
              Contato
            </button>
          </div>
          <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4 flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                className="text-white hover:text-black transition-colors duration-300 font-medium text-left py-2"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => go('contato')}
              className="bg-white text-[#09b588] px-6 py-2 rounded-full font-semibold hover:bg-black hover:text-white transition-all duration-300 shadow-lg text-left"
            >
              Contato
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
