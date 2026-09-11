import { useEffect, useState } from 'react';
import { Menu, Phone, X } from 'lucide-react';

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Contato', href: '#contato' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#090B4A] shadow-lg' : 'bg-[#090B4A]/95'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#inicio"
            onClick={() => goTo('#inicio')}
            className="flex items-center gap-3 shrink-0"
          >
            <img
              src="/img/logo.webp"
              alt="A Solução Engenharia"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </a>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => goTo(link.href)}
                className="text-white/80 hover:text-[#92AA40] transition-colors duration-200 text-sm font-medium tracking-wide"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="tel:+5579998705409"
              className="hidden sm:flex items-center gap-2 bg-[#92AA40] hover:bg-[#7d9336] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors duration-200"
            >
              <Phone size={15} />
              <span>(79) 9 9870-5409</span>
            </a>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-white p-1.5 rounded-md hover:bg-white/10 transition-colors"
              aria-label="Menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-[#090B4A] border-t border-white/10 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => goTo(link.href)}
              className="text-white/80 hover:text-[#92AA40] hover:bg-white/5 transition-colors duration-200 text-left py-3 px-3 rounded-lg font-medium"
            >
              {link.label}
            </button>
          ))}
          <a
            href="tel:+5579998705409"
            className="mt-2 flex items-center justify-center gap-2 bg-[#92AA40] hover:bg-[#7d9336] text-white font-semibold py-3 px-4 rounded-lg transition-colors"
          >
            <Phone size={16} />
            (79) 9 9870-5409
          </a>
        </nav>
      </div>
    </header>
  );
}
