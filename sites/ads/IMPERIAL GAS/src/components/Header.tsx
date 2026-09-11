import { useEffect, useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#hero', label: 'Início' },
  { href: '#products', label: 'Produtos' },
  { href: '#about', label: 'Sobre' },
  { href: '#testimonials', label: 'Avaliações' },
  { href: '#contact', label: 'Contato' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-500 ${
        scrolled ? 'shadow-md' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#hero" className="flex items-center gap-2 group">
            <img
              src="https://storage.lucasmendes.dev/site-sp/imperial%20gas/img2/logo.webp"
              alt="Logo Imperial Gás"
              className="h-10 w-auto md:h-14 object-contain transition-transform group-hover:scale-105"
            />
          </a>
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left rounded-full"></span>
              </a>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:6232598600"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
            >
              <Phone className="w-4 h-4 text-orange-500" />
              (62) 3259-8600
            </a>
            <a
              href="http://wa.me/556282381551"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 hover:bg-orange-400 text-white text-sm font-bold px-5 py-2.5 rounded-full transition-all duration-200 shadow-lg shadow-orange-500/30 hover:shadow-orange-400/40 hover:-translate-y-0.5"
            >
              Pedir Agora
            </a>
          </div>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden text-gray-900 p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-gray-100 px-4 py-4 space-y-1 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-gray-600 hover:text-orange-500 py-2.5 px-3 rounded-lg hover:bg-orange-50 text-sm font-medium transition-all"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
            <a
              href="tel:6232598600"
              className="flex items-center gap-2 text-gray-600 text-sm py-2 px-3"
            >
              <Phone className="w-4 h-4 text-orange-500" />
              (62) 3259-8600
            </a>
            <a
              href="http://wa.me/556282381551"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 text-white text-sm font-bold px-4 py-3 rounded-xl text-center"
            >
              Pedir pelo WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
