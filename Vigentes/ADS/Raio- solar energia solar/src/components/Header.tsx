import { useEffect, useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#hero', label: 'Início' },
  { href: '#services', label: 'Serviços' },
  { href: '#how-it-works', label: 'Como Funciona' },
  { href: '#gallery', label: 'Galeria' },
  { href: '#testimonials', label: 'Depoimentos' },
  { href: '#contact', label: 'Contato' },
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
        scrolled ? 'bg-brand-blue shadow-lg py-3' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#hero" className="flex-shrink-0">
            <img
              src="https://storage.lucasmendes.dev/site-sp/raio-solar/img/logo-letra-branca-sem-fundo.webp"
              alt="Raio-Solar Energia Solar"
              className="h-14 w-auto"
            />
          </a>
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/90 hover:text-brand-yellow transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="tel:+5575988443984"
              className="hidden sm:flex items-center gap-2 bg-brand-yellow text-brand-blue font-semibold text-sm px-4 py-2 rounded-full hover:bg-brand-yellow-light transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <Phone width={15} height={15} className="lucide lucide-phone " />
              (75) 9 8844-3984
            </a>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="lg:hidden p-2 rounded-md text-white hover:text-brand-yellow transition-colors"
              aria-label="Menu"
            >
              {menuOpen ? <X width={24} height={24} /> : <Menu width={24} height={24} />}
            </button>
          </div>
        </div>
      </div>
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-brand-blue border-t border-white/10 px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white/90 hover:text-brand-yellow font-medium py-2.5 px-3 rounded-md hover:bg-white/5 transition-all duration-200 text-sm"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+5575988443984"
            className="mt-2 flex items-center justify-center gap-2 bg-brand-yellow text-brand-blue font-semibold text-sm px-4 py-2.5 rounded-full"
          >
            <Phone width={15} height={15} className="lucide lucide-phone " />
            (75) 9 8844-3984
          </a>
        </div>
      </div>
    </header>
  );
}
