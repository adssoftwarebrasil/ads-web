import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const BASE = 'https://storage.lucasmendes.dev/site-sp/casa%20das%20embalagens';

const navLinks = [
  { label: 'Início', href: '#hero' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Quem Somos', href: '#sobre' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Contato', href: '#contato' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-blue shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#hero" className="flex items-center gap-3 flex-shrink-0">
            <img
              src={`${BASE}/logo-casa-das-embalagens.png`}
              alt="Casa das Embalagens"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/90 hover:text-brand-yellow font-medium text-sm transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-brand-yellow hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://wa.me/5562984075879"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-brand-yellow text-brand-blue font-bold text-sm px-5 py-2.5 rounded-full hover:bg-brand-yellow-dark transition-all duration-200 hover:scale-105 shadow-md"
            >
              <Phone size={16} />
              (62) 98407-5879
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white p-2 rounded-lg hover:bg-brand-blue-light transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-brand-blue-dark border-t border-white/10">
          <div className="px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-white/90 hover:text-brand-yellow font-medium py-2 border-b border-white/10 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/5562984075879"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-brand-yellow text-brand-blue font-bold px-5 py-3 rounded-full mt-2 transition-all duration-200"
            >
              <Phone size={18} />
              (62) 98407-5879
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
