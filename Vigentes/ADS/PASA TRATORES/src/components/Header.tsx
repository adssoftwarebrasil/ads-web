import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, Clock } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Início', href: '#hero' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Contato', href: '#contato' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
    <>
      {/* Top bar */}
      <div className="hidden md:block bg-brand-dark text-white text-sm">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <a href="tel:+556699586377" className="flex items-center gap-2 hover:text-brand-red transition-colors">
              <Phone size={13} />
              <span>(66) 9 9958-6377</span>
            </a>
            <a href="mailto:PASATRATORPC@GMAIL.COM" className="flex items-center gap-2 hover:text-brand-red transition-colors">
              <Mail size={13} />
              <span>pasatratorpc@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <Clock size={13} />
            <span>Seg–Sex: 07:00–11:30 | 13:00–17:30</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white shadow-lg border-b border-gray-100'
            : 'bg-white shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" onClick={(e) => { e.preventDefault(); handleNav('#hero'); }} className="flex items-center gap-3">
            <img
              src="https://storage.lucasmendes.dev/site-sp/pasa-tratores/img/logo-removebg-preview.webp"
              alt="Pasa Tratores Peças"
              className="h-14 w-auto object-contain"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                className="text-sm font-semibold text-brand-dark hover:text-brand-red transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-brand-red transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href="http://wa.me/556699586377"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 bg-brand-red text-white text-sm font-bold px-5 py-2.5 rounded-full hover:bg-red-700 transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
            >
              Falar no WhatsApp
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-brand-dark hover:bg-gray-100 transition-colors"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile drawer */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 bg-white border-t border-gray-100 ${
            menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-6 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                className="text-base font-semibold text-brand-dark hover:text-brand-red py-2.5 border-b border-gray-50 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="http://wa.me/556699586377"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 bg-brand-red text-white text-base font-bold px-5 py-3 rounded-full text-center hover:bg-red-700 transition-colors"
            >
              Falar no WhatsApp
            </a>
            <div className="mt-4 pb-2 flex flex-col gap-2 text-sm text-gray-500">
              <a href="tel:+556699586377" className="flex items-center gap-2"><Phone size={14} /> (66) 9 9958-6377</a>
              <span className="flex items-center gap-2"><Clock size={14} /> 07:00–11:30 | 13:00–17:30</span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
