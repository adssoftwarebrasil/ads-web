import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const LOGO = 'https://storage.lucasmendes.dev/site-sp/taquaral%20veiculos%2Fimg2%2Flogo-atualizada-sem-fundo.webp';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Diferenciais', id: 'diferenciais' },
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
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-gradient-to-b from-black/80 to-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          <div className="flex items-center">
            <img
              src={LOGO}
              alt="Taquaral Veículos"
              className="h-12 sm:h-14 lg:h-16 w-auto object-contain"
            />
          </div>
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-white hover:text-[rgb(254,240,115)] transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <a
            href="https://wa.me/5562992489166"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center space-x-2 bg-[rgb(193,148,35)] hover:bg-[rgb(254,240,115)] text-[rgb(16,16,16)] px-6 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105"
          >
            <Phone className="w-5 h-5" />
            <span>Contato</span>
          </a>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden text-white p-2"
            aria-label="Menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {menuOpen && (
          <nav className="lg:hidden pb-4 flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-white hover:text-[rgb(254,240,115)] transition-colors duration-200 font-medium text-left py-2"
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://wa.me/5562992489166"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-[rgb(193,148,35)] hover:bg-[rgb(254,240,115)] text-[rgb(16,16,16)] px-6 py-3 rounded-full font-bold transition-all duration-300 mt-2 w-fit"
            >
              <Phone className="w-5 h-5" />
              <span>Contato</span>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
