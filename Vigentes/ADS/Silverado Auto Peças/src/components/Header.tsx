import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Diferenciais', id: 'diferenciais' },
  { label: 'Produtos', id: 'produtos' },
  { label: 'Galeria', id: 'galeria' },
  { label: 'Contato', id: 'contato' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-brand-black/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button onClick={() => scrollTo('inicio')} className="flex items-center gap-3 group">
            <img
              src="https://storage.lucasmendes.dev/site-sp/Silverado%20auto%20pecas/logotipo-autopecas-vermelho-sobre-fundo-preto_1080x1080.webp"
              alt="Silverado Auto Peças"
              className="h-10 w-10 md:h-12 md:w-12 rounded-lg object-cover"
            />
            <div className="text-left">
              <p className="text-white font-bold text-sm md:text-base leading-tight tracking-wide">SILVERADO</p>
              <p className="text-brand-red text-xs font-medium tracking-widest uppercase">Auto Peças</p>
            </div>
          </button>
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-gray-300 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+556634261853"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm"
            >
              <Phone className="lucide lucide-phone w-4 h-4 text-brand-red" />
              <span>(66) 3426-1853</span>
            </a>
            <a
              href="https://wa.me/556634261853"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-red hover:bg-brand-red-dark text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 hover:scale-105 shadow-lg"
            >
              Fale no WhatsApp
            </a>
          </div>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="lucide lucide-menu w-6 h-6" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden bg-brand-black/98 border-t border-white/10">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-left text-gray-300 hover:text-white hover:bg-white/10 px-3 py-3 rounded-lg text-sm font-medium transition-all duration-200"
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://wa.me/556634261853"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 bg-brand-red hover:bg-brand-red-dark text-white px-5 py-3 rounded-lg font-semibold text-sm text-center transition-all duration-200"
            >
              Fale no WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
