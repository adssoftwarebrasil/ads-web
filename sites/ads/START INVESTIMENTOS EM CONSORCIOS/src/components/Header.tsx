import { useEffect, useState } from 'react';

const navLinks = [
  { href: '#topo', label: 'Início' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#planos', label: 'Planos' },
  { href: './simulador.html', label: 'Simulador' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      id="topo"
      className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-sm${scrolled ? ' shadow-lg' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#topo" className="flex items-center">
            <img
              src="https://startinvestimento.com.br/img/logo.png"
              alt="START Investimentos em Consórcios"
              className="h-12 w-auto object-contain"
            />
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium uppercase"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="https://wa.me/5567996552408"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-block bg-[#E7251C] text-white px-6 py-2 rounded-full font-bold text-sm hover:bg-[#c41f18] transition-all duration-300 hover:scale-105"
          >
            Fale Conosco
          </a>

          <button
            id="menuBtn"
            aria-label="Toggle menu"
            className="md:hidden text-gray-900 p-2"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>

      <div
        id="mobileMenu"
        className={`md:hidden${menuOpen ? '' : ' hidden'} border-t border-gray-200 bg-white px-4 py-4 space-y-2`}
      >
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="block text-gray-600 hover:text-gray-900 py-2 text-sm font-medium uppercase"
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <a
          href="https://wa.me/5567996552408"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center bg-[#E7251C] text-white px-6 py-3 rounded-full font-bold text-sm mt-2"
          onClick={() => setMenuOpen(false)}
        >
          Fale Conosco
        </a>
      </div>
    </header>
  );
}
