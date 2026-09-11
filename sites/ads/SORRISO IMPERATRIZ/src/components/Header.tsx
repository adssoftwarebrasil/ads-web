import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#vantagens', label: 'Vantagens' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[rgb(13,51,98)]/95 backdrop-blur-sm">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#inicio">
              <img
                src="https://storage.lucasmendes.dev/site-sp/sorrisoimperatriz%2Fimg%2Flogo.webp"
                alt="Clínica Sorriso Imperatriz"
                className="h-12 w-auto"
                loading="eager"
              />
            </a>
          </div>
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white hover:text-[rgb(212,175,55)] font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+5599982501000"
              className="flex items-center space-x-2 text-white hover:text-[rgb(212,175,55)] transition-colors"
            >
              <Phone className="lucide lucide-phone w-5 h-5" />
              <span className="font-medium">(99) 98250-1000</span>
            </a>
            <a
              href="https://wa.me/5599982501000?text=Olá! Gostaria de agendar uma consulta."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[rgb(212,175,55)] text-white px-6 py-2.5 rounded-lg font-semibold hover:brightness-110 active:scale-95 transition-all duration-200 shadow-md"
            >
              Agendar Consulta
            </a>
          </div>
          <button
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <X className="lucide lucide-x w-6 h-6" />
            ) : (
              <Menu className="lucide lucide-menu w-6 h-6" />
            )}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden bg-[rgb(13,51,98)]/98 backdrop-blur-sm border-t border-white/10">
          <nav className="max-w-screen-2xl mx-auto px-4 sm:px-6 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-white hover:text-[rgb(212,175,55)] font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+5599982501000"
              className="flex items-center space-x-2 text-white hover:text-[rgb(212,175,55)] transition-colors"
            >
              <Phone className="lucide lucide-phone w-5 h-5" />
              <span className="font-medium">(99) 98250-1000</span>
            </a>
            <a
              href="https://wa.me/5599982501000?text=Olá! Gostaria de agendar uma consulta."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="bg-[rgb(212,175,55)] text-white px-6 py-2.5 rounded-lg font-semibold text-center hover:brightness-110 active:scale-95 transition-all duration-200 shadow-md"
            >
              Agendar Consulta
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
