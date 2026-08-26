import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Avaliações', href: '#avaliacoes' },
  { label: 'Contato', href: '#contato' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-brand-blue shadow-lg' : 'bg-brand-blue/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#inicio" onClick={() => handleNavClick('#inicio')} className="flex items-center gap-2 flex-shrink-0">
            <img
              src="https://storage.lucasmendes.dev/site-sp/sugas/img/logo-sem-fundo.webp"
              alt="SUGÁS Logo"
              className="h-10 md:h-14 w-auto object-contain"
            />
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-brand-white/90 hover:text-brand-yellow font-medium text-sm transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-brand-yellow transition-all duration-200 group-hover:w-full" />
              </button>
            ))}
          </nav>

          <a
            href="tel:+5566996502020"
            className="hidden md:flex items-center gap-2 bg-brand-red hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-200 text-sm hover:scale-105"
          >
            <Phone size={16} />
            (66) 9 9650-2020
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-brand-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-brand-blue border-t border-white/10 px-4 pb-4 pt-2 flex flex-col gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-brand-white/90 hover:text-brand-yellow font-medium text-base py-3 text-left border-b border-white/10 last:border-0 transition-colors"
            >
              {link.label}
            </button>
          ))}
          <a
            href="tel:+5566996502020"
            className="flex items-center justify-center gap-2 bg-brand-red text-white font-semibold px-4 py-3 rounded-lg mt-2 text-sm"
          >
            <Phone size={16} />
            (66) 9 9650-2020
          </a>
        </div>
      </div>
    </header>
  );
}
