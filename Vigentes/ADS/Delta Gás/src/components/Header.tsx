import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#produtos', label: 'Produtos' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#avaliacoes', label: 'Avaliações' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-400 bg-white py-5">
      <div className="container mx-auto px-4 max-w-6xl flex items-center justify-between">
        <a href="#inicio" className="flex items-center">
          <img
            src="https://storage.lucasmendes.dev/site-sp/delta%20gas/img/logo-sem-fundo.webp"
            alt="Delta Gás"
            className="h-16 w-auto"
          />
        </a>
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-brand-dark hover:text-brand-light transition-colors duration-200 text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="https://wa.me/556699814075"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 bg-brand-light text-brand-dark px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-brand-secondary hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
        >
          <Phone size={15} />
          Peça Agora
        </a>
        <button
          className="md:hidden text-brand-dark p-1"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-white border-t border-gray-100 mt-5">
          <div className="container mx-auto px-4 max-w-6xl py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-brand-dark hover:text-brand-light transition-colors duration-200 text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/556699814075"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 bg-brand-light text-brand-dark px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-brand-secondary hover:text-white transition-all duration-300 shadow-md"
            >
              <Phone size={15} />
              Peça Agora
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
