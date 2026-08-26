import { useState } from 'react';
import { Wrench, Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#hero', label: 'Início' },
  { href: '#services', label: 'Serviços' },
  { href: '#about', label: 'Sobre' },
  { href: '#credentials', label: 'Seguradoras' },
  { href: '#area', label: 'Área de Atendimento' },
  { href: '#contact', label: 'Contato' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#0d1f3c]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between h-16 md:h-20">
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="bg-[#c0392b] rounded-lg p-1.5">
            <Wrench className="lucide lucide-wrench w-5 h-5 text-white" />
          </div>
          <span className="text-white font-black text-xl tracking-wider uppercase">
            Lanter<span className="text-[#f39c12]">MAX</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-300 hover:text-[#f39c12] text-sm font-medium transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5581996457782"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#c0392b] hover:bg-[#a93226] text-white text-sm font-bold px-5 py-2 rounded-full transition-all duration-200 hover:scale-105"
          >
            Fale Conosco
          </a>
        </nav>
        <button
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <X className="lucide lucide-x w-6 h-6" />
          ) : (
            <Menu className="lucide lucide-menu w-6 h-6" />
          )}
        </button>
      </div>
      {open && (
        <nav className="md:hidden bg-[#0d1f3c] border-t border-white/10 px-4 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-gray-300 hover:text-[#f39c12] text-sm font-medium transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5581996457782"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#c0392b] hover:bg-[#a93226] text-white text-sm font-bold px-5 py-2 rounded-full transition-all duration-200 text-center"
          >
            Fale Conosco
          </a>
        </nav>
      )}
    </header>
  );
}
