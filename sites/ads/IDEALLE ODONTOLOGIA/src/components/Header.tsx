import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Transformações', href: '#transformacoes' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white shadow-md shadow-[rgba(146,114,84,0.12)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="#inicio" onClick={() => handleNavClick('#inicio')} className="flex items-center">
            <img
              src="https://storage.lucasmendes.dev/site-sp/idealle%20odontologia/img/logo.webp"
              alt="Idealle Odontologia"
              className={`h-10 sm:h-12 w-auto object-contain transition-all duration-500 ${
                !scrolled ? 'brightness-0 invert' : ''
              }`}
            />
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                  scrolled
                    ? 'text-[rgba(131,123,109,0.996)] hover:text-[rgb(146,114,84)]'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+556696621999"
              className={`flex items-center gap-2 text-sm font-medium transition-colors duration-200 ${
                scrolled ? 'text-[rgba(131,123,109,0.996)]' : 'text-white/90'
              }`}
            >
              <Phone size={15} />
              <span>(66) 9 9662-1999</span>
            </a>
            <a
              href="https://wa.me/556696621999?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20consulta."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[rgb(146,114,84)] hover:bg-[rgb(138,117,90)] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[rgba(146,114,84,0.3)] hover:-translate-y-0.5"
            >
              Agendar Consulta
            </a>
          </div>

          <button
            className="lg:hidden p-2 rounded-lg"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? (
              <X size={24} className={scrolled ? 'text-[rgb(146,114,84)]' : 'text-white'} />
            ) : (
              <Menu size={24} className={scrolled ? 'text-[rgb(146,114,84)]' : 'text-white'} />
            )}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        } bg-white border-t border-[rgba(146,114,84,0.15)]`}
      >
        <div className="px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-left px-4 py-3 text-sm font-medium text-[rgba(131,123,109,0.996)] hover:text-[rgb(146,114,84)] hover:bg-[rgba(166,133,109,0.08)] rounded-lg transition-colors duration-200"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-3 pb-1 border-t border-[rgba(146,114,84,0.15)] mt-2">
            <a
              href="https://wa.me/556696621999?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20consulta."
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-[rgb(146,114,84)] text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 hover:bg-[rgb(138,117,90)]"
            >
              Agendar Consulta
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}