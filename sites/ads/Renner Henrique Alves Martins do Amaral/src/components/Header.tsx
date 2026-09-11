import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Estrutura', href: '#estrutura' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-shadow duration-300"
      style={{
        backgroundColor: 'rgb(255, 252, 228)',
        boxShadow: scrolled ? '0 2px 20px rgba(76,108,163,0.12)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a
            href="#inicio"
            onClick={(e) => { e.preventDefault(); handleNavClick('#inicio'); }}
            className="flex items-center gap-3 group"
          >
            <img
              src="https://storage.lucasmendes.dev/site-sp/dr%20renner%20amaral%20pediatra/img/logo-sem-fundo.webp"
              alt="Logo Dr. Renner Amaral"
              className="h-12 w-auto object-contain"
            />
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-brand-blue text-sm sm:text-base tracking-tight">
                Dr. Renner Amaral
              </span>
              <span className="text-xs text-gray-500 font-medium tracking-widest uppercase">
                Pediatra
              </span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="nav-link text-gray-700 hover:text-brand-blue font-medium text-sm transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+553732421965"
              className="flex items-center gap-2 text-gray-600 hover:text-brand-blue transition-colors text-sm font-medium"
            >
              <Phone size={15} />
              <span>(37) 3242-1965</span>
            </a>
            <a
              href="http://wa.me/553799766089"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-blue hover:bg-brand-blue-dark text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Agendar Consulta
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-lg text-brand-blue hover:bg-brand-blue-pale transition-colors"
            aria-label="Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ backgroundColor: 'rgb(255, 252, 228)' }}
      >
        <div className="px-4 pb-6 pt-2 border-t border-brand-blue/10">
          <nav className="flex flex-col gap-1 mb-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="text-gray-700 hover:text-brand-blue hover:bg-brand-blue-pale font-medium text-base py-3 px-3 rounded-lg transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex flex-col gap-3 pt-4 border-t border-brand-blue/10">
            <a
              href="tel:+553732421965"
              className="flex items-center gap-2 text-gray-600 font-medium text-sm px-3"
            >
              <Phone size={15} className="text-brand-blue" />
              (37) 3242-1965
            </a>
            <a
              href="http://wa.me/553799766089"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-blue text-white text-center font-semibold px-5 py-3 rounded-full transition-all duration-200 shadow-md"
            >
              Agendar Consulta via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
