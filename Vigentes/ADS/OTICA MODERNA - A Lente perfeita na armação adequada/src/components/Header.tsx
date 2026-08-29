import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#vantagens', label: 'Vantagens' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[rgb(231,28,31)] text-white shadow-lg">
      <div className="bg-[rgb(91,1,0)] py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center md:justify-end gap-4 text-sm"></div>
      </div>
      <nav className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          <a href="#inicio" className="flex items-center gap-3">
            <img
              src="https://storage.lucasmendes.dev/site-sp/oticamodernago%2Flogo.jpg"
              alt="Ótica Moderna Logo"
              className="h-14 w-14 rounded-full object-cover"
            />
            <div className="hidden md:block">
              <div className="font-bold text-xl">Ótica Moderna</div>
              <div className="text-xs opacity-90">Desde 1966</div>
            </div>
          </a>
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-medium hover:opacity-80 transition-opacity"
              >
                {link.label}
              </a>
            ))}
          </div>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {open ? (
              <X className="lucide lucide-menu " width={24} height={24} />
            ) : (
              <Menu className="lucide lucide-menu " width={24} height={24} />
            )}
          </button>
        </div>
        {open && (
          <div className="lg:hidden pb-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-medium py-2 px-2 rounded-lg hover:bg-white/10 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
