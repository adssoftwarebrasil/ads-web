import { useState } from 'react';
import { Phone, Menu } from 'lucide-react';

const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#servicos', label: 'Servicos' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-primary shadow-lg shadow-primary-dark/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#inicio" className="flex-shrink-0">
            <img
              src="https://storage.lucasmendes.dev/site-sp/climatec%2FLOGO%20NOVA.jpg"
              alt="Climatec"
              className="h-12 w-auto rounded"
            />
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/90 hover:text-white font-medium text-sm tracking-wide transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#contato"
            className="hidden md:inline-flex items-center gap-2 bg-secondary hover:bg-secondary-dark text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-secondary/30"
          >
            <Phone className="w-4 h-4" />
            Solicite um Orcamento
          </a>
          <button
            className="md:hidden text-white p-2"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="bg-primary-dark border-t border-white/10 px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-white/90 hover:text-white hover:bg-white/10 font-medium py-3 px-4 rounded-xl transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 bg-secondary text-white px-6 py-3 rounded-full font-semibold mt-3 transition-all duration-300"
          >
            <Phone className="w-4 h-4" />
            Solicite um Orcamento
          </a>
        </nav>
      </div>
    </header>
  );
}
