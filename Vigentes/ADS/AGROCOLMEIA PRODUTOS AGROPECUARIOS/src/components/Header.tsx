import { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';

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

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Sobre Nós', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Programas', href: '#programas' },
    { name: 'Contato', href: '#contato' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-gradient-to-r from-[#0a2e13] via-[#0d3317] to-[#0a2e13] shadow-2xl py-3' 
          : 'bg-gradient-to-r from-[#0d3317]/95 via-[#12441f]/95 to-[#0d3317]/95 backdrop-blur-md py-4'
      }`}
    >
      {/* Linha decorativa superior com efeito dourado */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-70"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo com efeito hover */}
          <a 
            href="#inicio" 
            onClick={(e) => handleNavClick(e, '#inicio')} 
            className="flex items-center space-x-3 group relative"
          >
            <div className="absolute -inset-2 bg-yellow-400/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/agrocolmeia%2FLogoAgrocolmeia.png"
              alt="Agrocolméia Logo"
              className="h-12 sm:h-14 w-auto object-contain transition-all duration-300 relative z-10 group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation com efeitos modernos */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="relative text-white/90 hover:text-yellow-400 font-medium px-4 py-2 transition-all duration-300 group"
              >
                <span className="relative z-10">{link.name}</span>
                {/* Efeito de fundo ao hover */}
                <span className="absolute inset-0 bg-white/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                {/* Linha inferior animada */}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-500 group-hover:w-3/4 transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* CTA Button com efeito glassmorphism */}
          <div className="hidden lg:flex items-center">
            <a
              href="https://wa.me/5567999564186"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-[#0d3317] px-6 py-3 rounded-full font-bold hover:shadow-[0_0_30px_rgba(250,204,21,0.5)] transition-all duration-300 transform hover:scale-105 overflow-hidden group"
            >
              {/* Efeito de brilho animado */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
              <Phone className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
              <span className="relative z-10">Fale Conosco</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-yellow-400 transition-all duration-300 hover:bg-white/10 rounded-lg"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu com animação suave */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            isMobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="pb-4 border-t border-white/10 pt-4">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-white/90 hover:text-yellow-400 hover:bg-white/5 font-medium py-3 px-4 rounded-lg transition-all duration-300 transform hover:translate-x-2"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://wa.me/5567999564186"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-[#0d3317] px-6 py-3 rounded-full font-bold hover:shadow-[0_0_30px_rgba(250,204,21,0.5)] transition-all duration-300 mt-2"
              >
                <Phone className="w-5 h-5" />
                <span>Fale Conosco</span>
              </a>
            </nav>
          </div>
        </div>
      </div>

      {/* Linha decorativa inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
    </header>
  );
}