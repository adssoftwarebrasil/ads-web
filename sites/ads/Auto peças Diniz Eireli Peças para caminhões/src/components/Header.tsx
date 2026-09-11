import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Início', id: 'home' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Produtos', id: 'produtos' },
  { label: 'Diferenciais', id: 'diferenciais' },
  { label: 'Contato', id: 'contato' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-40">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <img
              src="https://storage.lucasmendes.dev/site-sp/auto%20pecas%20diniz%2Fimg%2Flogo-fundo-preto.webp"
              alt="Auto Peças Diniz"
              className="h-16 w-auto"
            />
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-gray-800 hover:text-[rgb(237,23,21)] font-medium transition-colors"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo('contato')}
              className="bg-[rgb(237,23,21)] text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-[rgb(200,20,18)] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Fale Conosco
            </button>
          </div>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-800 hover:text-[rgb(237,23,21)] transition-colors"
            aria-label="Menu"
          >
            {open ? (
              <X className="lucide lucide-x" width={28} height={28} />
            ) : (
              <Menu className="lucide lucide-menu" width={28} height={28} />
            )}
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4 flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-left text-gray-800 hover:text-[rgb(237,23,21)] font-medium transition-colors py-2"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo('contato')}
              className="bg-[rgb(237,23,21)] text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-[rgb(200,20,18)] transition-all shadow-lg text-center"
            >
              Fale Conosco
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
