import { useEffect, useState } from 'react';
import { Phone, Menu } from 'lucide-react';

const navLinks = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Produtos' },
  { href: '#marcas', label: 'Marcas' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#avaliacoes', label: 'Avaliações' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkColor = scrolled ? 'rgb(53, 59, 59)' : 'rgb(240,238,239)';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled ? 'shadow-lg' : 'bg-transparent'
      }`}
      style={scrolled ? { backgroundColor: 'rgb(240, 238, 239)' } : undefined}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#inicio" className="flex items-center gap-3 shrink-0">
            <img
              src="https://storage.lucasmendes.dev/site-sp/optica%20salute/img/logo-sem-fundo.webp"
              alt="Óptica Salute"
              className={`h-12 w-auto transition-all duration-300 ${
                scrolled ? '' : 'brightness-0 invert'
              }`}
            />
          </a>
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium tracking-wide transition-colors duration-200 relative group"
                style={{ color: linkColor }}
              >
                {link.label}
                <span
                  className="absolute -bottom-0.5 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-300"
                  style={{ backgroundColor: 'rgb(80, 4, 4)' }}
                ></span>
              </a>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+556135424555"
              className="flex items-center gap-2 text-sm font-medium transition-colors duration-200 text-[rgb(223,209,162)]"
            >
              <Phone
                width={15}
                height={15}
                className="lucide lucide-phone"
                strokeWidth={2}
              />
              <span>(61) 3542-4555</span>
            </a>
            <a
              href="http://wa.me/556135424555"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              style={{ backgroundColor: 'rgb(80, 4, 4)', color: 'rgb(223, 209, 162)' }}
            >
              Fale Conosco
            </a>
          </div>
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors duration-200 ${
              scrolled ? 'text-[rgb(53,59,59)]' : 'text-white'
            }`}
            aria-label="Menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <Menu width={24} height={24} className="lucide lucide-menu" strokeWidth={2} />
          </button>
        </div>
      </div>
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${
          menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        style={{ backgroundColor: 'rgb(240, 238, 239)', top: '80px' }}
      >
        <div className="flex flex-col h-full px-6 pt-8 pb-12 gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="py-4 text-lg font-medium border-b transition-colors duration-200 hover:pl-2"
              style={{ color: 'rgb(53, 59, 59)', borderColor: 'rgb(196, 194, 195)' }}
            >
              {link.label}
            </a>
          ))}
          <div className="mt-6 flex flex-col gap-3">
            <a
              href="tel:+556135424555"
              className="flex items-center justify-center gap-2 py-3 rounded-full border font-medium text-sm"
              style={{ borderColor: 'rgb(196, 194, 195)', color: 'rgb(53, 59, 59)' }}
            >
              <Phone width={16} height={16} className="lucide lucide-phone" strokeWidth={2} />
              (61) 3542-4555
            </a>
            <a
              href="http://wa.me/556135424555"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 text-center rounded-full font-semibold text-sm"
              style={{ backgroundColor: 'rgb(80, 4, 4)', color: 'rgb(223, 209, 162)' }}
            >
              Fale Conosco no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
