import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Avaliações', href: '#avaliacoes' },
  { label: 'Contato', href: '#contato' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? 'bg-gray-950 shadow-lg shadow-black/30'
          : 'bg-gradient-to-b from-black/70 to-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#inicio" onClick={() => handleNav('#inicio')} className="flex items-center gap-3 flex-shrink-0">
            <img
              src="https://storage.lucasmendes.dev/site-sp/rpn%20mecanica%20automotiva/img/logo-sem-fundo.webp"
              alt="RPN Mecânica Automotiva"
              className="h-10 md:h-16 w-auto object-contain"
            />
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="nav-link text-white/90 hover:text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+5591982696336"
              className="flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium transition-colors"
            >
              <Phone size={15} />
              <span>(91) 9 8269-6336</span>
            </a>
            <a
              href="http://wa.me/559182696336"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm px-5 py-2.5"
            >
              Agendar Agora
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden bg-gray-950 border-t border-white/10 overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container-custom py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-white/90 hover:text-white hover:bg-white/10 text-left px-4 py-3 rounded-lg font-medium transition-colors"
            >
              {link.label}
            </button>
          ))}
          <div className="border-t border-white/10 mt-3 pt-4 flex flex-col gap-3">
            <a
              href="tel:+5591982696336"
              className="flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium transition-colors px-4"
            >
              <Phone size={15} />
              <span>(91) 9 8269-6336</span>
            </a>
            <a
              href="http://wa.me/559182696336"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary justify-center mx-4"
            >
              Agendar pelo WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
