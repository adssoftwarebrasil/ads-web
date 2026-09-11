import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#home', label: 'Início' },
  { href: '#about', label: 'Nossa História' },
  { href: '#gallery', label: 'Galeria' },
  { href: '#products', label: 'Produtos' },
  { href: '#contact', label: 'Contato' },
];

const LOGO =
  'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=anjoscolchao%2Fimage%2041.png&version_id=null';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#004A69] shadow-xl py-3 md:py-4'
          : 'bg-gradient-to-b from-[#004A69]/80 to-transparent backdrop-blur-sm py-4 md:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          <a href="#home" className="flex items-center group" onClick={closeMenu}>
            <img
              src={LOGO}
              alt="Anjos Colchões e Sofás"
              className="transition-all duration-300 group-hover:scale-105 h-12 md:h-14 lg:h-16 w-auto"
            />
          </a>
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white hover:text-[#D1AD6E] transition-colors duration-300 font-medium text-sm xl:text-base uppercase tracking-wide"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-[#D1AD6E] text-[#004A69] px-6 xl:px-8 py-3 xl:py-3.5 rounded-full font-bold hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg text-sm xl:text-base uppercase tracking-wide"
            >
              Fale Conosco
            </a>
          </div>
          <button
            className="lg:hidden text-white p-2 hover:text-[#D1AD6E] transition-colors"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </nav>
      </div>
      <div
        className={`lg:hidden fixed inset-0 top-[70px] md:top-[80px] bg-[#004A69]/98 backdrop-blur-lg transition-all duration-300 ${
          menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 px-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="text-white hover:text-[#D1AD6E] transition-all duration-300 font-bold text-2xl md:text-3xl uppercase tracking-wide transform hover:scale-110"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={closeMenu}
            className="bg-[#D1AD6E] text-[#004A69] px-8 py-4 rounded-full font-bold text-lg md:text-xl uppercase tracking-wide hover:bg-white transition-all duration-300 transform hover:scale-110 shadow-2xl mt-4"
          >
            Fale Conosco
          </a>
        </div>
      </div>
    </header>
  );
}
