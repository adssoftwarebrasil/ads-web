import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Produtos', id: 'produtos' },
  { label: 'Promoções', id: 'promocoes' },
  { label: 'Sobre', id: 'sobre' },
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
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#021C3F]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 lg:h-20">
          <div className="flex-shrink-0">
            <img
              src="https://storage.lucasmendes.dev/site-sp/Avenida%20gas%2Fimg%2Flogo-sem-fundo.png"
              alt="Avenida Gás"
              className="h-16 w-auto lg:h-24"
            />
          </div>
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-white hover:text-[#DBCC5E] transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-2 bg-[#DBCC5E] text-[#021C3F] px-6 py-3 rounded-lg font-semibold hover:bg-[#c9ba4d] transition-all hover:scale-105"
          >
            <Phone className="lucide lucide-phone w-5 h-5" />
            Fazer Pedido
          </a>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden text-white p-2"
            aria-label="Abrir menu"
          >
            {menuOpen ? (
              <X className="lucide lucide-x w-6 h-6" />
            ) : (
              <Menu className="lucide lucide-menu w-6 h-6" />
            )}
          </button>
        </div>
        {menuOpen && (
          <nav className="lg:hidden pb-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-left text-white hover:text-[#DBCC5E] transition-colors font-medium py-2"
              >
                {item.label}
              </button>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#DBCC5E] text-[#021C3F] px-6 py-3 rounded-lg font-semibold hover:bg-[#c9ba4d] transition-all mt-2 w-fit"
            >
              <Phone className="lucide lucide-phone w-5 h-5" />
              Fazer Pedido
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
