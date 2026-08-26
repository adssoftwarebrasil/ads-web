import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre Nós', href: '#sobre' },
  { label: 'Avaliações', href: '#avaliacoes' },
  { label: 'Contato', href: '#contato' },
];

const WHATSAPP_URL = 'http://wa.me/556692327182';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-brand-dark shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#inicio" className="flex items-center gap-3 flex-shrink-0">
            <img
              src="https://storage.lucasmendes.dev/site-sp/lord%20car%20auto%20center/img/logo-sem-fundo.webp"
              alt="Lord Car Auto Center"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/90 hover:text-brand-yellow transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-yellow group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href={`tel:+5566992327182`}
              className="flex items-center gap-2 text-sm font-medium text-white/80 hover:text-brand-yellow transition-colors"
            >
              <Phone size={16} />
              <span>(66) 99232-7182</span>
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-yellow text-brand-dark font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-yellow-300 transition-all duration-200 hover:shadow-lg hover:shadow-brand-yellow/30 hover:-translate-y-0.5"
            >
              Agendar Serviço
            </a>
          </div>

          <button
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-brand-dark border-t border-white/10 px-4 py-4 space-y-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              className="block py-3 px-4 text-white/90 hover:text-brand-yellow hover:bg-white/5 rounded-lg transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 space-y-2">
            <a
              href={`tel:+5566992327182`}
              className="flex items-center gap-2 py-3 px-4 text-white/70 hover:text-brand-yellow rounded-lg transition-colors text-sm"
            >
              <Phone size={16} />
              (66) 99232-7182
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleNavClick}
              className="block bg-brand-yellow text-brand-dark font-semibold text-sm px-5 py-3 rounded-full text-center hover:bg-yellow-300 transition-colors"
            >
              Agendar Serviço
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
