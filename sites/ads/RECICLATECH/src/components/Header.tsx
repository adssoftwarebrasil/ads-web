import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Vantagens', id: 'vantagens' },
  { label: 'Depoimentos', id: 'depoimentos' },
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
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-md">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-20">
          <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollTo('inicio')}>
            <img
              src="https://storage.lucasmendes.dev/site-sp/reciclatechbrasil%2Flogo.jpg"
              alt="Reciclatech Logo"
              className="h-10 lg:h-12 w-auto object-contain"
              loading="eager"
            />
          </div>
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, i) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-sm font-medium transition-colors duration-300 hover:text-[rgb(26,157,39)] ${
                  i === 0 ? 'text-[rgb(26,157,39)]' : 'text-[rgb(53,64,66)]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+5541999600458"
              className="flex items-center text-[rgb(53,64,66)] hover:text-[rgb(26,157,39)] transition-colors"
            >
              <Phone className="lucide lucide-phone w-4 h-4 mr-2" />
              <span className="text-sm font-medium">(41) 99960-0458</span>
            </a>
            <a
              href="https://wa.me/5541999600458"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[rgb(26,157,39)] text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-[rgb(18,132,27)] transition-all duration-300 hover:scale-105 shadow-md"
            >
              WhatsApp
            </a>
          </div>
          <button
            className="lg:hidden text-[rgb(53,64,66)] p-2"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? (
              <X className="lucide lucide-x w-6 h-6" />
            ) : (
              <Menu className="lucide lucide-menu w-6 h-6" />
            )}
          </button>
        </div>
      </div>
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <nav className="bg-white border-t border-gray-100 px-4 py-4 space-y-3">
          {navItems.map((item, i) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                i === 0
                  ? 'bg-[rgb(26,157,39)] bg-opacity-10 text-[rgb(26,157,39)] font-semibold'
                  : 'text-[rgb(53,64,66)] hover:bg-gray-50'
              }`}
            >
              {item.label}
            </button>
          ))}
          <a
            href="https://wa.me/5541999600458"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-[rgb(26,157,39)] text-white px-4 py-3 rounded-lg font-semibold text-center hover:bg-[rgb(18,132,27)] transition-colors mt-4"
          >
            WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
