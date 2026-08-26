import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Cursos', href: '#cursos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Vídeos', href: '#depoimentos-video' },
  { label: 'Contato', href: '#contato' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        isScrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <a href="#inicio" className="flex-shrink-0">
          <img
            src="https://storage.lucasmendes.dev/site-sp/cientec/img/logo.webp"
            alt="Cientec"
            className="h-10 md:h-12 w-auto object-contain"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-semibold tracking-wide transition-colors duration-200 hover:opacity-80 ${
                isScrolled ? 'text-gray-800 hover:text-brand-red' : 'text-white drop-shadow'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="http://wa.me/556699893074"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-bold transition-all duration-200 hover:scale-105 hover:shadow-lg shadow-md"
          style={{ backgroundColor: 'rgb(188, 51, 54)' }}
        >
          <Phone size={15} />
          Matricule-se Agora
        </a>

        <button
          className="lg:hidden p-2 rounded-md transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          {isMobileMenuOpen ? (
            <X size={26} className="text-gray-800" />
          ) : (
            <Menu size={26} className={isScrolled ? 'text-gray-800' : 'text-white'} />
          )}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl">
          <nav className="flex flex-col divide-y divide-gray-100">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-6 py-4 text-gray-800 font-semibold text-sm hover:bg-gray-50 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="px-6 py-4">
            <a
              href="http://wa.me/556699893074"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full text-white font-bold text-sm"
              style={{ backgroundColor: 'rgb(188, 51, 54)' }}
            >
              <Phone size={15} />
              Matricule-se Agora
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
