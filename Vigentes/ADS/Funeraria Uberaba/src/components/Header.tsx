import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Cores dinâmicas baseadas no scroll
  const textColor = scrolled ? 'text-[rgb(29,29,29)]' : 'text-[rgb(247,246,249)]';
  const headerBg = scrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#inicio" onClick={() => handleNavClick('#inicio')}>
          <img
            src="https://storage.lucasmendes.dev/site-sp/funeraria-uberaba/img/logo-sem-fundo.webp"
            alt="Funerária Uberaba"
            className={`h-12 w-auto transition-all duration-300 ${scrolled ? 'brightness-90' : ''}`}
            /* Nota: usei um filtro CSS (invert) caso sua logo seja branca por padrão. 
               Se a logo já for colorida, pode remover o 'brightness-0 invert' */
          />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`${textColor} text-sm font-medium tracking-wide hover:text-[rgb(65,150,229)] transition-colors duration-200`}
            >
              {link.label}
            </button>
          ))}
          <a
            href="http://wa.me/553498615889"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 bg-[rgb(249,240,69)] text-[rgb(29,29,29)] text-sm font-bold px-4 py-2 rounded-full hover:bg-[rgb(65,150,229)] hover:text-white transition-all duration-200 shadow-sm`}
          >
            <Phone size={15} />
            Fale Conosco
          </a>
        </nav>

        {/* Botão Hambúrguer */}
        <button
          className={`md:hidden ${textColor}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <div className={`md:hidden border-t border-black/5 animate-in slide-in-from-top duration-300 ${scrolled ? 'bg-white' : 'bg-[rgb(29,29,29)]'}`}>
          <nav className="flex flex-col px-4 py-4 gap-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`text-left text-base font-medium transition-colors ${
                  scrolled ? 'text-[rgb(29,29,29)]' : 'text-white'
                } hover:text-[rgb(65,150,229)]`}
              >
                {link.label}
              </button>
            ))}
            <a
              href="http://wa.me/553498615889"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[rgb(249,240,69)] text-[rgb(29,29,29)] font-bold px-4 py-2 rounded-full w-fit"
            >
              <Phone size={15} />
              Fale Conosco
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}