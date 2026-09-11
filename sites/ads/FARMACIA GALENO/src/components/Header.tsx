import { useState } from 'react';
import { Phone, Menu } from 'lucide-react';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#produtos', label: 'Produtos' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#unidades', label: 'Unidades' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-sm py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src="https://storage.lucasmendes.dev/site-sp/farmacia%20galeno/img/logo-sem-fundo.png"
              alt="Farmácias Galeno"
              className="h-12 md:h-16 w-auto object-contain"
            />
          </div>
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[rgb(40,84,48)] font-medium hover:text-[rgb(95,141,77)] transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[rgb(95,141,77)] transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}
          </nav>
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+558632218485"
              className="flex items-center space-x-2 px-6 py-3 bg-[rgb(95,141,77)] text-white rounded-full hover:bg-[rgb(40,84,48)] transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
            >
              <Phone size={18} />
              <span className="font-medium">Ligar Agora</span>
            </a>
          </div>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden p-2 text-[rgb(40,84,48)] hover:bg-[rgb(230,217,182)] rounded-lg transition-colors"
            aria-label="Abrir menu"
          >
            <Menu size={24} />
          </button>
        </div>
        {menuOpen && (
          <nav className="lg:hidden mt-4 flex flex-col space-y-2 pb-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-[rgb(40,84,48)] font-medium hover:text-[rgb(95,141,77)] transition-colors duration-200 py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+558632218485"
              onClick={() => setMenuOpen(false)}
              className="flex items-center space-x-2 px-6 py-3 bg-[rgb(95,141,77)] text-white rounded-full hover:bg-[rgb(40,84,48)] transition-all duration-300 shadow-md w-max"
            >
              <Phone size={18} />
              <span className="font-medium">Ligar Agora</span>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
