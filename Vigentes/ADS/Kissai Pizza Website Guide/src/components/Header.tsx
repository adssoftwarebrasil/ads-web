import { useState } from 'react';
import { MessageCircle, Menu } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Vantagens', id: 'vantagens' },
  { label: 'Depoimentos', id: 'depoimentos' },
  { label: 'Contato', id: 'contato' },
];

interface HeaderProps {
  onNavigate: (id: string) => void;
}

export default function Header({ onNavigate }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (id: string) => {
    setMobileOpen(false);
    onNavigate(id);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[rgb(150,1,0)] h-20 animate-slideDown">
      <nav className="container mx-auto px-4 h-full flex items-center justify-between max-w-[1200px]">
        <div className="flex items-center">
          <img
            src="https://storage.lucasmendes.dev/site-sp/kissai%2Flogofundovermelho.webp"
            alt="Kissai Pizza"
            className="h-[60px] object-contain"
          />
        </div>
        <div className="hidden md:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className="text-white hover:text-[rgb(235,185,3)] transition-colors duration-300 text-base font-medium"
            >
              {item.label}
            </button>
          ))}
          <a
            href="https://wa.me/5534996450016"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[rgb(235,185,3)] text-[rgb(150,1,0)] px-6 py-2 rounded-full font-semibold hover:brightness-110 transition-all duration-300 flex items-center gap-2"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>
        </div>
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Menu"
        >
          <Menu size={28} />
        </button>
      </nav>
      {mobileOpen && (
        <div className="md:hidden bg-[rgb(150,1,0)] border-t border-[rgb(235,185,3)]/30 px-4 py-4 flex flex-col gap-4">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className="text-white hover:text-[rgb(235,185,3)] transition-colors duration-300 text-base font-medium text-left"
            >
              {item.label}
            </button>
          ))}
          <a
            href="https://wa.me/5534996450016"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[rgb(235,185,3)] text-[rgb(150,1,0)] px-6 py-2 rounded-full font-semibold hover:brightness-110 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
