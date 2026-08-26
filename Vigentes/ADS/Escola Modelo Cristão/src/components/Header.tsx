import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Sobre', id: 'sobre' },
  { label: 'Diferenciais', id: 'diferenciais' },
  { label: 'Níveis de Ensino', id: 'ensino' },
  { label: 'Galeria', id: 'galeria' },
  { label: 'Contato', id: 'contato' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <img
              src="https://storage.lucasmendes.dev/site-sp/escolamodelocristao%2FLogo%20EMC%20.avif"
              alt="Escola Modelo Cristão"
              className="h-12 w-auto"
            />
            <div className="hidden md:block">
              <h1 className="text-lg font-bold" style={{ color: 'rgb(2, 73, 119)' }}>
                Escola Modelo Cristão
              </h1>
              <p className="text-xs text-gray-600">Educação com Valores</p>
            </div>
          </div>
          <nav className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-gray-700 hover:text-[#F6AE09] transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <a
            href="https://wa.me/5511989742323"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:block px-6 py-2 rounded-lg text-white font-semibold transition-transform hover:scale-105"
            style={{ backgroundColor: 'rgb(246, 174, 9)' }}
          >
            Agendar Visita
          </a>
          <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? (
              <X className="lucide lucide-x" width={24} height={24} />
            ) : (
              <Menu className="lucide lucide-menu" width={24} height={24} />
            )}
          </button>
        </div>
        {open && (
          <div className="lg:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="block w-full text-left px-2 py-2 text-gray-700 hover:text-[#F6AE09] transition-colors"
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://wa.me/5511989742323"
              target="_blank"
              rel="noopener noreferrer"
              className="block mx-2 mt-2 px-6 py-2 rounded-lg text-white font-semibold text-center"
              style={{ backgroundColor: 'rgb(246, 174, 9)' }}
            >
              Agendar Visita
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
