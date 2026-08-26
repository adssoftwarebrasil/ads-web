import { useState } from 'react';
import { MessageCircle, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Início', id: 'hero' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Produtos', id: 'produtos' },
  { label: 'Categorias', id: 'categorias' },
  { label: 'Depoimentos', id: 'depoimentos' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[70px] lg:h-[80px]">
          <img
            src="https://storage.lucasmendes.dev/site-sp/giovannaflores%2Fflor%20de%20maio%203.png"
            alt="Flor de Maio"
            className="h-[45px] lg:h-[60px] w-auto cursor-pointer"
            onClick={() => scrollTo('hero')}
          />
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="font-medium transition-colors hover:text-[var(--vermelho)] text-white"
              >
                {link.label}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/5598983078865"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[var(--whatsapp)] text-white px-4 lg:px-6 py-2 lg:py-3 rounded-full font-semibold hover:opacity-90 transition-all hover:scale-105"
            >
              <MessageCircle className="lucide lucide-message-circle w-5 h-5" />
              <span className="hidden sm:inline">Fazer Pedido</span>
            </a>
            <button
              className="lg:hidden p-2 transition-colors text-white"
              aria-label="Menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? (
                <X className="lucide lucide-x w-6 h-6" />
              ) : (
                <Menu className="lucide lucide-menu w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {open && (
        <div className="lg:hidden bg-white shadow-lg">
          <div className="flex flex-col px-4 py-4 gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-left font-medium py-2 text-[var(--texto-escuro)] hover:text-[var(--vermelho)] transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
