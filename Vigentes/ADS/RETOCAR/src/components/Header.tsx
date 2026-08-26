import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const WHATSAPP_URL =
  'https://api.whatsapp.com/send/?phone=556233396922&text&type=phone_number&app_absent=0';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#localizacao', label: 'Localização' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A] border-b border-white/5 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between h-16 md:h-20">
        <a href="#inicio" className="flex-shrink-0">
          <img
            src="https://storage.lucasmendes.dev/site-sp/RETOCAR/logo-retocar-servicos-pecas-locacao-veiculos_1024x1024.webp"
            alt="Retocar"
            className="h-10 md:h-14 w-auto object-contain"
          />
        </a>
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-400 hover:text-white text-sm font-medium transition-colors duration-200 tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 bg-[#DB151F] hover:bg-[#b8101a] text-white text-sm font-bold px-5 py-2.5 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-red-900/40"
        >
          <Phone className="lucide lucide-phone" width={15} height={15} />
          Fale Conosco
        </a>
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          aria-label="Menu"
        >
          {open ? (
            <X className="lucide lucide-x" width={22} height={22} />
          ) : (
            <Menu className="lucide lucide-menu" width={22} height={22} />
          )}
        </button>
      </div>
      {open && (
        <nav className="md:hidden bg-[#0A0A0A] border-t border-white/5 px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-gray-400 hover:text-white text-sm font-medium transition-colors duration-200 tracking-wide py-2"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#DB151F] hover:bg-[#b8101a] text-white text-sm font-bold px-5 py-2.5 rounded-lg transition-all duration-200 mt-2 w-fit"
          >
            <Phone className="lucide lucide-phone" width={15} height={15} />
            Fale Conosco
          </a>
        </nav>
      )}
    </header>
  );
}
