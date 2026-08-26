import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';

export function Header() {
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
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#3b2720] shadow-lg'
          : 'bg-[#3b2720]'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection('inicio')}
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <img
                src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=oticasvitoria%2Flogo-sem-fundo.png&version_id=null"
                alt="Ótica Victoria Logo"
                className="h-10 lg:h-16 w-auto object-contain"
              />
            </button>
          </div>

          {/* Menu Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-[#fffffa] hover:text-[#8b6f47] transition-colors font-medium"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('marcas')}
              className="text-[#fffffa] hover:text-[#8b6f47] transition-colors font-medium"
            >
              Marcas
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="text-[#fffffa] hover:text-[#8b6f47] transition-colors font-medium"
            >
              Contato
            </button>
          </nav>

          {/* Botão WhatsApp Desktop */}
          <div className="hidden md:flex items-center">
            <a
              href="https://wa.me/5527998695803"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] text-white px-6 py-2.5 rounded-lg hover:bg-[#20BA5A] transition-all hover:scale-105 font-medium shadow-lg"
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>
          </div>

          {/* Menu Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[#fffffa] hover:text-[#8b6f47] transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#3b2720] border-t border-[#fffffa]/10">
          <nav className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-[#fffffa] hover:text-[#8b6f47] transition-colors font-medium text-left py-2"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('marcas')}
              className="text-[#fffffa] hover:text-[#8b6f47] transition-colors font-medium text-left py-2"
            >
              Marcas
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="text-[#fffffa] hover:text-[#8b6f47] transition-colors font-medium text-left py-2"
            >
              Contato
            </button>
            <a
              href="https://wa.me/5527998695803"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-lg hover:bg-[#20BA5A] transition-all font-medium mt-2"
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}