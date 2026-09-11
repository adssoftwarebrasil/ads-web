import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <img
              src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=OPEX%20TELECOM%2Fopex-telecom-telecomunicacoes-logo-sem-fundo.webp&version_id=null"
              alt="OPEX TELECOM"
              className="h-14 sm:h-16 w-auto"
            />
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-[#393939] hover:text-[#FF5500] transition-colors duration-300 font-medium"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-[#393939] hover:text-[#FF5500] transition-colors duration-300 font-medium"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-[#393939] hover:text-[#FF5500] transition-colors duration-300 font-medium"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-[#393939] hover:text-[#FF5500] transition-colors duration-300 font-medium"
            >
              Contato
            </button>
            <a
              href="https://wa.me/5562993741022"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-[#FF5500] to-[#FF6600] text-white px-6 py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-semibold"
            >
              <Phone size={18} />
              Fale Conosco
            </a>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-[#393939] p-2"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 py-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-[#393939] hover:text-[#FF5500] transition-colors duration-300 font-medium text-left px-4 py-2"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-[#393939] hover:text-[#FF5500] transition-colors duration-300 font-medium text-left px-4 py-2"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-[#393939] hover:text-[#FF5500] transition-colors duration-300 font-medium text-left px-4 py-2"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-[#393939] hover:text-[#FF5500] transition-colors duration-300 font-medium text-left px-4 py-2"
              >
                Contato
              </button>
              <a
                href="https://wa.me/5562993741022"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#FF5500] to-[#FF6600] text-white px-6 py-3 rounded-full mx-4 hover:shadow-lg transition-all duration-300 font-semibold"
              >
                <Phone size={18} />
                Fale Conosco
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
