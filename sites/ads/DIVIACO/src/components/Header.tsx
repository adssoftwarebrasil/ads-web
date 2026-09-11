import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Início', href: '#home' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
];

const LOGO_URL =
  'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=DIVIACO%2FLogo_-_Diviaco-01.png&version_id=null';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
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
        scrolled ? 'bg-black shadow-2xl' : 'bg-black/90 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNav('#home'); }}
            className="flex items-center"
          >
            <img
              src={LOGO_URL}
              alt="Diviaco"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                className="text-white/80 hover:text-[#E76012] text-sm font-medium tracking-wide transition-colors duration-200 uppercase"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/558432239388"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#E76012] hover:bg-[#c9520f] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 hover:scale-105 shadow-lg shadow-orange-900/30"
            >
              <Phone size={14} />
              Fale Conosco
            </a>
          </nav>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-black border-t border-white/10">
          <div className="px-4 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                className="text-white/80 hover:text-[#E76012] text-base font-medium py-3 px-4 rounded-xl hover:bg-white/5 transition-all duration-200 uppercase tracking-wide"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/558432239388"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 bg-[#E76012] text-white text-sm font-semibold px-5 py-3 rounded-full transition-all duration-200"
            >
              <Phone size={14} />
              Fale Conosco no WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
