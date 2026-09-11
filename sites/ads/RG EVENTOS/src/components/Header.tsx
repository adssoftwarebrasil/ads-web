import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Full Service', href: '#full-service' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre Nós', href: '#sobre' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Avaliações', href: '#avaliacoes' },
  { label: 'Contato', href: '#contato' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[rgb(3,7,8)] shadow-[0_4px_30px_rgba(0,0,0,0.6)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img
              src="https://storage.lucasmendes.dev/site-sp/rg%20eventos/img/logo-sem-fundo.webp"
              alt="Roberto Guimarães Eventos"
              className="h-12 w-auto object-contain"
            />
          </a>

          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-sm font-medium text-[rgb(245,244,249)] hover:text-[#C9962F] transition-colors duration-200 tracking-wide uppercase"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+5566999022313"
              className="flex items-center gap-2 text-sm text-[rgb(245,244,249)]/70 hover:text-[#C9962F] transition-colors"
            >
              <Phone size={15} />
              <span>(66) 9 9902-2313</span>
            </a>
            <a
              href="http://wa.me/556699022313"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-[#C9962F] hover:bg-[#b8841f] text-[rgb(3,7,8)] font-bold text-sm rounded-full transition-all duration-200 tracking-wide uppercase shadow-lg hover:shadow-[#C9962F]/30"
            >
              Solicitar Orçamento
            </a>
          </div>

          <button
            className="lg:hidden text-[rgb(245,244,249)] p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        } bg-[rgb(3,7,8)] border-t border-white/10`}
      >
        <div className="px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-left text-base font-medium text-[rgb(245,244,249)] hover:text-[#C9962F] transition-colors uppercase tracking-wide"
            >
              {link.label}
            </button>
          ))}
          <a
            href="http://wa.me/556699022313"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 text-center px-5 py-3 bg-[#C9962F] hover:bg-[#b8841f] text-[rgb(3,7,8)] font-bold text-sm rounded-full transition-colors uppercase tracking-wide"
          >
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </header>
  );
}
