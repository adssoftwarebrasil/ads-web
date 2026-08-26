import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const LOGO =
  'https://storage-admin.lucasmendes.dev/api/v1/buckets/caroba/objects/download?preview=true&prefix=scorpionxpress%2FLogomarca_Scorpion-removebg-preview.png&version_id=null';

const NAV_LINKS = [
  { href: '#inicio', label: 'Início' },
  { href: '#marcas', label: 'Marcas' },
  { href: '#diferenciais', label: 'Por que nós?' },
  { href: '#loja', label: 'Loja' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black/95 md:bg-transparent py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2 flex-shrink-0">
          <img src={LOGO} alt="Scorpion Xpress" className="h-12 w-auto object-contain" />
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-[#fcc209] text-sm font-medium transition-colors duration-200 tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="https://wa.me/5514996487352?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20as%20baterias%20automotivas%20da%20Scorpion%20Xpress."
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 bg-[#fcc209] hover:bg-[#e6b008] text-black font-bold text-sm px-4 py-2.5 rounded-full transition-all duration-200 hover:scale-105"
        >
          <Phone size={16} className="lucide lucide-phone " />
          Fale Conosco
        </a>
        <button
          className="md:hidden text-white p-2"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <nav className="md:hidden bg-black/95 mt-4 px-4 sm:px-6 flex flex-col gap-4 py-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-white/80 hover:text-[#fcc209] text-sm font-medium transition-colors duration-200 tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
