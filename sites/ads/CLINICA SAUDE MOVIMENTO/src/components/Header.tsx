import { useEffect, useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { WHATSAPP_LINK, PHONE_LINK, LOGO_URL } from '../lib/constants';

const navLinks = [
  { href: '#hero', label: 'Início' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-clinic-teal shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 flex-shrink-0">
          <img
            src={LOGO_URL}
            alt="Clínica Saúde Movimento"
            className="h-16 w-auto object-contain brightness-0 invert"
          />
        </a>
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white text-sm font-medium hover:text-clinic-gold transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-clinic-gold transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={PHONE_LINK}
            className="flex items-center gap-1.5 text-white text-sm hover:text-clinic-gold transition-colors"
          >
            <Phone className="lucide lucide-phone" width={15} height={15} />
            <span>(66) 9 9920-2262</span>
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-clinic-gold text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-clinic-gold-light transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Agendar Consulta
          </a>
        </div>
        <button
          className="lg:hidden text-white p-2"
          aria-label="Menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? (
            <X width={24} height={24} />
          ) : (
            <Menu width={24} height={24} />
          )}
        </button>
      </div>
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-clinic-teal px-4 pb-4 pt-2 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white py-3 px-2 text-base font-medium border-b border-clinic-teal-light hover:text-clinic-gold transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mt-3 bg-clinic-gold text-white text-center font-semibold py-3 rounded-full hover:bg-clinic-gold-light transition-colors"
          >
            Agendar pelo WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
