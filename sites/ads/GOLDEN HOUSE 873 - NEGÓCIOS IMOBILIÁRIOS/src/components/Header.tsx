import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MapPin, MessageCircle } from 'lucide-react';

const navLinks = [
  { name: 'Início', href: '/', isRoute: true },
  { name: 'Imóveis', href: '/imoveis', isRoute: true },
  { name: 'Sobre', href: '#about', isRoute: false },
  { name: 'Diferenciais', href: '#differentials', isRoute: false },
  { name: 'Serviços', href: '#services', isRoute: false },
  { name: 'Localização', href: '#location', isRoute: false },
  { name: 'Contato', href: '#contact', isRoute: false }
];

const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();
  const targetId = href.substring(1);
  const targetElement = document.getElementById(targetId);

  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isRoute: boolean) => {
    if (!isRoute) {
      if (location.pathname !== '/') {
        return;
      }
      scrollToSection(e, href);
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/98 backdrop-blur-md shadow-lg'
          : 'bg-white shadow-md'
      }`}
    >
      <div className="bg-[#cfa165] text-white py-2 px-4 hidden lg:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Av. Luís Viana Filho, 13223 - São Cristóvão, Salvador - BA, 41500-300</span>
          </div>
          <a
            href="https://wa.me/557193469993"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#f5f5f5] transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>(71) 9346-9993</span>
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex justify-between items-center py-4">
          <Link
            to="/"
            className="focus:outline-none focus:ring-2 focus:ring-[#cfa165] rounded-lg"
          >
            <img
              src="https://storage.lucasmendes.dev/site-sp/golden-house%2FIMG-20251202-WA0048_1-removebg-preview.png"
              alt="Golden House 873"
              className={`object-contain transition-all duration-300 ${
                isScrolled ? 'h-12 md:h-14' : 'h-14 md:h-16'
              }`}
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              link.isRoute ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-gray-700 hover:text-[#cfa165] font-medium transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#cfa165] transition-all group-hover:w-full"></span>
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href, link.isRoute)}
                  className="text-gray-700 hover:text-[#cfa165] font-medium transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#cfa165] transition-all group-hover:w-full"></span>
                </a>
              )
            ))}
          </nav>

          <a
            href="https://wa.me/557193469993?text=Olá! Gostaria de conhecer os serviços da Golden House 873"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-2 bg-[#cfa165] hover:bg-[#b88a4d] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Fale Conosco</span>
          </a>

          <button
            className="lg:hidden text-gray-600 hover:text-[#cfa165] p-2 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-screen opacity-100 py-2' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col">
          {navLinks.map((link) => (
            link.isRoute ? (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-[#cfa165] transition duration-200 border-b border-gray-100 font-medium"
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href, link.isRoute)}
                className="px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-[#cfa165] transition duration-200 border-b border-gray-100 font-medium"
              >
                {link.name}
              </a>
            )
          ))}
          <a
            href="https://wa.me/557193469993?text=Olá! Gostaria de conhecer os serviços da Golden House 873"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-4 my-3 flex items-center justify-center gap-2 bg-[#cfa165] hover:bg-[#b88a4d] text-white px-6 py-3 rounded-lg font-semibold transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Fale Conosco</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
