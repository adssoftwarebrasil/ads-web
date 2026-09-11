import { useEffect, useState } from 'react';
import { Phone, Flame, Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#produtos', label: 'Produtos' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#como-pedir', label: 'Como Pedir' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-brand-dark/95 backdrop-blur-md py-3 shadow-lg shadow-black/30' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-3">
            <img
              src="https://storage.lucasmendes.dev/site-sp/gas%20forte/img/logo-sem-fundo.webp"
              alt="Gás Forte"
              className="h-14 w-auto"
            />
          </a>
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-brand-light/80 hover:text-brand-orange transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:6235738001"
              className="flex items-center gap-2 text-sm font-medium text-brand-light/70 hover:text-brand-amber transition-colors"
            >
              <Phone width={14} height={14} className="lucide lucide-phone" />
              (62) 3573-8001
            </a>
            <a
              href="http://wa.me/556282381515"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-brand-orange hover:bg-brand-orange2 text-white text-sm font-semibold px-4 py-2 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-brand-orange/30"
            >
              <Flame width={14} height={14} className="lucide lucide-flame" />
              Pedir Agora
            </a>
          </div>
          <button
            className="lg:hidden p-2 text-brand-light"
            aria-label="Menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? (
              <X width={24} height={24} className="lucide lucide-x" />
            ) : (
              <Menu width={24} height={24} className="lucide lucide-menu" />
            )}
          </button>
        </div>

        {menuOpen && (
          <nav className="lg:hidden mt-4 flex flex-col gap-1 bg-brand-navy border border-white/5 rounded-2xl p-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-brand-light/80 hover:text-brand-orange transition-colors duration-200 py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="http://wa.me/556282381515"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange2 text-white text-sm font-semibold px-4 py-2.5 rounded-full transition-all duration-200"
            >
              <Flame width={14} height={14} className="lucide lucide-flame" />
              Pedir Agora
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
