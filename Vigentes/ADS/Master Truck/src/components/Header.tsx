import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Avaliações', href: '#avaliacoes' },
  { label: 'Contato', href: '#contato' },
];

const WHATSAPP_URL = 'http://wa.me/556596363222';
const LOGO_URL = 'https://storage.lucasmendes.dev/site-sp/master%20diagnosticos%20(master%20truck)/img/logo-sem-fundo.webp';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#010101] shadow-lg shadow-black/40' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2 flex-shrink-0">
            <img
              src={LOGO_URL}
              alt="Master Truck Mecatrônica"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </a>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-[#FFFFFD]/80 hover:text-[#F07013] text-sm font-medium tracking-wide transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:+556596363222`}
              className="flex items-center gap-2 text-[#FFFFFD]/80 hover:text-[#F07013] text-sm transition-colors duration-200"
            >
              <Phone size={14} />
              <span>(65) 9 9636-3222</span>
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#F07013] hover:bg-[#d4600f] text-[#FFFFFD] text-sm font-semibold px-5 py-2 rounded transition-colors duration-200"
            >
              Falar no WhatsApp
            </a>
          </div>

          <button
            className="md:hidden text-[#FFFFFD] p-2"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden bg-[#010101] border-t border-white/10 overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="px-4 py-4 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-left text-[#FFFFFD]/80 hover:text-[#F07013] py-3 text-base font-medium border-b border-white/5 transition-colors duration-200"
            >
              {link.label}
            </button>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 bg-[#F07013] hover:bg-[#d4600f] text-[#FFFFFD] text-sm font-semibold px-5 py-3 rounded text-center transition-colors duration-200"
          >
            Falar no WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
