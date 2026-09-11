import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#equipe', label: 'Equipe' },
  { href: '#areas', label: 'Áreas de Atuação' },
  { href: '#contato', label: 'Contato' },
  { href: '#links', label: 'Links Úteis' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="#inicio" className="flex-shrink-0">
            <img
              src="https://storage.lucasmendes.dev/site-sp/ricardorodrigues/LOGOTIPO%20JPG%20PRETO.webp"
              alt="Ricardo Rodrigues Advocacia"
              className="h-16 w-auto "
            />
          </a>
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white hover:text-[#d9b33c] transition-colors duration-300 font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <button
            className="md:hidden text-white"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="md:hidden bg-black border-t border-white/10 px-4 pb-4 flex flex-col space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-white hover:text-[#d9b33c] transition-colors duration-300 font-medium py-2"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
