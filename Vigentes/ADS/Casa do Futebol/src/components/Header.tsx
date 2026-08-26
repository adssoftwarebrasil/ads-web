import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Início', href: '#hero' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Avaliações', href: '#avaliacoes' },
  { label: 'Contato', href: '#contato' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  // Variável para controlar se o fundo do header deve ser branco
  const isWhiteBg = scrolled || menuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isWhiteBg ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#hero" onClick={(e) => { e.preventDefault(); handleNav('#hero'); }} className="flex items-center gap-3">
          {/* Dica: Se o seu logo atual for totalmente branco, ele pode sumir aqui. 
              Se isso acontecer, você pode precisar de uma versão com cor do logo. */}
          <img
            src="https://storage.lucasmendes.dev/site-sp/escolinha%20casa%20do%20futebol/img/logo-sem-fundo.webp"
            alt="Casa do Futebol"
            className="h-16 w-auto object-contain"
          />
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
              className={`text-sm font-medium transition-colors duration-200 relative group ${
                isWhiteBg ? 'text-[#363434] hover:text-[#236E45]' : 'text-white/90 hover:text-white'
              }`}
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[#236E45] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <a
            href="http://wa.me/556581172880"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#236E45] hover:bg-[#2C4D39] text-white text-sm font-semibold px-4 py-2 rounded-full transition-all duration-200 shadow-md hover:shadow-lg"
          >
            <Phone size={15} />
            (65) 9 8117-2880
          </a>
        </nav>

        <button
          className={`md:hidden p-2 transition-colors ${
            isWhiteBg ? 'text-[#363434]' : 'text-white'
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl">
          <div className="px-4 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                className="text-[#363434] hover:text-[#236E45] font-medium py-2 border-b border-gray-100 last:border-0 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="http://wa.me/556581172880"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#236E45] hover:bg-[#2C4D39] text-white font-semibold px-4 py-3 rounded-full mt-2 transition-colors"
            >
              <Phone size={16} />
              Fale Conosco
            </a>
          </div>
        </div>
      )}
    </header>
  );
}