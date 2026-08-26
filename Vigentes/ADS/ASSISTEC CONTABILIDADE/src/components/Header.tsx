import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Especialidades', id: 'especialidades' },
  { label: 'Contato', id: 'contato' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-brand-burgundy-dark/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-3 group">
            <img
              src="https://storage.lucasmendes.dev/site-sp/assistec%20contabilidade/img/logo-sem-fundo.webp"
              alt="Assistec Contabilidade"
              className="h-14 w-auto object-contain brightness-0 invert"
            />
          </a>
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-white/90 hover:text-white text-sm font-medium tracking-wide transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-blue group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+5566999538963"
              className="flex items-center gap-2 text-white/80 hover:text-white text-sm transition-colors duration-200"
            >
              <Phone className="lucide lucide-phone" width={15} height={15} strokeWidth={2} />
              <span>(66) 9 9953-8963</span>
            </a>
            <a
              href="https://wa.me/5566999538963"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-blue hover:bg-brand-blue-light text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg hover:scale-105"
            >
              Fale Conosco
            </a>
          </div>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Menu"
          >
            {menuOpen ? (
              <X className="lucide lucide-x" width={24} height={24} strokeWidth={2} />
            ) : (
              <Menu className="lucide lucide-menu" width={24} height={24} strokeWidth={2} />
            )}
          </button>
        </div>
      </div>
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-brand-burgundy-dark border-t border-white/10 px-4 py-4 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="block w-full text-left text-white/90 hover:text-white hover:bg-white/10 px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-3 pb-1 border-t border-white/10">
            <a
              href="https://wa.me/5566999538963"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-brand-blue text-white font-semibold text-sm px-5 py-3 rounded-full transition-all duration-200"
            >
              Fale pelo WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
