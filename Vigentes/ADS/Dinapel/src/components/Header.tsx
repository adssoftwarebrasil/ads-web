import { useState, useEffect } from 'react';
import { Instagram, Phone, Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#produtos', label: 'Produtos' },
  { href: '#sobre', label: 'Sobre Nós' },
  { href: '#avaliacoes', label: 'Avaliações' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'blue-gradient shadow-lg py-3' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-3 flex-shrink-0">
            <img
              src="https://storage.lucasmendes.dev/site-sp/dinapel/img/logo-sem-fundo.webp"
              alt="Dinapel Peças para Tratores"
              className="transition-all duration-300 h-14"
            />
          </a>
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-500 transition-colors duration-200 hover:text-yellow-DEFAULT font-medium text-white hover:text-[#FCE500]"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://www.instagram.com/dinapel_rr/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full transition-colors duration-200 text-white hover:text-[#FCE500]"
            >
              <Instagram size={20} className="lucide lucide-instagram " />
            </a>
            <a
              href="tel:+559532243257"
              className="flex items-center gap-2 bg-[#FCE500] hover:bg-[#CC9C00] text-[#0131AC] font-bold px-4 py-2 rounded-full text-sm transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <Phone size={15} className="lucide lucide-phone " />
              (95) 3224-3257
            </a>
          </div>
          <button
            className="md:hidden p-2 rounded-lg transition-colors text-white"
            aria-label="Menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} className="lucide lucide-menu " />}
          </button>
        </div>

        {menuOpen && (
          <nav className="md:hidden mt-4 blue-gradient rounded-2xl p-5 flex flex-col gap-4 shadow-xl">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-white hover:text-[#FCE500] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+559532243257"
              className="flex items-center justify-center gap-2 bg-[#FCE500] hover:bg-[#CC9C00] text-[#0131AC] font-bold px-4 py-2 rounded-full text-sm transition-all duration-200"
            >
              <Phone size={15} />
              (95) 3224-3257
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
