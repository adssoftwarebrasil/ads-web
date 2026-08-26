import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const LOGO = 'https://storage.lucasmendes.dev/site-sp/vaap%20lubrificantes/img/logo-sem-fundo.webp';
const WA_LINK = 'https://wa.me/556584438839?text=Olá!%20Gostaria%20de%20agendar%20um%20serviço.';

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Produtos', href: '#produtos' },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? 'bg-white shadow-lg py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#inicio" onClick={(e) => { e.preventDefault(); handleNav('#inicio'); }} className="flex-shrink-0">
            <img
              src={LOGO}
              alt="Vaap Castrol Lubrificantes"
              className="h-12 md:h-14 w-auto object-contain"
            />
          </a>

          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                className={`text-sm font-medium transition-colors duration-200 hover:text-brand-green ${
                  scrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+556584438839"
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                scrolled ? 'text-gray-600 hover:text-brand-green' : 'text-white hover:text-brand-green-light'
              }`}
            >
              <Phone size={16} />
              <span>(65) 9 8443-8839</span>
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm"
            >
              Agendar Serviço
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } bg-white shadow-xl`}
      >
        <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
              className="text-gray-700 font-medium py-3 px-3 rounded-lg hover:bg-gray-50 hover:text-brand-green transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary justify-center mt-3"
          >
            Agendar Serviço
          </a>
        </nav>
      </div>
    </header>
  );
}
