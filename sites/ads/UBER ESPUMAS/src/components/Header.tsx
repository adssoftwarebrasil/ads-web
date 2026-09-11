import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#galeria', label: 'Fotos' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 transition-all duration-300 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-20 flex items-center justify-between">
          <div className="flex-shrink-0 cursor-pointer">
            <img
              src="https://storage.lucasmendes.dev/site-sp/uber%20espumas%2Fimg%2Flogo2.png"
              alt="Uber Espumas"
              className="h-16 w-auto hover:opacity-80 transition-opacity"
            />
          </div>
          <nav className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-[#00218b] transition-colors duration-300 font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contato"
              className="bg-[#00218b] text-white px-6 py-3 rounded-full hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold"
            >
              Solicitar Orçamento
            </a>
          </nav>
          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? (
              <X className="lucide lucide-menu text-gray-700" width={24} height={24} />
            ) : (
              <Menu className="lucide lucide-menu text-gray-700" width={24} height={24} />
            )}
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-100 px-4 sm:px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-700 hover:text-[#00218b] transition-colors duration-300 font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            className="bg-[#00218b] text-white px-6 py-3 rounded-full text-center hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold"
            onClick={() => setMenuOpen(false)}
          >
            Solicitar Orçamento
          </a>
        </nav>
      )}
    </header>
  );
}
