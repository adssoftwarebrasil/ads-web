import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#hero', label: 'Início' },
  { href: '#services', label: 'Soluções' },
  { href: '#features', label: 'Funcionalidades' },
  { href: '#about', label: 'Sobre' },
  { href: '#contact', label: 'Contato' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-plantae-dark">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#hero" className="flex items-center">
            <img
              src="https://storage.lucasmendes.dev/site-sp/plantae/Logo_Plantae-%20logo%20branca%20fundo%20trasnparente.png"
              alt="Plantae Gestão Agrícola"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-plantae-green transition-colors duration-200 text-sm font-semibold tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+5566992921858"
              className="flex items-center gap-2 text-white/80 hover:text-plantae-green transition-colors duration-200 text-sm"
            >
              <Phone width={16} height={16} />
              <span>(66) 99292-1858</span>
            </a>
            <a
              href="https://wa.me/5566992921858"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-plantae-green text-plantae-dark font-black text-sm px-5 py-2.5 rounded-full hover:bg-[#bcd95a] transition-all duration-200 hover:shadow-lg"
            >
              Fale Conosco
            </a>
          </div>
          <button
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X width={24} height={24} /> : <Menu width={24} height={24} />}
          </button>
        </div>
        {open && (
          <nav className="md:hidden pb-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-white/80 hover:text-plantae-green transition-colors duration-200 text-sm font-semibold tracking-wide py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+5566992921858"
              className="flex items-center gap-2 text-white/80 hover:text-plantae-green transition-colors duration-200 text-sm py-2"
            >
              <Phone width={16} height={16} />
              <span>(66) 99292-1858</span>
            </a>
            <a
              href="https://wa.me/5566992921858"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-plantae-green text-plantae-dark font-black text-sm px-5 py-2.5 rounded-full hover:bg-[#bcd95a] transition-all duration-200 hover:shadow-lg text-center"
            >
              Fale Conosco
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
