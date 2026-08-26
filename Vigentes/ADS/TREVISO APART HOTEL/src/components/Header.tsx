import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Início', href: '#hero' },
  { label: 'Diferenciais', href: '#features' },
  { label: 'Acomodações', href: '#gallery' },
  { label: 'Sobre Nós', href: '#about' },
  { label: 'Serviços', href: '#services' },
  { label: 'Localização', href: '#location' },
  { label: 'Contato', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#212042] shadow-2xl py-2' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logomarca substituída aqui */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleNav('#hero'); }}
          className="flex items-center"
        >
          <img 
            src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=treviso%2FLogoTreviso1.png&version_id=null" 
            alt="Logo Treviso Apart Hotel" 
            className="h-12 md:h-14 w-auto object-contain transition-all duration-300"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-[#fef5e6]/80 hover:text-[#fef5e6] text-sm font-medium tracking-wide transition-colors duration-200 hover:text-[#b82626]"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:2733734333"
            className="flex items-center gap-2 text-[#fef5e6]/80 hover:text-[#fef5e6] text-sm transition-colors"
          >
            <Phone size={15} />
            <span>(27) 3373-4333</span>
          </a>
          <button
            onClick={() => handleNav('#contact')}
            className="bg-[#b82626] hover:bg-[#9b1f1f] text-white text-sm font-semibold px-5 py-2.5 rounded transition-all duration-200 tracking-wide shadow-lg"
          >
            Reservar Agora
          </button>
        </div>

        <button
          className="lg:hidden text-[#fef5e6] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`lg:hidden bg-[#212042] border-t border-[#fef5e6]/10 overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col px-4 py-4 gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-left text-[#fef5e6]/80 hover:text-[#fef5e6] py-3 text-sm font-medium border-b border-[#fef5e6]/5 last:border-0 transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('#contact')}
            className="mt-3 bg-[#b82626] hover:bg-[#9b1f1f] text-white text-sm font-semibold px-5 py-3 rounded transition-all duration-200 text-center"
          >
            Reservar Agora
          </button>
          <a
            href="tel:2733734333"
            className="flex items-center justify-center gap-2 text-[#fef5e6]/60 text-sm py-2"
          >
            <Phone size={14} />
            <span>(27) 3373-4333</span>
          </a>
        </nav>
      </div>
    </header>
  );
}