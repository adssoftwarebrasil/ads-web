import { useState } from 'react';
import { Menu } from 'lucide-react';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#como-funciona', label: 'Como Funciona' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#inicio">
              <img
                src="https://storage.lucasmendes.dev/site-sp/calc%2FLOGOTIPO%20-%20COLORIDO.png"
                alt="CALC Soluções"
                className="h-14 sm:h-16 w-auto"
              />
            </a>
          </div>
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#00108a] font-medium hover:text-[#f88c00] transition-colors duration-300 text-base"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="hidden lg:flex items-center space-x-6">
            <a
              href="tel:+5584992026504"
              className="flex items-center text-[#00108a] hover:text-[#f88c00] transition-colors duration-300"
            >
              <i className="fas fa-phone mr-2"></i>
              <span className="text-sm font-medium">(84) 9 9202-6504</span>
            </a>
            <a
              href="mailto:calcsolucoes1@gmail.com"
              className="flex items-center text-[#00108a] hover:text-[#f88c00] transition-colors duration-300"
            >
              <i className="fas fa-envelope mr-2"></i>
              <span className="text-sm font-medium">Email</span>
            </a>
          </div>
          <button
            className="lg:hidden text-[#00108a] focus:outline-none"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Abrir menu"
          >
            <Menu xmlns="http://www.w3.org/2000/svg" width="28" height="28" className="lucide lucide-menu " />
          </button>
        </div>
      </div>
      <div
        className={`lg:hidden fixed top-20 left-0 w-full bg-white transform transition-transform duration-300 ease-in-out shadow-xl ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <nav className="flex flex-col p-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[#00108a] font-medium hover:text-[#f88c00] transition-colors duration-300 text-lg py-2"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-gray-200 space-y-3">
            <a
              href="tel:+5584992026504"
              className="flex items-center text-[#00108a] hover:text-[#f88c00] transition-colors duration-300"
            >
              <i className="fas fa-phone mr-3"></i>
              <span className="font-medium">(84) 9 9202-6504</span>
            </a>
            <a
              href="mailto:calcsolucoes1@gmail.com"
              className="flex items-center text-[#00108a] hover:text-[#f88c00] transition-colors duration-300"
            >
              <i className="fas fa-envelope mr-3"></i>
              <span className="font-medium">calcsolucoes1@gmail.com</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
