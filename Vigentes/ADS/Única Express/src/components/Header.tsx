import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Contato', id: 'contato' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50 h-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-full flex items-center justify-between">
        <img
          src="https://storage.lucasmendes.dev/site-sp/unicaexpressoficial%2Flogo-Photoroom%20(2).png"
          alt="Única Express Logo"
          className="h-12 w-auto"
        />
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-gray-700 hover:text-[rgb(38,129,196)] transition-colors duration-300 font-medium"
            >
              {item.label}
            </button>
          ))}
        </nav>
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="https://wa.me/5562998549294"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-[rgb(38,129,196)] text-white px-4 py-2 rounded-lg hover:bg-[rgb(28,109,176)] transition-all duration-300 hover:scale-105"
          >
            <Phone className="w-4 h-4" />
            <span className="font-medium">(62) 99854-9294</span>
          </a>
          <a
            href="tel:+556232414042"
            className="flex items-center space-x-2 bg-[rgb(38,129,196)] text-white px-4 py-2 rounded-lg hover:bg-[rgb(28,109,176)] transition-all duration-300 hover:scale-105"
          >
            <Phone className="w-4 h-4" />
            <span className="font-medium">(62) 3241-4042</span>
          </a>
        </div>
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden text-gray-700 hover:text-[rgb(38,129,196)] transition-colors"
          aria-label="Menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md border-t border-gray-100">
          <nav className="flex flex-col px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-left text-gray-700 hover:text-[rgb(38,129,196)] transition-colors duration-300 font-medium"
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://wa.me/5562998549294"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-[rgb(38,129,196)] text-white px-4 py-2 rounded-lg"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">(62) 99854-9294</span>
            </a>
            <a
              href="tel:+556232414042"
              className="flex items-center space-x-2 bg-[rgb(38,129,196)] text-white px-4 py-2 rounded-lg"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">(62) 3241-4042</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
