import { useState, useEffect } from 'react';
import { Phone, Menu } from 'lucide-react';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-3 flex-shrink-0">
            <img
              src="https://storage.lucasmendes.dev/site-sp/prestserv-ambiental/img/logo-sem-fundo.webp"
              alt="Goias Eco Ambiental"
              className="h-12 w-auto object-contain"
            />
          </a>
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-accent-500 ${
                  scrolled ? 'text-gray-700' : 'text-white text-shadow-sm'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+556234991964"
              className={`flex items-center gap-2 text-sm font-medium transition-colors duration-200 ${
                scrolled ? 'text-gray-700' : 'text-white text-shadow-sm'
              }`}
            >
              <Phone width={16} height={16} className="lucide lucide-phone " />
              (62) 3099-1964
            </a>
            <a
              href="http://wa.me/5562994920239"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent-500 hover:bg-accent-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg hover:scale-105"
            >
              Fale Conosco
            </a>
          </div>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Menu"
          >
            <Menu width={24} height={24} className="lucide lucide-menu " />
          </button>
        </div>
      </div>
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-gray-100 shadow-xl">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 font-medium py-3 px-4 rounded-lg hover:bg-gray-50 hover:text-primary-500 transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-gray-100 flex flex-col gap-3 mt-2">
              <a href="tel:+556234991964" className="flex items-center gap-2 text-primary-500 font-medium text-sm px-4">
                <Phone width={16} height={16} className="lucide lucide-phone " />
                (62) 3099-1964
              </a>
              <a
                href="http://wa.me/5562994920239"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent-500 hover:bg-accent-600 text-white font-semibold py-3 px-6 rounded-full text-center transition-colors text-sm"
              >
                Fale Conosco no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
