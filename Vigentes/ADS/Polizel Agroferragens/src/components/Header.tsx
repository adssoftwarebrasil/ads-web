import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Sobre', href: '#sobre' },
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

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white'
      } border-b border-gray-100`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#inicio"
            onClick={() => handleNavClick('#inicio')}
            className="flex items-center gap-3"
          >
            <img
              src="https://storage.lucasmendes.dev/site-sp/polizel/polizel-logo-semfundo.png"
              alt="Polizel Agroferragens"
              className="h-10 md:h-14 w-auto object-contain"
              /* Adicionei um filtro caso o logo seja muito claro para o fundo branco */
              style={{ filter: 'brightness(0.9)' }} 
            />
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-gray-700 hover:text-[#663300] px-4 py-2 text-sm font-medium rounded-lg hover:bg-gray-100 transition-all duration-200"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://wa.me/5566999996760"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#006633] hover:bg-[#005a2d] text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-105 shadow-lg"
            >
              <Phone size={16} />
              (66) 99999-6760
            </a>
          </div>

          <button
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-gray-700 hover:text-[#663300] text-left px-4 py-3 rounded-lg hover:bg-gray-50 transition-all duration-200 font-medium"
              >
                {link.label}
              </button>
            ))}
            <a
              href="https://wa.me/5566999996760"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#006633] hover:bg-[#005a2d] text-white px-4 py-3 rounded-xl font-semibold text-sm mt-2 transition-all duration-200 justify-center"
            >
              <Phone size={16} />
              Chamar no WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}