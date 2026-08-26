import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Estrutura', href: '#estrutura' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
];

const LOGO_URL =
  'https://storage.lucasmendes.dev/site-sp/advice%2Fimg%2Flogo-sem-fundo.webp';

export default function Header({
  onWhatsAppClick,
}: {
  onWhatsAppClick: () => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-black/10 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#inicio" className="flex-shrink-0">
            <img
              src={LOGO_URL}
              alt="Advice Medicina e Engenharia do Trabalho"
              className={`h-12 w-auto transition-all duration-300 ${
                scrolled ? '' : 'brightness-0 invert'
              }`}
            />
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`text-sm font-medium transition-colors duration-200 hover:text-brand-500 ${
                  scrolled ? 'text-neutral-700' : 'text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+553432367444"
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                scrolled ? 'text-neutral-600' : 'text-white/90'
              }`}
            >
              <Phone className="w-4 h-4" />
              (34) 3236-7444
            </a>
            <button
              onClick={onWhatsAppClick}
              className="bg-brand-500 hover:bg-brand-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-brand-500/25"
            >
              Fale Conosco
            </button>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-neutral-700' : 'text-white'
            }`}
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white shadow-xl border-t px-4 py-6 space-y-4">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="block w-full text-left text-neutral-700 hover:text-brand-500 font-medium py-2 transition-colors"
            >
              {link.label}
            </button>
          ))}
          <hr className="border-neutral-200" />
          <a
            href="tel:+553432367444"
            className="flex items-center gap-2 text-neutral-600 font-medium py-2"
          >
            <Phone className="w-4 h-4" />
            (34) 3236-7444
          </a>
          <button
            onClick={() => {
              setMobileOpen(false);
              onWhatsAppClick();
            }}
            className="w-full bg-brand-500 hover:bg-brand-600 text-white px-5 py-3 rounded-lg font-semibold transition-all"
          >
            Fale Conosco
          </button>
        </div>
      </div>
    </header>
  );
}
