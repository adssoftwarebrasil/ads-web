import { useState, useEffect } from 'react';
import { MessageCircle, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Quem Somos', id: 'quem-somos' },
    { name: 'Produtos', id: 'produtos' },
    { name: 'Depoimentos', id: 'depoimentos' },
    { name: 'Contato', id: 'contato' }
  ];

  return (
    <header className={`fixed top-0 z-50 w-full bg-white transition-shadow duration-300 ${isScrolled ? 'shadow-lg' : 'shadow-md'}`}>
      <div className="px-4 md:px-8 lg:px-16">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center"
          >
            <img
              src="https://storage.lucasmendes.dev/site-sp/lihexperienciadosono/logomarcaSemOfundoComAsCoresAzuleCinzaRecomendadoFundoBranco.png"
              alt="LIH Experiência do Sono"
              className="h-12 md:h-14"
              


            />
          </button>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-gray-700 hover:text-primary font-medium transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          <a
            href="https://wa.me/5562981369983?text=Olá,%20acabei%20de%20visitar%20o%20seu%20site%20e%20gostaria%20de%20mais%20informações."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-full transition-colors duration-300"
          >
            <MessageCircle className="w-5 h-5" />
            Fale Conosco
          </a>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <nav className="flex flex-col py-4 px-4 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-gray-700 hover:text-primary font-medium py-3 text-left transition-colors duration-300"
              >
                {link.name}
              </button>
            ))}
            <a
              href="https://wa.me/5562981369983?text=Olá,%20acabei%20de%20visitar%20o%20seu%20site%20e%20gostaria%20de%20mais%20informações."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-full transition-colors duration-300 mt-4"
            >
              <MessageCircle className="w-5 h-5" />
              Fale Conosco
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
