import { useState } from 'react';
import { Instagram, Facebook, Phone, Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#home', label: 'Início' },
  { href: '#about', label: 'Sobre' },
  { href: '#products', label: 'Produtos' },
  { href: '#gallery', label: 'Galeria' },
  { href: '#location', label: 'Localização' },
  { href: '#contact', label: 'Contato' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img
              src="https://storage.lucasmendes.dev/site-sp/Quase%20Tudo%2Fimg%2Flogo-dourada-sem-fundo.webp"
              alt="Quase Tudo Shopping dos Puxadores"
              className="h-12 sm:h-16 w-auto"
            />
          </div>
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-800 hover:text-[rgb(212,171,85)] transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="https://www.instagram.com/quasetudopuxadores"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-[rgb(212,171,85)] transition-colors duration-200"
            >
              <Instagram width={20} height={20} />
            </a>
            <a
              href="https://www.facebook.com/quasetudopuxadoresoficial/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-[rgb(212,171,85)] transition-colors duration-200"
            >
              <Facebook width={20} height={20} />
            </a>
            <a
              href="http://wa.me/556293252626"
              className="flex items-center space-x-2 bg-[rgb(45,45,45)] text-white px-6 py-2.5 rounded-full hover:bg-[rgb(212,171,85)] transition-all duration-300 font-semibold"
            >
              <Phone width={18} height={18} />
              <span>Contato</span>
            </a>
          </div>
          <button
            className="lg:hidden text-gray-800"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menu"
          >
            {menuOpen ? <X width={28} height={28} /> : <Menu width={28} height={28} />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-sm border-t border-gray-100">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-800 hover:text-[rgb(212,171,85)] transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="http://wa.me/556293252626"
              className="flex items-center justify-center space-x-2 bg-[rgb(45,45,45)] text-white px-6 py-2.5 rounded-full hover:bg-[rgb(212,171,85)] transition-all duration-300 font-semibold"
            >
              <Phone width={18} height={18} />
              <span>Contato</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
