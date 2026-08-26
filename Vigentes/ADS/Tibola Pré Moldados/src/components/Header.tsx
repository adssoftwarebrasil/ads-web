import { useEffect, useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#produtos', label: 'Produtos' },
  { href: '#sobre', label: 'Sobre Nós' },
  { href: '#diferenciais', label: 'Diferenciais' },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-3 flex-shrink-0">
            <img
              src="https://storage.lucasmendes.dev/site-sp/tibola%20pre%20moldados/img/logo.webp"
              alt="Tibola Pré Moldados"
              className="h-12 w-auto object-contain"
            />
          </a>
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:text-brand-rust ${
                  scrolled ? 'text-brand-gray2' : 'text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+5566996428111"
              className="flex items-center gap-2 text-sm font-medium text-brand-rust"
            >
              <Phone className="lucide lucide-phone" width={16} height={16} />
              <span>(66) 9 9642-8111</span>
            </a>
            <a
              href="http://wa.me/5566996428111"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:shadow-md active:scale-95"
              style={{ backgroundColor: 'rgb(120, 53, 35)' }}
            >
              Solicitar Orçamento
            </a>
          </div>
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-brand-dark' : 'text-white'}`}
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <X width={24} height={24} className="lucide lucide-x" />
            ) : (
              <Menu width={24} height={24} className="lucide lucide-menu" />
            )}
          </button>
        </div>
      </div>
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white shadow-xl border-t border-brand-light mx-0 px-4 py-4">
          <nav className="flex flex-col gap-1 mb-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-lg text-sm font-medium text-brand-gray2 hover:bg-brand-light hover:text-brand-rust transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="http://wa.me/5566996428111"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-lg text-sm font-semibold text-white transition-all"
            style={{ backgroundColor: 'rgb(120, 53, 35)' }}
          >
            <Phone width={16} height={16} className="lucide lucide-phone" />
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </header>
  );
}
