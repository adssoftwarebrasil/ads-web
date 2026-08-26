import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#vantagens', label: 'Vantagens' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-[#FDF7E7] z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <img
              src="https://storage.lucasmendes.dev/site-sp/kangaslanches/logo.webp"
              alt="Kangas Logo"
              className="h-14 w-14 object-contain"
            />
            <div className="hidden sm:block">
              <h1 className="text-[#2A2A77] font-bold text-xl">Kangas</h1>
              <p className="text-[#FF3333] text-xs font-bold">Lanches &amp; Pizzas</p>
            </div>
          </div>
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#2A2A77] hover:text-[#FF3333] font-medium transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:6536254300"
              className="flex items-center gap-2 text-[#2A2A77] hover:text-[#EF1A24] transition-colors"
            >
              <Phone size={18} />
              <span className="text-sm font-medium">(65) 3625-4300</span>
            </a>
          </div>
          <button
            className="lg:hidden text-[#2A2A77] hover:text-[#FF3333] transition-colors"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        {open && (
          <nav className="lg:hidden pb-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-[#2A2A77] hover:text-[#FF3333] font-medium transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:6536254300"
              className="flex items-center gap-2 text-[#2A2A77] hover:text-[#EF1A24] transition-colors"
            >
              <Phone size={18} />
              <span className="text-sm font-medium">(65) 3625-4300</span>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
