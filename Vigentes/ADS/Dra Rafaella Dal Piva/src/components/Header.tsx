import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Início', href: '#hero' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Resultados', href: '#resultados' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#hero" onClick={() => handleNavClick('#hero')} className="flex items-center gap-2">
            <img
              src="https://storage.lucasmendes.dev/site-sp/dra%20rafaella%20dal%20piva/img/logo-sem-fundo.webp"
              alt="Dra. Rafaella Dal Piva"
              className={`h-12 w-auto object-contain transition-all duration-300 ${
                !scrolled ? 'brightness-0 invert' : ''
              }`}
            />
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`text-sm font-medium transition-colors duration-200 hover:text-[#a4376e] ${
                  scrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <a
            href="http://wa.me/556592693908"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-2 bg-[#a4376e] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#8e2d5e] transition-all duration-200 shadow-md hover:shadow-lg"
          >
            <Phone size={16} />
            Agendar Consulta
          </a>

          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-gray-700' : 'text-white'
            }`}
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
        <div className="bg-white border-t border-gray-100 shadow-xl">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left px-4 py-3 text-gray-700 font-medium hover:text-[#a4376e] hover:bg-pink-50 rounded-lg transition-colors"
              >
                {link.label}
              </button>
            ))}
            <a
              href="http://wa.me/556592693908"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 bg-[#a4376e] text-white px-5 py-3 rounded-full font-semibold hover:bg-[#8e2d5e] transition-colors"
            >
              <Phone size={16} />
              Agendar Consulta
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}