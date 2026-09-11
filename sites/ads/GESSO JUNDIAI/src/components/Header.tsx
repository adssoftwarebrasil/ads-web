import { useState } from 'react';
import { MessageCircle, Menu, X } from './icons';

const navLinks = [
  { href: '#produtos', label: 'Produtos' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#atendimento', label: 'Atendimento' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center shrink-0">
          <img
            src="https://storage.lucasmendes.dev/site-sp/Gesso%20Jundiai/logo.webp"
            alt="Gesso Jundiaí"
            className="h-10 w-auto object-contain"
          />
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-600 hover:text-[#EE1E23] transition-colors duration-200 font-medium text-sm tracking-wide uppercase"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="https://wa.me/5511933943710"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 bg-[#EE1E23] text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-red-700 transition-all duration-200 hover:scale-105 shrink-0"
        >
          <MessageCircle size={16} />
          Fale Conosco
        </a>
        <button
          className="md:hidden text-gray-900 p-2 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <nav className="md:hidden bg-white border-t border-gray-100 px-4 sm:px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-gray-600 hover:text-[#EE1E23] transition-colors duration-200 font-medium text-sm tracking-wide uppercase"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5511933943710"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 bg-[#EE1E23] text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-red-700 transition-all duration-200"
          >
            <MessageCircle size={16} />
            Fale Conosco
          </a>
        </nav>
      )}
    </header>
  );
}
