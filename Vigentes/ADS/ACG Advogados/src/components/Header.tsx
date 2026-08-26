import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#areas', label: 'Áreas de Atuação' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#avaliacoes', label: 'Avaliações' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[rgb(16,17,12)] shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <img
              src="https://storage.lucasmendes.dev/site-sp/acg%20advogados%2Fimg%2Flogo-sem-fundo.png"
              alt="ACG Advogados"
              className="h-16 w-auto"
            />
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[rgb(199,195,192)] hover:text-[rgb(175,145,93)] transition-colors duration-300 text-sm font-medium tracking-wide"
              >
                {link.label}
              </a>
            ))}
            <a
              href="http://wa.me/556399974853"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[rgb(175,145,93)] text-[rgb(16,17,12)] px-6 py-2.5 rounded-md hover:bg-[rgb(199,195,192)] transition-all duration-300 text-sm font-semibold tracking-wide"
            >
              Fale Conosco
            </a>
          </nav>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden text-[rgb(199,195,192)] hover:text-[rgb(175,145,93)] transition-colors"
            aria-label="Menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        {menuOpen && (
          <nav className="md:hidden pb-4 flex flex-col space-y-3 bg-[rgb(16,17,12)] rounded-b-lg">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-[rgb(199,195,192)] hover:text-[rgb(175,145,93)] transition-colors duration-300 text-sm font-medium tracking-wide px-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="http://wa.me/556399974853"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[rgb(175,145,93)] text-[rgb(16,17,12)] px-6 py-2.5 rounded-md hover:bg-[rgb(199,195,192)] transition-all duration-300 text-sm font-semibold tracking-wide text-center mx-2"
            >
              Fale Conosco
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
