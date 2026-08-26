import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Avaliações', href: '#avaliacoes' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#003F5C] shadow-2xl py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a
            href="#inicio"
            onClick={(e) => { e.preventDefault(); handleNavClick('#inicio'); }}
            className="flex items-center gap-3 group"
          >
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#EAE6AE]/40 group-hover:border-[#EAE6AE] transition-all duration-300 flex-shrink-0">
              <img
                src="https://storage.lucasmendes.dev/site-sp/araripe%20chagas/img/logo-sem-fundo.webp"
                alt="Araripe Chagas"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-[#EAE6AE] font-bold text-lg tracking-wide">Araripe Chagas</span>
              <span className="text-[#EAE6AE]/70 text-xs tracking-widest uppercase">Advogados Associados</span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="text-[#EAE6AE]/80 hover:text-[#EAE6AE] text-sm font-medium tracking-wide transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#C9A84C] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+556281124626"
              className="flex items-center gap-2 text-[#EAE6AE]/80 hover:text-[#EAE6AE] text-sm transition-colors duration-200"
            >
              <Phone size={14} />
              <span>(62) 98112-4626</span>
            </a>
            <a
              href="http://wa.me/556281124626"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#C9A84C] hover:bg-[#b8963e] text-[#003F5C] font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#C9A84C]/30 hover:-translate-y-0.5"
            >
              Consulta Gratuita
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#EAE6AE] p-2"
            aria-label="Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[#003F5C] border-t border-[#EAE6AE]/10 px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="text-[#EAE6AE]/80 hover:text-[#EAE6AE] font-medium py-2 border-b border-[#EAE6AE]/10 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="http://wa.me/556281124626"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#C9A84C] text-[#003F5C] font-semibold text-center py-3 rounded-full mt-2"
          >
            Consulta Gratuita
          </a>
        </div>
      </div>
    </header>
  );
}
