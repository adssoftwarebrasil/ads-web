import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL, LOGO_URL } from '../constants';

const navLinks = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#marcas', label: 'Marcas' },
  { href: '#atendimento', label: 'Atendimento' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#inicio" className="flex items-center gap-2 shrink-0">
            <img
              src={LOGO_URL}
              alt="BTU Ar Condicionado"
              className="h-10 md:h-12 w-auto object-contain"
            />
            <span className="text-white font-bold text-lg md:text-xl tracking-tight">
              BTU <span className="text-secondary-light font-light">Ar Condicionado</span>
            </span>
          </a>
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-white text-sm font-medium transition-colors duration-200 hover:text-secondary-light"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${PHONE_TEL}`}
              className="flex items-center gap-2 text-white/90 hover:text-white text-sm font-medium transition-colors"
            >
              <Phone size={14} />
              {PHONE_DISPLAY}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary hover:bg-secondary-dark text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg hover:scale-105"
            >
              Solicitar Orçamento
            </a>
          </div>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-primary border-t border-white/10">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-white/80 hover:text-white text-base font-medium py-2 transition-colors hover:text-secondary-light"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`tel:${PHONE_TEL}`}
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 text-white/90 hover:text-white text-sm font-medium py-2 transition-colors"
            >
              <Phone size={14} />
              {PHONE_DISPLAY}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="bg-secondary hover:bg-secondary-dark text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-200 text-center mt-2"
            >
              Solicitar Orçamento
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
