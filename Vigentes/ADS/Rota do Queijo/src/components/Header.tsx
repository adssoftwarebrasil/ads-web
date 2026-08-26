import { useState } from 'react';
import { Instagram, Facebook, Phone, Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[rgb(32,29,30)]/95 py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <a href="#inicio" className="flex items-center space-x-3">
            <img
              src="https://storage.lucasmendes.dev/site-sp/rota%20do%20queijo/img/logo-atualizada.png"
              alt="Rota do Queijo"
              className="h-14 md:h-20 w-auto object-contain transition-all duration-300"
            />
          </a>
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[rgb(254,254,254)] hover:text-[rgb(197,162,3)] transition-colors duration-300 font-medium text-sm tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="https://www.instagram.com/rotadoqueijodf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[rgb(254,254,254)] hover:text-[rgb(197,162,3)] transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram width={20} height={20} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100069847886739"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[rgb(254,254,254)] hover:text-[rgb(197,162,3)] transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook width={20} height={20} />
            </a>
            <a
              href="http://wa.me/556184960294"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[rgb(197,162,3)] text-[rgb(32,29,30)] px-6 py-2.5 rounded-full font-semibold hover:bg-[rgb(217,182,23)] transition-all duration-300 flex items-center space-x-2 shadow-lg"
            >
              <Phone width={18} height={18} />
              <span>Contato</span>
            </a>
          </div>
          <button
            className="lg:hidden text-[rgb(254,254,254)] hover:text-[rgb(197,162,3)] transition-colors"
            aria-label="Menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? <X width={28} height={28} /> : <Menu width={28} height={28} />}
          </button>
        </div>

        {menuOpen && (
          <nav className="lg:hidden mt-4 flex flex-col space-y-4 pb-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-[rgb(254,254,254)] hover:text-[rgb(197,162,3)] transition-colors duration-300 font-medium text-sm tracking-wide"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center space-x-4 pt-2">
              <a
                href="https://www.instagram.com/rotadoqueijodf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[rgb(254,254,254)] hover:text-[rgb(197,162,3)] transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram width={20} height={20} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100069847886739"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[rgb(254,254,254)] hover:text-[rgb(197,162,3)] transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook width={20} height={20} />
              </a>
              <a
                href="http://wa.me/556184960294"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[rgb(197,162,3)] text-[rgb(32,29,30)] px-6 py-2.5 rounded-full font-semibold hover:bg-[rgb(217,182,23)] transition-all duration-300 flex items-center space-x-2 shadow-lg"
              >
                <Phone width={18} height={18} />
                <span>Contato</span>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
