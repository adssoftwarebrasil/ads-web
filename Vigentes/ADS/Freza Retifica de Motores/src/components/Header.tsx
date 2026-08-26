import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Início', target: 'inicio' },
  { label: 'Serviços', target: 'servicos' },
  { label: 'Sobre', target: 'sobre' },
  { label: 'Galeria', target: 'galeria' },
  { label: 'Contato', target: 'contato' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-brand-dark/95 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-3">
            <img
              src="https://storage.lucasmendes.dev/site-sp/freza%20retifica%20de%20motores/img/logo-sem-fundo.webp"
              alt="Freza Retifica de Motores"
              className="h-12 w-auto object-contain brightness-0 invert"
            />
          </a>
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.target}
                onClick={() => scrollTo(item.target)}
                className="text-brand-gray hover:text-brand-red text-sm font-medium tracking-wide transition-colors duration-200 uppercase"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+5566996524291"
              className="flex items-center gap-2 text-brand-gray hover:text-white transition-colors text-sm font-medium"
            >
              <Phone className="lucide lucide-phone text-brand-red" width={16} height={16} />
              (66) 99652-4291
            </a>
            <a
              href="http://wa.me/5566996524291"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-red hover:bg-brand-red-dark text-white px-5 py-2 rounded-full text-sm font-semibold tracking-wide transition-all duration-200 hover:shadow-lg hover:shadow-brand-red/30"
            >
              Fale Conosco
            </a>
          </div>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden text-brand-gray hover:text-white transition-colors p-2"
            aria-label="Menu"
          >
            {menuOpen ? (
              <X className="lucide lucide-x" width={26} height={26} />
            ) : (
              <Menu className="lucide lucide-menu" width={26} height={26} />
            )}
          </button>
        </div>

        {menuOpen && (
          <nav className="lg:hidden mt-4 bg-brand-dark/95 backdrop-blur-md rounded-2xl p-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.target}
                onClick={() => scrollTo(item.target)}
                className="text-left text-brand-gray hover:text-brand-red text-sm font-medium tracking-wide transition-colors duration-200 uppercase py-2 px-2"
              >
                {item.label}
              </button>
            ))}
            <a
              href="http://wa.me/5566996524291"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 bg-brand-red hover:bg-brand-red-dark text-white px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-200 text-center"
            >
              Fale Conosco
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
