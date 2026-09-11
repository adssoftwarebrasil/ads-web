import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Serviços', id: 'servicos' },
  { label: 'Diferenciais', id: 'diferenciais' },
  { label: 'Portfólio', id: 'portfolio' },
  { label: 'Contato', id: 'contato' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-20 bg-black/80 backdrop-blur-md">
      <nav className="container mx-auto px-4 lg:px-8 h-full flex items-center justify-between">
        <div className="cursor-pointer group flex items-center">
          <img
            src="https://storage-admin.lucasmendes.dev/api/v1/buckets/comuny/objects/download?preview=true&prefix=video%2FCOMUNY_2022.8.png&version_id=null"
            alt="COMUNY Logo"
            className="h-6 w-auto group-hover:scale-80 transition-transform duration-300"
          />
        </div>
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="relative text-white/80 hover:text-white transition-colors duration-300 group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-comuny-purple to-comuny-green group-hover:w-full transition-all duration-300"></span>
            </button>
          ))}
        </div>
        <button
          onClick={() => scrollTo('contato')}
          className="hidden md:block px-6 py-2.5 bg-comuny-purple hover:bg-comuny-green text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-comuny-green/50"
        >
          COMEÇAR AGORA
        </button>
        <button className="md:hidden text-white" onClick={() => setMenuOpen((v) => !v)} aria-label="Menu">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>
      {menuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-left text-white/80 hover:text-white transition-colors duration-300"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo('contato')}
              className="px-6 py-2.5 bg-comuny-purple hover:bg-comuny-green text-white font-semibold rounded-lg transition-all duration-300"
            >
              COMEÇAR AGORA
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
