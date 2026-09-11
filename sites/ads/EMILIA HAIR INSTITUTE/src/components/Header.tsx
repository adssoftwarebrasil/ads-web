import { useState, useEffect } from 'react';
import { Phone, Menu } from 'lucide-react';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Galeria', id: 'galeria' },
  { label: 'Avaliações', id: 'avaliacoes' },
  { label: 'Contato', id: 'contato' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-stone/95 shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <a href="#inicio" className="flex-shrink-0">
          <img
            src="https://storage.lucasmendes.dev/site-sp/emilia%20hair%20e%20care/img/logo-sem-fundo-letra-branca-com-dourado.webp"
            alt="Emilia Hair & Care"
            className="h-12 md:h-14 w-auto object-contain"
          />
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="font-sans text-sm font-500 tracking-wide uppercase transition-colors duration-300 hover:text-gold text-white"
            >
              {item.label}
            </button>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+556599811065"
            className="flex items-center gap-2 text-sm font-medium transition-colors duration-300 text-white hover:text-gold"
          >
            <Phone className="lucide lucide-phone" width={16} height={16} />
            <span>(65) 9 9981-1065</span>
          </a>
          <a
            href="http://wa.me/556599811065"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold hover:bg-gold-light text-white font-sans text-sm font-semibold px-6 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          >
            Agendar Horário
          </a>
        </div>
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="lg:hidden p-2 transition-colors text-white"
          aria-label="Menu"
        >
          <Menu className="lucide lucide-menu" width={24} height={24} />
        </button>
      </div>
      <div
        className={`lg:hidden bg-white overflow-hidden transition-all duration-400 ${
          menuOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="container-custom py-4 flex flex-col gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-left py-3 px-2 text-stone font-sans text-sm uppercase tracking-wide font-medium border-b border-cream last:border-0 hover:text-gold transition-colors"
            >
              {item.label}
            </button>
          ))}
          <a
            href="http://wa.me/556599811065"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 bg-gold text-white font-sans text-sm font-semibold px-6 py-3 rounded-full text-center transition-all duration-300 hover:bg-gold-light"
          >
            Agendar Horário
          </a>
        </div>
      </div>
    </header>
  );
}
