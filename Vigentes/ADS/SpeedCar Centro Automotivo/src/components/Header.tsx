import { useState } from 'react';
import { Phone, Menu } from 'lucide-react';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-gradient-to-b from-black/80 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#inicio" className="flex-shrink-0">
            <img
              src="https://storage.lucasmendes.dev/site-sp/speedcar%2Fimg%2Flogo-sem-fundo.webp"
              alt="SpeedCar Centro Automotivo"
              className="h-11 w-auto"
            />
          </a>
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/70 hover:text-white text-[13px] font-semibold tracking-widest uppercase transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-speedcar-red after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-5">
            <a
              href="tel:+5566984369336"
              className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
            >
              <Phone className="lucide lucide-phone w-4 h-4" />
              <span className="text-sm font-medium">(66) 98436-9336</span>
            </a>
            <a
              href="http://wa.me/5566984369336"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-speedcar-red hover:bg-red-700 text-white px-6 py-2.5 rounded text-xs font-bold tracking-widest uppercase transition-all hover:scale-105 hover:shadow-lg hover:shadow-red-900/30"
            >
              Agende Agora
            </a>
          </div>
          <button
            className="lg:hidden text-white p-2 -mr-2"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            <Menu className="lucide lucide-menu w-6 h-6" />
          </button>
        </div>
      </div>
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-black/95 backdrop-blur-md border-t border-white/10 px-4 py-6 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-white/70 hover:text-white hover:bg-white/5 text-sm font-semibold tracking-widest uppercase transition-colors px-4 py-3 rounded"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 px-4 space-y-3">
            <a
              href="tel:+5566984369336"
              className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
            >
              <Phone className="lucide lucide-phone w-4 h-4" />
              <span className="text-sm font-medium">(66) 98436-9336</span>
            </a>
            <a
              href="http://wa.me/5566984369336"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-speedcar-red hover:bg-red-700 text-white px-6 py-3 rounded text-xs font-bold tracking-widest uppercase text-center transition-all"
            >
              Agende Agora
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
