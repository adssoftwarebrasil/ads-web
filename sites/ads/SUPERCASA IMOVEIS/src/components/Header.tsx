import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const LOGO =
  'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=supercasaimoveis%2Flogo.png&version_id=null';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#regioes', label: 'Regiões' },
  { href: '#equipe', label: 'Equipe' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-black shadow-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-20">
        <a href="#inicio" className="flex items-center">
          <img src={LOGO} alt="Super Casa Imóveis" className="h-12 md:h-14 w-auto" />
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white hover:text-[#d5a222] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="tel:+556699231818"
          className="hidden md:inline-flex items-center gap-2 bg-transparent text-[#d5a222] px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#d5a222] hover:text-black transition-all duration-300 border border-[#d5a222]"
        >
          <Phone size={16} />
          (66) 99923-1818
        </a>
        <button
          className="lg:hidden text-white p-2"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
      {open && (
        <nav className="lg:hidden bg-black border-t border-white/10 px-4 md:px-8 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-white hover:text-[#d5a222] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+556699231818"
            className="inline-flex items-center gap-2 text-[#d5a222] font-semibold"
          >
            <Phone size={16} />
            (66) 99923-1818
          </a>
        </nav>
      )}
    </header>
  );
}
