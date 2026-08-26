import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Avaliações', href: '#avaliacoes' },
  { label: 'Contato', href: '#contato' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-lg py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#inicio" onClick={() => handleNavClick('#inicio')} className="flex items-center gap-2">
          <img
            src="https://storage.lucasmendes.dev/site-sp/fergrafe/img/logo-sem-fundo.webp"
            alt="Fergraf Gráfica e Editora"
            // Adicionado "brightness-0 invert" quando scrolled for falso
            className={`transition-all duration-300 ${scrolled ? 'h-14' : 'h-16 brightness-0 invert'}`}
          />
        </a>

        <nav className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`text-sm font-medium transition-colors duration-200 hover:text-[rgb(0,180,215)] ${
                scrolled ? 'text-[rgb(53,80,155)]' : 'text-white drop-shadow'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+557988448494"
            className="flex items-center gap-2 text-sm font-semibold text-[rgb(53,80,155)] bg-[rgb(255,240,1)] px-4 py-2 rounded-full hover:bg-yellow-300 transition-colors duration-200"
          >
            <Phone size={15} />
            (79) 9 8844-8494
          </a>
          <a
            href="http://wa.me/557988448494"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-white bg-[rgb(0,180,215)] px-5 py-2 rounded-full hover:bg-[rgb(53,80,155)] transition-colors duration-200"
          >
            Solicitar Orçamento
          </a>
        </div>

        <button
          className={`lg:hidden p-2 rounded-md transition-colors ${
            scrolled ? 'text-[rgb(53,80,155)]' : 'text-white'
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl">
          <div className="flex flex-col px-4 py-4 gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left text-[rgb(53,80,155)] font-medium py-3 px-2 border-b border-gray-50 hover:text-[rgb(0,180,215)] transition-colors"
              >
                {link.label}
              </button>
            ))}
            <a
              href="http://wa.me/557988448494"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 text-center font-semibold text-white bg-[rgb(0,180,215)] px-5 py-3 rounded-full hover:bg-[rgb(53,80,155)] transition-colors"
            >
              Solicitar Orçamento
            </a>
          </div>
        </div>
      )}
    </header>
  );
}