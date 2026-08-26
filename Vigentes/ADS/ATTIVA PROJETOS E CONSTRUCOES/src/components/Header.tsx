import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Olá! Vim pelo site e gostaria de solicitar um orçamento para meu projeto.');
    window.open(`https://wa.me/5562992287419?text=${message}`, '_blank');
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a href="#inicio" className="flex items-center transition-transform hover:scale-105">
              <img
                src="https://storage.lucasmendes.dev/site-sp/attiva%2Flogomarca.png"
                alt="ATTIVA Projetos e Construções"
                className="h-12 w-auto"
              />
            </a>

            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative font-medium transition-colors ${
                    isScrolled ? 'text-gray-700 hover:text-primary-blue' : 'text-white hover:text-primary-orange-light'
                  } after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-primary-orange after:transition-all hover:after:w-full`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <button
              onClick={handleWhatsAppClick}
              className="hidden lg:block bg-primary-orange text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-orange-light transition-all duration-300 hover:shadow-lg"
            >
              Solicitar Orçamento
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 ${isScrolled ? 'text-gray-900' : 'text-white'}`}
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'visible' : 'invisible'
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 bottom-0 w-72 bg-white shadow-2xl transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <nav className="flex flex-col p-8 space-y-6 mt-16">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-semibold text-gray-700 hover:text-primary-blue transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                handleWhatsAppClick();
                setIsMobileMenuOpen(false);
              }}
              className="bg-primary-orange text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-orange-light transition-colors mt-4"
            >
              Solicitar Orçamento
            </button>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
