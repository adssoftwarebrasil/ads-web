import { useState, useEffect } from 'react';
import { Menu, X, Phone, Instagram } from 'lucide-react';

// Otimização: Lista de itens de navegação para evitar repetição de código
const NAV_ITEMS = [
  { id: 'inicio', label: 'Início' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'servicos', label: 'Serviços' },
  { id: 'depoimentos', label: 'Depoimentos' },
  { id: 'galeria', label: 'Nossa Galeria' },
  { id: 'contato', label: 'Contato' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black shadow-lg shadow-white/5 py-3' 
          : 'bg-black/90 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center shrink-0">
            <img
              src="https://storage.lucasmendes.dev/site-sp/beevox%2Fimg%2Flogo-sem-fundo.webp"
              alt="BEEVOX - Soluções Auditivas"
              className="h-12 sm:h-16 w-auto object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-white hover:text-[rgb(246,182,31)] transition-colors font-medium text-sm xl:text-base"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:6536248823"
              className="flex items-center space-x-2 text-white hover:text-[rgb(246,182,31)] transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="font-medium text-sm xl:text-base">(65) 3624-8823</span>
            </a>
            <a
              href="https://www.instagram.com/beevox.cuiaba/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[rgb(246,182,31)] transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="http://wa.me/5565999818250"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[rgb(246,182,31)] text-black px-5 py-2.5 rounded-full font-bold hover:bg-[rgb(226,162,11)] transition-all shadow-md hover:shadow-lg hover:shadow-white/10 text-sm xl:text-base"
            >
              Agendar Consulta
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white hover:text-[rgb(246,182,31)] p-2 transition-colors"
            aria-label="Abrir menu"
          >
            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-800 pt-4 animate-in fade-in slide-in-from-top-5 duration-200">
            <nav className="flex flex-col space-y-4">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-100 hover:text-[rgb(246,182,31)] transition-colors font-medium text-lg text-left pl-2 border-l-2 border-transparent hover:border-[rgb(246,182,31)]"
                >
                  {item.label}
                </button>
              ))}
              
              <div className="pt-4 flex flex-col space-y-4 border-t border-gray-800 mt-2">
                <a
                  href="tel:6536248823"
                  className="flex items-center space-x-3 text-gray-100 hover:text-[rgb(246,182,31)] transition-colors pl-2"
                >
                  <Phone className="w-5 h-5" />
                  <span className="font-medium">(65) 3624-8823</span>
                </a>
                <a
                  href="https://www.instagram.com/beevox.cuiaba/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-100 hover:text-[rgb(246,182,31)] transition-colors pl-2"
                >
                  <Instagram className="w-5 h-5" />
                  <span className="font-medium">@beevox.cuiaba</span>
                </a>
                <a
                  href="http://wa.me/5565999818250"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[rgb(246,182,31)] text-black py-3 rounded-full font-bold hover:bg-[rgb(226,162,11)] transition-all text-center shadow-md mx-2"
                >
                  Agendar Consulta
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}