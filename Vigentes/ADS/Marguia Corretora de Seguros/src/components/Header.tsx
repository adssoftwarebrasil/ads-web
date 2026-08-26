import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Início', href: '#hero' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[rgb(52,82,108)] shadow-2xl py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#hero" onClick={() => handleNav('#hero')} className="flex items-center gap-2">
            <img
              src="https://storage.lucasmendes.dev/site-sp/marguia%20corretora%20de%20seguros/img/logo-sem-fundo.webp"
              alt="Marguia Corretora de Seguros"
              className="h-10 md:h-12 w-auto brightness-0 invert"
            />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-[rgb(252,255,254)] text-sm font-medium tracking-wide hover:text-[rgb(77,175,215)] transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[rgb(77,175,215)] transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+556599183725"
              className="flex items-center gap-2 text-[rgb(252,255,254)] text-sm font-medium hover:text-[rgb(77,175,215)] transition-colors"
            >
              <Phone size={16} />
              (65) 9 9918-3725
            </a>
            <a
              href="http://wa.me/556599183725"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[rgb(77,175,215)] hover:bg-[rgb(61,119,189)] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Fale Conosco
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[rgb(252,255,254)] p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[rgb(52,82,108)] border-t border-white/10 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="block w-full text-left text-[rgb(252,255,254)] text-base font-medium py-3 px-3 rounded-lg hover:bg-white/10 transition-colors"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <a
              href="tel:+556599183725"
              className="flex items-center gap-2 text-[rgb(252,255,254)] text-sm py-2 px-3"
            >
              <Phone size={16} />
              (65) 9 9918-3725
            </a>
            <a
              href="http://wa.me/556599183725"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[rgb(77,175,215)] text-white text-sm font-semibold px-5 py-3 rounded-full text-center transition-all duration-300"
            >
              Fale pelo WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
