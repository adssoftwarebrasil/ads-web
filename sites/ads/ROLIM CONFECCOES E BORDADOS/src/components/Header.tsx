import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Sobre Nós', href: '#sobre' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Contato', href: '#contato' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#inicio" className="flex items-center gap-2 flex-shrink-0">
            <img
              src="https://storage.lucasmendes.dev/site-sp/malhariarolim/logo.jpeg"
              alt="Rolim Confecções e Bordados"
              className="h-10 md:h-12 w-auto object-contain rounded"
            />
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 font-medium text-sm hover:text-brand-red transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-red transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>
          <a
            href="https://wa.me/5566992236989"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-brand-red text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-brand-red-dark transition-all duration-200 hover:shadow-lg"
          >
            <Phone className="w-4 h-4" />
            Fale Conosco
          </a>
          <button
            className="md:hidden p-2 text-gray-700 hover:text-brand-red transition-colors"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="md:hidden bg-white border-t border-gray-100 px-4 sm:px-6 py-4 flex flex-col gap-4 shadow-md">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-gray-700 font-medium text-sm hover:text-brand-red transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5566992236989"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 bg-brand-red text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-brand-red-dark transition-all duration-200 w-max"
          >
            <Phone className="w-4 h-4" />
            Fale Conosco
          </a>
        </nav>
      )}
    </header>
  );
}
