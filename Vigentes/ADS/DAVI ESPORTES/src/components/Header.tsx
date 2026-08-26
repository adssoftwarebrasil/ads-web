import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#home', label: 'Início' },
  { href: '#products', label: 'Produtos' },
  { href: '#about', label: 'Sobre Nós' },
  { href: '#contact', label: 'Contato' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 transition-all duration-300 bg-[#363435]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="#home" className="transition-transform hover:scale-105 flex items-center gap-3">
              <img
                src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=daviesportes%2Flogodavi-Photoroom.png&version_id=null"
                alt="Davi Esportes Logo"
                className="h-14 w-auto object-contain"
              />
              <span className="text-[#FDF341] text-xl md:text-2xl font-bold hidden sm:inline">DAVI ESPORTES</span>
            </a>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white text-base font-medium relative group transition-colors hover:text-[#FDF341]"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FDF341] transition-all group-hover:w-full"></span>
              </a>
            ))}
          </nav>
          <button className="md:hidden text-white" onClick={() => setOpen((v) => !v)} aria-label="Menu">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {open && (
          <nav className="md:hidden pb-4 flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-white text-base font-medium transition-colors hover:text-[#FDF341]"
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
