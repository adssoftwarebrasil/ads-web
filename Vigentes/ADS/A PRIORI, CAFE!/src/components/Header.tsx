import { useState, useEffect } from 'react';
import { Menu, X, Instagram, Facebook } from 'lucide-react';

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Cardápio', href: '#cardapio' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Avaliações', href: '#avaliacoes' },
  { label: 'Contato', href: '#contato' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <a href="#inicio" onClick={() => handleNav('#inicio')} className="flex items-center gap-3 group">
          <img
            src="https://storage.lucasmendes.dev/site-sp/a%20priori%20cafe/img/logo-sem-fundo.webp"
            alt="A Priori Café"
            className={`h-12 w-auto object-contain transition-all duration-300 ${
              scrolled ? '' : 'brightness-0 invert'
            }`}
          />
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className={`font-sans text-sm font-medium tracking-wide transition-colors duration-200 relative after:absolute after:bottom-[-3px] after:left-0 after:w-0 after:h-[2px] after:bg-burgundy after:transition-all after:duration-300 hover:after:w-full ${
                scrolled ? 'text-gray-700 hover:text-burgundy' : 'text-white hover:text-cream'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="https://www.instagram.com/aprioricafecps/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className={`transition-colors duration-200 ${scrolled ? 'text-gray-500 hover:text-burgundy' : 'text-white/80 hover:text-white'}`}
          >
            <Instagram size={18} />
          </a>
          <a
            href="https://www.facebook.com/Aprioricafecps"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className={`transition-colors duration-200 ${scrolled ? 'text-gray-500 hover:text-burgundy' : 'text-white/80 hover:text-white'}`}
          >
            <Facebook size={18} />
          </a>
          <a
            href="http://wa.me/5519996561976"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 bg-burgundy text-white font-sans text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 hover:bg-burgundy-dark hover:shadow-lg hover:-translate-y-0.5"
          >
            Fale Conosco
          </a>
        </div>

        <button
          className={`lg:hidden p-2 rounded-md transition-colors duration-200 ${
            scrolled ? 'text-gray-700 hover:text-burgundy' : 'text-white'
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ${
          menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        } bg-white border-t border-cream`}
      >
        <div className="px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-left font-sans text-base font-medium text-gray-700 hover:text-burgundy py-3 px-2 border-b border-cream-light last:border-b-0 transition-colors duration-200"
            >
              {link.label}
            </button>
          ))}
          <a
            href="http://wa.me/5519996561976"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 bg-burgundy text-white font-sans text-sm font-semibold px-5 py-3 rounded-full text-center transition-all duration-300 hover:bg-burgundy-dark"
          >
            Fale Conosco pelo WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
