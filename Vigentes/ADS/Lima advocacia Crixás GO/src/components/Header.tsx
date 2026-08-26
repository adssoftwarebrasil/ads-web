import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Contato', href: '#contato' },
];

const WA_LINK = 'http://wa.me/5562981442263';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-black/95 backdrop-blur-md shadow-lg shadow-black/50 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <a href="#inicio" className="flex items-center gap-3 group">
              <img
                src="https://storage.lucasmendes.dev/site-sp/lima%20advocacia/logos/logo-dourado-sem-fundo.webp"
                alt="Lima Advocacia"
                className="h-14 w-auto transition-opacity duration-300 group-hover:opacity-80"
              />
            </a>

            <nav className="hidden lg:flex items-center gap-8">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="font-sans text-sm font-medium text-white/80 hover:text-[#A1825A] transition-colors duration-300 relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#A1825A] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+5562981442263"
                className="flex items-center gap-2 text-sm font-sans text-[#BBB39D] hover:text-[#A1825A] transition-colors duration-300"
              >
                <Phone size={15} />
                <span>(62) 9 8144-2263</span>
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-gradient text-white font-sans text-sm font-semibold px-5 py-2.5 rounded-sm hover:opacity-90 transition-opacity duration-300 tracking-wide"
              >
                Consulta Gratuita
              </a>
            </div>

            <button
              className="lg:hidden text-white p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-black/98 flex flex-col justify-center items-center gap-8 transition-all duration-400 lg:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <img
          src="https://storage.lucasmendes.dev/site-sp/lima%20advocacia/img/logo-branca-lima-advocacia-sem-fundo.webp"
          alt="Lima Advocacia"
          className="h-12 w-auto mb-4 opacity-60"
        />
        {NAV_ITEMS.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={closeMenu}
            className="font-serif text-xl text-white/90 hover:text-[#A1825A] transition-colors duration-300 tracking-widest uppercase"
          >
            {item.label}
          </a>
        ))}
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
          className="mt-4 gold-gradient text-white font-sans font-semibold px-8 py-3 rounded-sm tracking-wide"
        >
          Consulta Gratuita
        </a>
        <a
          href="tel:+5562981442263"
          className="flex items-center gap-2 text-[#BBB39D] font-sans text-sm"
        >
          <Phone size={15} />
          (62) 9 8144-2263
        </a>
      </div>
    </>
  );
}
