import { useEffect, useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#produtos', label: 'Produtos' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#inicio" className="flex items-center gap-3">
            <img
              src="https://storage.lucasmendes.dev/site-sp/kalmia%20farmacia/img/logo-sem-fundo.webp"
              alt="Kalmia Farmácia de Manipulação"
              className="h-10 md:h-16 w-auto object-contain"
            />
          </a>
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-primary ${
                  scrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+551633728889"
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                scrolled ? 'text-gray-600' : 'text-white/90'
              }`}
            >
              <Phone size={15} className="lucide lucide-phone" />
              (16) 3372-8889
            </a>
            <a
              href="http://wa.me/5516991594153"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-primary-dark transition-colors duration-200 shadow-md hover:shadow-primary/30"
            >
              Fale no WhatsApp
            </a>
          </div>
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-gray-700' : 'text-white'}`}
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={24} className="lucide lucide-x" /> : <Menu size={24} className="lucide lucide-menu" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-gray-700 hover:text-primary py-2.5 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+551633728889"
              className="flex items-center gap-2 text-sm font-medium text-gray-600 py-2.5"
            >
              <Phone size={15} className="lucide lucide-phone" />
              (16) 3372-8889
            </a>
            <a
              href="http://wa.me/5516991594153"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white text-sm font-semibold px-5 py-3 rounded-full text-center hover:bg-primary-dark transition-colors duration-200 shadow-md mt-2"
            >
              Fale no WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
