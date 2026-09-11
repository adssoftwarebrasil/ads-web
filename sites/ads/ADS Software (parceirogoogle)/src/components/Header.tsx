import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Início', href: '/' },
  { label: 'Serviços', href: '/servicos' },
  { label: 'Blog', href: '/blog' },
  { label: 'Trabalhe Conosco', href: '/carreiras' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-[#19355E] shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="/" data-discover="true">
              <img
                src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=ads-site%2FlogoADS.png&version_id=null"
                alt="ADS Software - Marketing Digital"
                loading="eager"
                width="674"
                height="244"
                className="h-10 sm:h-12 w-auto"
              />
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                className="font-medium transition-colors text-white hover:text-[#f9bb04]"
                href={link.href}
                data-discover="true"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/558007800040"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Falar conosco pelo WhatsApp"
              className="bg-[#33a753] hover:bg-[#2d9249] text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Falar Conosco
            </a>
          </div>
          <button
            className="md:hidden p-2 rounded-lg transition-colors text-white hover:bg-white/10"
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>
      {menuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-[#19355E] border-t border-white/10"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                className="font-medium transition-colors text-white hover:text-[#f9bb04]"
                href={link.href}
                data-discover="true"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/558007800040"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Falar conosco pelo WhatsApp"
              className="bg-[#33a753] hover:bg-[#2d9249] text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg text-center"
            >
              Falar Conosco
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
