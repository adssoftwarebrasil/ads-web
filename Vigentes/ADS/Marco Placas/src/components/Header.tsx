import { useState } from 'react';
import { Menu } from 'lucide-react';
import { scrollToSection, WHATSAPP_URL } from '../lib/scroll';

const navItems: { label: string; id: string }[] = [
  { label: 'Início', id: 'inicio' },
  { label: 'Portfólio', id: 'portfolio' },
  { label: 'Produtos', id: 'produtos' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Contato', id: 'contato' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (id: string) => {
    scrollToSection(id);
    setMenuOpen(false);
  };

  return (
    <header className="fixed left-0 right-0 z-50 transition-all duration-300 top-10 md:top-12 h-[70px] md:h-20 shadow-md bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-10 h-full flex items-center justify-between">
        <img
          src="https://storage.lucasmendes.dev/site-sp/Marco%20Placas%2Fimg%2Flogo02.png"
          alt="Marco Placas"
          className="transition-all duration-300 h-12 md:h-[50px]"
        />
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className="text-black hover:text-[rgb(167,28,31)] transition-colors font-medium"
            >
              {item.label}
            </button>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[rgb(167,28,31)] text-white px-6 py-2.5 rounded-md hover:bg-[rgb(120,20,22)] transition-all hover:scale-105 font-medium shadow-md flex items-center justify-center"
          >
            Solicitar Orçamento
          </a>
        </nav>
        <button
          className="lg:hidden text-black p-2"
          aria-label="Menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <Menu className="lucide lucide-menu" width={28} height={28} />
        </button>
      </div>
      <div
        className={`fixed top-[80px] md:top-[128px] h-[calc(100vh-80px)] md:h-[calc(100vh-128px)] right-0 w-64 bg-white shadow-2xl transform transition-all duration-300 lg:hidden ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col p-6 gap-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className="text-black hover:text-[rgb(167,28,31)] transition-colors font-medium text-left py-2"
            >
              {item.label}
            </button>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[rgb(167,28,31)] text-white px-6 py-3 rounded-md hover:bg-[rgb(120,20,22)] transition-all font-medium shadow-md mt-4 text-center"
          >
            Solicitar Orçamento
          </a>
        </nav>
      </div>
    </header>
  );
}
