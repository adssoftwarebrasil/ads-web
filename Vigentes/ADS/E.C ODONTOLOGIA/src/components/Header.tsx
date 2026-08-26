import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const IMG_BASE = 'https://storage.lucasmendes.dev/site-sp/e%20c%20odontologia/img/';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Produtos', href: '#produtos' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black shadow-xl' : 'bg-black/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="#" className="flex items-center gap-3 flex-shrink-0">
            <img
              src={`${IMG_BASE}logo-sem-fundo.webp`}
              alt="E.C. Odontologia Representações"
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-white text-sm font-medium tracking-wide transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+559181685427"
              className="flex items-center gap-2 text-gray-300 hover:text-white text-sm transition-colors duration-200"
            >
              <Phone size={16} />
              <span>(91) 9 8168-5427</span>
            </a>
            <a
              href="http://wa.me/559181685427"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-5 py-2 text-sm font-semibold rounded-none tracking-wider hover:bg-gray-100 transition-colors duration-200"
            >
              FALAR COM CONSULTOR
            </a>
          </div>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-black border-t border-white/10">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block text-gray-300 hover:text-white text-base font-medium py-2 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-white/10 space-y-3">
              <a
                href="tel:+559181685427"
                className="flex items-center gap-2 text-gray-300 hover:text-white text-sm transition-colors"
              >
                <Phone size={16} />
                <span>(91) 9 8168-5427</span>
              </a>
              <a
                href="http://wa.me/559181685427"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white text-black text-center px-5 py-3 text-sm font-semibold tracking-wider hover:bg-gray-100 transition-colors"
              >
                FALAR COM CONSULTOR
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
