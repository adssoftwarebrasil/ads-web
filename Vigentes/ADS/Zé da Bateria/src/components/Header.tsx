import { useEffect, useState } from 'react';
import { Menu } from 'lucide-react';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#vantagens', label: 'Vantagens' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          <a href="#inicio" className="flex items-center">
            <img
              src="https://storage.lucasmendes.dev/site-sp/ze%20da%20bateria/img/logo-sem-fundo.png"
              alt="Zé da Bateria Logo"
              className="h-12 sm:h-14 lg:h-16 w-auto object-contain"
            />
          </a>
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white hover:text-[rgb(233,155,29)] transition-colors duration-300 font-medium text-sm xl:text-base"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+556384458064"
              className="text-white hover:text-[rgb(233,155,29)] transition-colors duration-300 font-medium"
            >
              (63) 98445-8064
            </a>
            <a
              href="http://wa.me/556384458064"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[rgb(233,155,29)] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[rgb(213,135,9)] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              WhatsApp
            </a>
          </div>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden text-white p-2 hover:text-[rgb(233,155,29)] transition-colors duration-300"
            aria-label="Toggle menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </div>
      <div
        className={`lg:hidden fixed inset-0 bg-black/98 backdrop-blur-lg transition-all duration-300 ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        style={{ top: '80px' }}
      >
        <nav className="flex flex-col items-center justify-center h-full space-y-8 px-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white hover:text-[rgb(233,155,29)] transition-colors duration-300 font-medium text-2xl"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+556384458064"
            onClick={() => setMenuOpen(false)}
            className="text-white hover:text-[rgb(233,155,29)] transition-colors duration-300 font-medium text-xl"
          >
            (63) 98445-8064
          </a>
          <a
            href="http://wa.me/556384458064"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[rgb(233,155,29)] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[rgb(213,135,9)] transition-all duration-300 shadow-lg text-xl"
          >
            WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
