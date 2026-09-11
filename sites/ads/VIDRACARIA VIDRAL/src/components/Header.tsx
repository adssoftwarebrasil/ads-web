import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#quem-somos', label: 'Quem Somos' },
  { href: '#produtos', label: 'Produtos' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 bg-white z-50 transition-shadow duration-300 ${
        scrolled ? 'shadow-md' : ''
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-5 lg:px-8">
        <div className="flex items-center justify-between h-[70px] lg:h-[80px]">
          <div className="flex items-center">
            <img
              src="https://storage.lucasmendes.dev/site-sp/vidral%2Flogo-vidral.png"
              alt="Vidral Esquadrias e Vidros"
              className="h-[40px] lg:h-[50px] w-auto"
            />
          </div>
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#29456D] font-medium text-base hover:text-[#1f3657] transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#29456D] transition-all group-hover:w-full"></span>
              </a>
            ))}
          </nav>
          <div className="hidden lg:block">
            <a
              href="https://wa.me/556596603393?text=Olá! Gostaria de solicitar um orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#29456D] text-white px-6 py-3 rounded-md font-medium text-base hover:bg-[#1f3657] transition-all hover:shadow-lg"
            >
              Solicite um Orçamento
            </a>
          </div>
          <button
            className="lg:hidden text-[#29456D] p-2"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav className="lg:hidden bg-white border-t border-gray-100 px-5 py-4 shadow-md">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-[#29456D] font-medium text-base hover:text-[#1f3657] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/556596603393?text=Olá! Gostaria de solicitar um orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#29456D] text-white px-6 py-3 rounded-md font-medium text-base text-center hover:bg-[#1f3657] transition-all"
            >
              Solicite um Orçamento
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
