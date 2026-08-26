import { useEffect, useState } from 'react';
import { Phone, MapPin, Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#produtos', label: 'Produtos' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#avaliacoes', label: 'Avaliações' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-2 shrink-0">
            <img
              src="https://storage.lucasmendes.dev/site-sp/batuta-ferragens/img/logo-sem-fundo.webp"
              alt="Batuta Agroshop"
              className="h-10 sm:h-16 w-auto object-contain"
            />
          </a>
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-cream/90 hover:text-brand text-sm font-medium transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:4432252211"
              className="flex items-center gap-2 text-cream/90 hover:text-brand transition-colors text-sm font-medium"
            >
              <Phone width={16} height={16} className="lucide lucide-phone text-brand" />
              (44) 3225-2211
            </a>
            <a
              href="#contato"
              className="bg-brand hover:bg-brand-light text-navy font-bold text-sm px-5 py-2.5 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Fale Conosco
            </a>
          </div>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden text-cream p-2 rounded-lg hover:bg-navy-light transition-colors"
            aria-label="Menu"
          >
            {open ? (
              <X width={24} height={24} className="lucide lucide-x " />
            ) : (
              <Menu width={24} height={24} className="lucide lucide-menu " />
            )}
          </button>
        </div>
      </div>
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-navy border-t border-white/10 px-4 py-4 flex flex-col gap-1">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-cream/90 hover:text-brand py-3 px-3 rounded-lg font-medium transition-colors border-b border-white/5 last:border-0"
            >
              {l.label}
            </a>
          ))}
          <div className="pt-3 flex flex-col gap-2">
            <a href="tel:4432252211" className="flex items-center gap-2 text-cream/90 py-2 px-3">
              <Phone width={16} height={16} className="lucide lucide-phone text-brand" />
              (44) 3225-2211
            </a>
            <a
              href="https://maps.google.com/?q=Av.+Brasil,+7351,+Zona+05,+Maringá+PR"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-cream/80 text-sm py-2 px-3"
            >
              <MapPin width={16} height={16} className="lucide lucide-map-pin text-brand" />
              Av. Brasil, 7351 - Zona 05, Maringá
            </a>
            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="bg-brand text-navy font-bold text-center py-3 px-5 rounded-lg mt-1"
            >
              Fale Conosco
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
