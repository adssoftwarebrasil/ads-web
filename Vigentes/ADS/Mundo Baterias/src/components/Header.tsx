import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#produtos', label: 'Produtos' },
  { href: '#diferenciais', label: 'Delivery' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[rgb(32,29,30)]">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <img
              src="https://storage.lucasmendes.dev/site-sp/mundo%20das%20baterias%2Fimg%2Flogo.webp"
              alt="Mundo das Baterias"
              className="h-12 md:h-14 w-auto"
            />
          </div>
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white hover:text-[rgb(246,234,9)] transition-colors duration-300 font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/5566999146648"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[rgb(234,29,34)] text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-all duration-300 font-semibold flex items-center gap-2"
            >
              <Phone width={18} height={18} />
              Fale Conosco
            </a>
          </nav>
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X width={28} height={28} /> : <Menu width={28} height={28} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden bg-[rgb(32,29,30)] border-t border-white/10">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-white hover:text-[rgb(246,234,9)] transition-colors duration-300 font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/5566999146648"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="bg-[rgb(234,29,34)] text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-all duration-300 font-semibold flex items-center justify-center gap-2"
            >
              <Phone width={18} height={18} />
              Fale Conosco
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
