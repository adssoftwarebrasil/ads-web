import { useState, useEffect } from 'react';
import { Phone, Menu, X, ChevronRight } from 'lucide-react';

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Sobre Nós', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    // Transformamos o Fragment (<>) em um header fixo que engloba tudo
    <header className="fixed top-0 left-0 w-full z-50 flex flex-col">
      
      {/* Barra superior azul - some suavemente ao rolar a página para economizar espaço */}
      <div 
        className={`bg-[#243b8e] text-white text-sm px-4 hidden md:block transition-all duration-300 overflow-hidden ${
          scrolled ? 'max-h-0 opacity-0 py-0' : 'max-h-12 opacity-100 py-2'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="text-blue-200 text-xs">
            Atendemos: Mato Grosso • Pará • Amazonas • Goiás
          </span>
          <div className="flex items-center gap-6">
            <a href="tel:6635158120" className="flex items-center gap-1.5 hover:text-blue-200 transition-colors">
              <Phone size={13} />
              (66) 3515-8120
            </a>
            <a
              href="http://wa.me/5566984028763"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-green-600 hover:bg-green-700 px-3 py-1 rounded-full text-xs font-medium transition-colors"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Navegação Principal */}
      <div
        className={`w-full transition-all duration-300 ${
          scrolled
            ? 'bg-white shadow-lg border-b border-gray-100'
            : 'bg-white shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <a href="#inicio" onClick={() => handleNav('#inicio')} className="flex items-center gap-3 flex-shrink-0">
              <img
                src="https://storage.lucasmendes.dev/site-sp/refamaq/img/logo.webp"
                alt="Refamaq Logo"
                className="h-10 md:h-14 w-auto object-contain"
              />
            </a>

            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="px-4 py-2 text-sm font-medium text-[#373536] hover:text-[#466fc5] hover:bg-blue-50 rounded-lg transition-all duration-200"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a
                href="#contato"
                onClick={(e) => { e.preventDefault(); handleNav('#contato'); }}
                className="flex items-center gap-1.5 bg-[#466fc5] hover:bg-[#243b8e] text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow-md"
              >
                Solicitar Orçamento
                <ChevronRight size={16} />
              </a>
            </div>

            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              {menuOpen ? <X size={22} className="text-[#373536]" /> : <Menu size={22} className="text-[#373536]" />}
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full">
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="w-full text-left px-4 py-3 text-sm font-medium text-[#373536] hover:text-[#466fc5] hover:bg-blue-50 rounded-lg transition-all"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-2 pb-1 border-t border-gray-100 mt-2 flex flex-col gap-2">
                <a href="tel:6635158120" className="flex items-center gap-2 px-4 py-2 text-sm text-[#466fc5] font-medium">
                  <Phone size={16} />
                  (66) 3515-8120
                </a>
                <a
                  href="http://wa.me/5566984028763"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-600 text-white py-3 rounded-lg text-sm font-semibold"
                >
                  Falar no WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}