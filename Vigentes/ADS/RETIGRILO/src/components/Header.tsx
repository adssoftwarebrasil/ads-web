import { useEffect, useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#sobre', label: 'Sobre Nós' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
];

const WA_LINK = 'https://wa.me/5566999585577?text=Olá! Vim pelo site e gostaria de um orçamento.';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-brand-dark/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#inicio" className="flex items-center gap-3">
            <img
              src="https://storage.lucasmendes.dev/site-sp/retigrilo/img/logo-sem-fundo.webp"
              alt="Retigrilo Retifica de Motores"
              className="h-10 md:h-14 w-auto object-contain"
            />
          </a>
          <nav className="hidden xl:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-brand-white/90 hover:text-primary transition-colors duration-200 text-sm font-medium tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-5">
            <div className="flex flex-col items-end border-r border-white/10 pr-5">
              <a
                href="tel:+5566999585577"
                className="flex items-center gap-2 text-brand-white/70 hover:text-primary transition-colors duration-200 text-[13px] leading-tight"
              >
                <Phone className="lucide lucide-phone opacity-100" width={12} height={12} />
                <span>(66) 9 9958-5577</span>
              </a>
              <a
                href="tel:+5566996325577"
                className="flex items-center gap-2 text-brand-white/70 hover:text-primary transition-colors duration-200 text-[13px] leading-tight"
              >
                <Phone className="lucide lucide-phone opacity-0" width={12} height={12} />
                <span>(66) 9 9632-5577</span>
              </a>
            </div>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary-dark text-brand-dark font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
            >
              Solicitar Orçamento
            </a>
          </div>
          <button
            className="md:hidden text-brand-white p-2"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? (
              <X className="lucide lucide-x" width={24} height={24} />
            ) : (
              <Menu className="lucide lucide-menu" width={24} height={24} />
            )}
          </button>
        </div>
      </div>
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden bg-brand-dark ${
          menuOpen ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="border-t border-white/10 px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-brand-white/90 hover:text-primary transition-colors duration-200 py-3 text-base font-medium border-b border-white/5 last:border-0"
            >
              {link.label}
            </a>
          ))}
          <div className="grid grid-cols-1 gap-2 mt-4">
            <a
              href="tel:+5566999585577"
              className="flex items-center justify-center gap-2 text-brand-white/70 py-2 text-sm border border-white/10 rounded-lg"
            >
              <Phone className="lucide lucide-phone" width={14} height={14} />
              (66) 9 9958-5577
            </a>
            <a
              href="tel:+5566996325577"
              className="flex items-center justify-center gap-2 text-brand-white/70 py-2 text-sm border border-white/10 rounded-lg"
            >
              <Phone className="lucide lucide-phone" width={14} height={14} />
              (66) 9 9632-5577
            </a>
          </div>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 bg-primary hover:bg-primary-dark text-brand-dark font-semibold text-center py-3 rounded-full transition-all duration-200"
          >
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </header>
  );
}
