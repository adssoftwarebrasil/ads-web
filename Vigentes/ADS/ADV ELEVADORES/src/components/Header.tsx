import { useEffect, useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#produtos', label: 'Produtos' },
  { href: '#sobre', label: 'Sobre Nós' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled ? 'bg-[rgb(42,30,75)] shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#inicio" className="flex-shrink-0">
            <img
              src="https://storage.lucasmendes.dev/site-sp/advence-elevadores/img/logo-sem-fundo.webp"
              alt="Advence System Elevadores"
              className="h-12 w-auto transition-all duration-300 brightness-0 invert"
            />
          </a>
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold tracking-wide transition-colors duration-200 hover:text-[rgb(219,38,27)] text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-5">
            <a
              href="tel:6230927735"
              className="flex items-center gap-2 text-sm font-medium transition-colors duration-200 text-white"
            >
              <Phone width={15} height={15} className="lucide lucide-phone " />
              (62) 3092-7735
            </a>
            <a
              href="https://wa.me/5562998152991"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[rgb(219,38,27)] text-white px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-red-700 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Fale Conosco
            </a>
          </div>
          <button
            className="lg:hidden p-2 rounded-md transition-colors text-white"
            aria-label="Menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? (
              <X width={26} height={26} className="lucide lucide-x " />
            ) : (
              <Menu width={26} height={26} className="lucide lucide-menu " />
            )}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="lg:hidden bg-[rgb(42,30,75)] border-t border-white/10">
          <nav className="flex flex-col px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-white text-sm font-semibold tracking-wide py-2 hover:text-[rgb(219,38,27)] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/5562998152991"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 bg-[rgb(219,38,27)] text-white px-6 py-2.5 rounded-lg text-sm font-bold text-center hover:bg-red-700 transition-all duration-200"
            >
              Fale Conosco
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
