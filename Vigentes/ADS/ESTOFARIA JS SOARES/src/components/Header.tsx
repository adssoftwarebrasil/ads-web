import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { WHATSAPP_URL, LOGO_URL } from '../constants';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-brand-blue py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3">
          <img
            src={LOGO_URL}
            alt="Estofaria JS Soares"
            className="h-12 w-auto object-contain rounded-md"
          />
          <div className="hidden sm:block"></div>
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-white text-sm font-medium transition-colors duration-200 hover:text-brand-red"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+556630150071"
            className="flex items-center gap-2 text-white/80 hover:text-white text-sm transition-colors"
          >
            <Phone width={16} height={16} className="lucide lucide-phone " />
            <span>(66) 3015-0071</span>
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-red hover:bg-brand-red-dark text-white text-sm font-semibold px-5 py-2 rounded-full transition-all duration-200 hover:shadow-lg hover:scale-105"
          >
            Orçamento Grátis
          </a>
        </div>
        <button
          className="md:hidden text-white p-2"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <X width={24} height={24} className="lucide lucide-x " />
          ) : (
            <Menu width={24} height={24} className="lucide lucide-menu " />
          )}
        </button>
      </div>
      {open && (
        <nav className="md:hidden mt-4 px-4 sm:px-6 flex flex-col gap-4 pb-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-white/80 hover:text-white text-sm font-medium transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+556630150071"
            className="flex items-center gap-2 text-white/80 hover:text-white text-sm transition-colors"
          >
            <Phone width={16} height={16} className="lucide lucide-phone " />
            <span>(66) 3015-0071</span>
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-red hover:bg-brand-red-dark text-white text-sm font-semibold px-5 py-2 rounded-full text-center transition-all duration-200"
          >
            Orçamento Grátis
          </a>
        </nav>
      )}
    </header>
  );
}
