import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Avaliações', href: '#avaliacoes' },
  { label: 'Localização', href: '#localizacao' },
  { label: 'Contato', href: '#contato' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
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
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? 'rgba(22, 17, 21, 0.97)'
          : 'linear-gradient(180deg, rgba(22,17,21,0.85) 0%, rgba(22,17,21,0.0) 100%)',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
        boxShadow: scrolled ? '0 2px 24px rgba(0,0,0,0.4)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button onClick={() => handleNav('#inicio')} className="flex items-center gap-2 focus:outline-none">
            <img
              src="https://storage.lucasmendes.dev/site-sp/so%20embreagens/img/logo-sem-fundo.webp"
              alt="Só Embreagens"
              className="h-10 md:h-14 w-auto object-contain"
            />
          </button>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-sm font-medium transition-colors duration-200"
                style={{ color: 'rgb(210, 210, 208)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'rgb(234, 34, 37)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgb(210, 210, 208)')}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <a
            href="tel:5566996595500"
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-105"
            style={{
              background: 'rgb(234, 34, 37)',
              color: '#fff',
            }}
          >
            <Phone size={15} />
            <span>(66) 9 9659-5500</span>
          </a>

          <button
            className="md:hidden p-2 rounded-lg focus:outline-none"
            style={{ color: 'rgb(210, 210, 208)' }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          className="md:hidden px-4 pb-6 pt-2 flex flex-col gap-4"
          style={{ background: 'rgba(22, 17, 21, 0.98)' }}
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-left text-base font-medium py-2 border-b transition-colors duration-200"
              style={{
                color: 'rgb(210, 210, 208)',
                borderColor: 'rgba(153,151,150,0.15)',
              }}
            >
              {link.label}
            </button>
          ))}
          <a
            href="tel:5566996595500"
            className="flex items-center gap-2 px-4 py-3 rounded-full text-sm font-semibold mt-2 justify-center"
            style={{ background: 'rgb(234, 34, 37)', color: '#fff' }}
          >
            <Phone size={15} />
            (66) 9 9659-5500
          </a>
        </div>
      )}
    </header>
  );
}
