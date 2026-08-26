import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#hero', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#cardapio', label: 'Cardápio' },
  { href: '#avaliacoes', label: 'Avaliações' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-brand-black/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-3 group">
            <img
              src="https://storage.lucasmendes.dev/site-sp/pizza%20na%20pedra/img/logo-sem-fundo.webp"
              alt="Pizza na Pedra"
              className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white text-sm font-medium tracking-wide hover:text-brand-cream transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-cream group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:6232785151"
              className="flex items-center gap-2 text-brand-cream text-sm font-medium hover:text-white transition-colors"
            >
              <Phone width={16} height={16} />
              (62) 3278-5151
            </a>
            <a
              href="http://wa.me/556292358068"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-red hover:bg-brand-red-light text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-red-900/40 hover:-translate-y-0.5"
            >
              Pedir Agora
            </a>
          </div>
          <button
            className="md:hidden text-white p-2"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <X width={24} height={24} />
            ) : (
              <Menu width={24} height={24} />
            )}
          </button>
        </div>
      </div>
      <div
        className={`md:hidden bg-brand-black border-t border-white/10 overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-white text-base font-medium py-2 border-b border-white/10 hover:text-brand-cream transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="http://wa.me/556292358068"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-red text-white text-center font-semibold px-5 py-3 rounded-full mt-2 hover:bg-brand-red-light transition-colors"
          >
            Pedir pelo WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
