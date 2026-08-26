import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#acomodacoes', label: 'Acomodações' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/90 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 max-w-[1200px]">
        <div className="flex items-center justify-between h-20 lg:h-20">
          <a href="#inicio">
            <img
              src="https://storage.lucasmendes.dev/site-sp/calderan-palace%2Flogo.webp"
              alt="Calderan Palace Hotel"
              className="h-10 lg:h-12 w-auto"
            />
          </a>
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#1A1A1A] text-sm font-medium tracking-wide transition-colors duration-300 hover:text-[#F09100]"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="https://wa.me/5567325113377?text=Olá!%20Gostaria%20de%20fazer%20uma%20reserva."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-block bg-[#F09100] text-white px-7 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-[#D98200] hover:scale-105 hover:shadow-lg"
          >
            Reserve Agora
          </a>
          <button
            className="lg:hidden p-2 text-[#1A1A1A]"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        {open && (
          <nav className="lg:hidden pb-4 flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-[#1A1A1A] text-sm font-medium tracking-wide py-2 transition-colors duration-300 hover:text-[#F09100]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/5567325113377?text=Olá!%20Gostaria%20de%20fazer%20uma%20reserva."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#F09100] text-white px-7 py-3 rounded-lg font-medium text-center transition-all duration-300 hover:bg-[#D98200]"
            >
              Reserve Agora
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
