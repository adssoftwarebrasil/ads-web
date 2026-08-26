import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { WHATSAPP_URL, PHONE_TEL, PHONE_LABEL, LOGO_URL } from '../constants';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#especialidades', label: 'Especialidades' },
  { href: '#sobre', label: 'Sobre Nós' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-navy shadow-lg">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#inicio" className="flex items-center gap-3 shrink-0">
            <img
              src={LOGO_URL}
              alt="Centro Paraibano de Quiropraxia"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </a>
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-cyan-brand text-sm font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a
              href={PHONE_TEL}
              className="flex items-center gap-2 text-white/80 hover:text-white text-sm transition-colors"
            >
              <Phone
                width={15}
                height={15}
                className="lucide lucide-phone "
              />
              <span>{PHONE_LABEL}</span>
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold hover:bg-gold-light text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 hover:scale-105 shadow-md"
            >
              Agendar Consulta
            </a>
          </div>
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Menu"
          >
            {open ? (
              <X width={24} height={24} className="lucide lucide-x " />
            ) : (
              <Menu width={24} height={24} className="lucide lucide-menu " />
            )}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-navy border-t border-white/10 px-4 pb-4">
          <nav className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-white/80 hover:text-cyan-brand text-sm font-medium py-2 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href={PHONE_TEL}
              className="flex items-center gap-2 text-white/80 hover:text-white text-sm py-2 transition-colors"
            >
              <Phone width={15} height={15} className="lucide lucide-phone " />
              <span>{PHONE_LABEL}</span>
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold hover:bg-gold-light text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 text-center mt-2"
            >
              Agendar Consulta
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
