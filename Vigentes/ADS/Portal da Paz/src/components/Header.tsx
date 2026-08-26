import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Frota', href: '#frota' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
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
          ? 'bg-[rgb(2,12,4)] shadow-2xl py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a
          href="#inicio"
          onClick={(e) => { e.preventDefault(); handleNav('#inicio'); }}
          className="flex items-center gap-3"
        >
          <img
            src="https://storage.lucasmendes.dev/site-sp/portal%20da%20paz/img/logo-sem-fundo.webp"
            alt="Funerária Portal da Paz"
            className="h-14 w-auto object-contain"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-[rgb(202,183,144)] hover:text-white text-sm font-medium tracking-wide transition-colors duration-200 uppercase"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <a
          href="tel:+559181493608"
          className="hidden lg:flex items-center gap-2 bg-[rgb(55,104,68)] hover:bg-[rgb(23,56,32)] text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <Phone size={16} />
          <span>(91) 98149-3608</span>
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-[rgb(202,183,144)] p-2"
          aria-label="Abrir menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <div
        className={`lg:hidden bg-[rgb(2,12,4)] border-t border-[rgb(23,56,32)] overflow-hidden transition-all duration-400 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-[rgb(202,183,144)] hover:text-white text-left text-base font-medium py-2 border-b border-[rgb(23,56,32)] last:border-0 transition-colors"
            >
              {link.label}
            </button>
          ))}
          <a
            href="tel:+559181493608"
            className="flex items-center gap-2 bg-[rgb(55,104,68)] text-white px-5 py-3 rounded-full text-sm font-semibold justify-center mt-2"
          >
            <Phone size={16} />
            <span>(91) 98149-3608</span>
          </a>
        </div>
      </div>
    </header>
  );
}
