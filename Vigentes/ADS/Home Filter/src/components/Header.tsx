import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#produtos', label: 'Produtos' },
  { href: '#vantagens', label: 'Vantagens' },
  { href: '#depoimentos', label: 'Depoimentos' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary shadow-2xl py-4">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <a href="#inicio">
              <img
                src="https://storage.lucasmendes.dev/site-sp/homefilt%2Flogo-6.png"
                alt="HOME FILTER"
                className="h-12 md:h-14 w-auto"
              />
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-bold text-white hover:text-accent transition-all uppercase tracking-wider"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contato"
              className="ml-4 flex items-center gap-2 bg-secondary text-white px-6 py-2.5 rounded-full text-xs font-black transition-all transform hover:scale-105 active:scale-95 shadow-lg"
            >
              <Phone className="lucide lucide-phone" width={14} height={14} />
              CONTATO
            </a>
          </div>
          <button
            className="md:hidden text-white p-2 rounded-lg bg-white/10"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <X className="lucide lucide-x" width={28} height={28} />
            ) : (
              <Menu className="lucide lucide-menu" width={28} height={28} />
            )}
          </button>
        </div>
      </nav>
      <div
        className={`absolute top-full left-0 w-full bg-primary border-t border-white/10 transition-all duration-300 md:hidden ${
          open ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'
        }`}
      >
        <div className="px-6 py-8 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-lg font-bold text-white hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setOpen(false)}
            className="w-full text-center bg-secondary text-white py-4 rounded-2xl font-black text-lg"
          >
            FALAR COM ESPECIALISTA
          </a>
        </div>
      </div>
    </header>
  );
}
