import { useEffect, useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#sobre', label: 'Sobre Nós' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-pr-dark/95 backdrop-blur shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#inicio" className="flex-shrink-0">
            <img
              src="https://storage.lucasmendes.dev/site-sp/pr-engenharia/img/logo-letra-bege-sem-fundo.webp"
              alt="PR Engenharia e Arquitetura"
              className="h-12 w-auto object-contain transition-all duration-300"
            />
          </a>
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium tracking-wide transition-colors duration-200 text-pr-cream hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+556284826969"
              className="flex items-center gap-2 text-sm font-medium transition-colors duration-200 text-pr-cream"
            >
              <Phone
                width={15}
                height={15}
                strokeWidth={2}
                className="lucide lucide-phone "
              />
              (62) 9 8482-6969
            </a>
            <a
              href="http://wa.me/556284826969"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs px-5 py-2.5"
            >
              Fale Conosco
            </a>
          </div>
          <button
            className="lg:hidden p-2 transition-colors text-white"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <X width={22} height={22} strokeWidth={2} className="lucide lucide-x " />
            ) : (
              <Menu width={22} height={22} strokeWidth={2} className="lucide lucide-menu " />
            )}
          </button>
        </div>
      </div>
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-white border-t border-pr-taupe ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col px-4 py-4 gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-pr-dark text-sm font-medium py-3 border-b border-pr-cream hover:text-pr-muted transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="http://wa.me/556284826969"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-4 justify-center"
          >
            Fale pelo WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
