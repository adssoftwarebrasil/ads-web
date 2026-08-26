import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre Nós', href: '#sobre' },
  { label: 'Marcas', href: '#marcas' },
  { label: 'Localização', href: '#localizacao' },
  { label: 'Contato', href: '#contato' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#inicio" className="flex items-center gap-2 flex-shrink-0">
            <img
              src="https://storage.lucasmendes.dev/site-sp/central-da-limpeza/logo-casa-verde-bolhas-azul-limpeza_1302x1270.webp"
              alt="Central da Limpeza"
              className="h-10 md:h-12 w-auto object-contain"
            />
            <div className="hidden sm:block">
              <span className="block text-brand-blue font-bold text-sm leading-tight">Central da</span>
              <span className="block text-brand-green font-bold text-sm leading-tight">Limpeza</span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-brand-blue transition-colors duration-200 rounded-lg hover:bg-brand-blue-light"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="tel:+5541999150216"
              className="hidden md:flex items-center gap-2 text-sm font-semibold text-brand-green hover:text-brand-green-dark transition-colors"
            >
              <Phone size={16} />
              (41) 99915-0216
            </a>
            <a
              href="https://wa.me/5541999150216"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center px-4 py-2 bg-brand-green text-white text-sm font-semibold rounded-full hover:bg-brand-green-dark transition-all duration-200 hover:shadow-md"
            >
              WhatsApp
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-brand-blue hover:bg-brand-blue-light rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-gray-100 mt-2 flex flex-col gap-2">
              <a
                href="tel:+5541999150216"
                className="flex items-center gap-2 px-4 py-3 text-sm font-semibold text-brand-green"
              >
                <Phone size={16} />
                (41) 99915-0216
              </a>
              <a
                href="https://wa.me/5541999150216"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-4 py-3 bg-brand-green text-white text-sm font-semibold rounded-full"
              >
                Falar no WhatsApp
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
