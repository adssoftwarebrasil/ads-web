import { useState, useEffect } from 'react';
import { Phone, Menu, X, MapPin, Clock } from 'lucide-react';

const WA_LINK = 'http://wa.me/553184631447';
const PHONE = '(31) 3565-4833';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Produtos', href: '#produtos' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Avaliações', href: '#avaliacoes' },
    { label: 'Localização', href: '#localizacao' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="hidden md:block bg-[#0A0A0A] border-b border-white/5 text-sm">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center text-gray-400">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <MapPin size={13} className="text-brand-red" />
              R. Monsenhor Messías, 378 – Flamengo, Contagem – MG
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={13} className="text-brand-red" />
              Seg–Sex até 18h
            </span>
          </div>
          <a
            href={`tel:${PHONE.replace(/\D/g, '')}`}
            className="flex items-center gap-1.5 text-white hover:text-brand-red transition-colors font-medium"
          >
            <Phone size={13} />
            {PHONE}
          </a>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0A0A0A]/95 backdrop-blur-md shadow-lg shadow-black/40'
            : 'bg-[#0A0A0A]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img
              src="https://storage.lucasmendes.dev/site-sp/cia%20da%20solda/img/logo-sem-fundo.webp"
              alt="Cia da Solda"
              className="h-14 w-auto object-contain"
            />
          </a>

          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-gray-300 hover:text-white text-sm font-medium transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-brand-red group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${PHONE.replace(/\D/g, '')}`}
              className="hidden sm:flex items-center gap-2 text-white hover:text-brand-red transition-colors text-sm font-semibold"
            >
              <Phone size={16} className="text-brand-red" />
              {PHONE}
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 bg-brand-red hover:bg-red-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-brand-red/30"
            >
              Falar no WhatsApp
            </a>

            <button
              className="lg:hidden text-white p-1"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? 'max-h-96 border-t border-white/10' : 'max-h-0'
          } bg-[#111111]`}
        >
          <div className="px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-gray-300 hover:text-white text-left py-2.5 px-3 rounded-lg hover:bg-white/5 transition-colors font-medium"
              >
                {link.label}
              </button>
            ))}
            <div className="mt-3 pt-3 border-t border-white/10 flex flex-col gap-2">
              <a
                href={`tel:${PHONE.replace(/\D/g, '')}`}
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white py-2.5 rounded-lg font-semibold transition-colors"
              >
                <Phone size={16} />
                {PHONE}
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-brand-red hover:bg-red-600 text-white py-2.5 rounded-lg font-semibold transition-colors"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
