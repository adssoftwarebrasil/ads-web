import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#hero' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Produtos', href: '#produtos' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Unidades', href: '#unidades' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg shadow-gray-200' : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#hero" onClick={() => handleNavClick('#hero')} className="flex items-center gap-3 flex-shrink-0">
            <img
              src="https://storage.lucasmendes.dev/site-sp/casa%20das%20tintas/img/logo-sem-fundo.webp"
              alt="Casa das Tintas"
              className="h-10 lg:h-14 w-auto object-contain"
            />
          </a>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-gray-800 hover:text-[rgb(17,157,219)] text-sm font-medium transition-colors duration-200 whitespace-nowrap"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+5566997173455"
              className="flex items-center gap-2 text-gray-800 hover:text-[rgb(17,157,219)] text-sm font-medium transition-colors"
            >
              <Phone size={16} />
              <span>(66) 9 9717-3455</span>
            </a>
            <a
              href="http://wa.me/556697173455"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[rgb(108,189,81)] hover:bg-[rgb(90,165,65)] text-white px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-105 shadow-md"
            >
              Fale Conosco
            </a>
          </div>

          <button
            className="lg:hidden text-gray-800 p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-gray-200 px-4 py-4 flex flex-col gap-1 shadow-lg">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-gray-800 hover:text-[rgb(17,157,219)] py-3 text-left text-base font-medium border-b border-gray-100 last:border-0 transition-colors"
            >
              {link.label}
            </button>
          ))}
          <a
            href="http://wa.me/556697173455"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 bg-[rgb(108,189,81)] text-white text-center py-3 rounded-full font-semibold"
          >
            Fale Conosco no WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}