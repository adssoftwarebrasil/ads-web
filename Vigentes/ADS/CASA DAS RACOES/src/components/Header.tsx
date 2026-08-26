import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { whatsappLink } from '../lib/tracking';

const navLinks = [
  { label: 'Início', href: '#hero' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Unidades', href: '#unidades' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Promoções', href: '#promocoes' },
  
  { label: 'Contato', href: '#contato' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mobileCta = whatsappLink('header_mobile');

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <a href="#hero" onClick={() => handleNav('#hero')} className="flex items-center gap-2">
          <img
            src="https://storage.lucasmendes.dev/site-sp/casa%20das%20racoes/atualizacao/logo-nova-02-sem-fundo.webp"
            alt="Casa das Rações"
            className="h-16 w-auto object-contain"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                scrolled
                  ? 'text-gray-700 hover:text-green-700 hover:bg-green-50'
                  : 'text-white hover:text-green-200 hover:bg-white/10'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+5566999836995"
            className={`flex items-center gap-2 text-sm font-medium transition-colors ${
              scrolled ? 'text-gray-600 hover:text-green-700' : 'text-white/90 hover:text-white'
            }`}
          >
            <Phone size={15} />
            (66) 9 9983-6995
          </a>
          <a
            {...whatsappLink('header_desktop')}
            className="bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors shadow-sm"
          >
            Fale Conosco
          </a>
        </div>

        <button
          className={`lg:hidden p-2 rounded-lg transition-colors ${
            scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
          }`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-left px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-lg font-medium text-sm transition-colors"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2 pb-1 border-t border-gray-100 mt-1">
              <a
                {...mobileCta}
                onClick={() => {
                  mobileCta.onClick();
                  // Fecha o menu só depois que o navegador processou o link.
                  setTimeout(() => setMobileOpen(false), 150);
                }}
                className="block text-center w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition-colors"
              >
                Fale Conosco no WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
