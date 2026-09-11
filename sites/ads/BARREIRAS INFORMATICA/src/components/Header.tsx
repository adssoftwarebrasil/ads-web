import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Phone } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-[#145bcc] shadow-lg' 
            : 'bg-gradient-to-r from-[#145bcc] via-[#1a6bd4] to-[#145bcc] shadow-md'
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                src="https://storage.lucasmendes.dev/site-sp/barreirasinformatica%2Flogomarca-loja-sem-fundo.png"
                alt="Barreiras Informática - Logo"
                className="h-14 lg:h-16 w-auto transition-transform hover:scale-105"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              <button
                onClick={() => scrollToSection('inicio')}
                className="text-white/90 font-medium px-4 py-2 rounded-lg hover:bg-white/10 hover:text-white transition-all"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection('produtos')}
                className="text-white/90 font-medium px-4 py-2 rounded-lg hover:bg-white/10 hover:text-white transition-all"
              >
                Produtos
              </button>
              <button
                onClick={() => scrollToSection('sobre')}
                className="text-white/90 font-medium px-4 py-2 rounded-lg hover:bg-white/10 hover:text-white transition-all"
              >
                Sobre Nós
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className="text-white/90 font-medium px-4 py-2 rounded-lg hover:bg-white/10 hover:text-white transition-all"
              >
                Contato
              </button>
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a 
                href="tel:+557736125050"
                className="flex items-center gap-2 text-white/90 hover:text-white px-4 py-2 rounded-lg hover:bg-white/10 transition-all font-medium"
              >
                <Phone size={18} />
                <span className="text-sm">(77) 3612-5050</span>
              </a>
              <a 
                href="https://wa.me/5577999948600?text=Olá! Gostaria de mais informações sobre os produtos da Barreiras Informática"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white text-[#145bcc] px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 hover:scale-105 transition-all shadow-lg"
              >
                <MessageCircle size={20} />
                Fale Conosco
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white rounded-lg hover:bg-white/10 transition-colors"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Info Bar */}
        <div className="lg:hidden bg-white/10 backdrop-blur-sm border-t border-white/20">
          <div className="max-w-[1280px] mx-auto px-4 py-2">
            <a 
              href="tel:+557736125050"
              className="flex items-center justify-center gap-2 text-white text-sm font-medium"
            >
              <Phone size={16} />
              (77) 3612-5050
            </a>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-0 right-0 bottom-0 w-80 bg-white z-50 lg:hidden shadow-2xl transform transition-transform duration-300">
            {/* Mobile Menu Header */}
            <div className="bg-gradient-to-r from-[#145bcc] to-[#1a6bd4] p-6">
              <div className="flex items-center justify-between mb-4">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/barreirasinformatica%2Flogomarca-loja-sem-fundo.png"
                  alt="Barreiras Informática"
                  className="h-12 w-auto"
                />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              <p className="text-white/90 text-sm">
                Informática, Papelaria e Móveis
              </p>
            </div>

            {/* Mobile Navigation */}
            <nav className="flex flex-col p-6 space-y-2">
              <button
                onClick={() => scrollToSection('inicio')}
                className="text-gray-800 font-medium text-left py-4 px-4 hover:bg-[#145bcc]/5 hover:text-[#145bcc] rounded-lg transition-all border-b border-gray-100"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection('produtos')}
                className="text-gray-800 font-medium text-left py-4 px-4 hover:bg-[#145bcc]/5 hover:text-[#145bcc] rounded-lg transition-all border-b border-gray-100"
              >
                Produtos
              </button>
              <button
                onClick={() => scrollToSection('sobre')}
                className="text-gray-800 font-medium text-left py-4 px-4 hover:bg-[#145bcc]/5 hover:text-[#145bcc] rounded-lg transition-all border-b border-gray-100"
              >
                Sobre Nós
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className="text-gray-800 font-medium text-left py-4 px-4 hover:bg-[#145bcc]/5 hover:text-[#145bcc] rounded-lg transition-all border-b border-gray-100"
              >
                Contato
              </button>

              {/* Mobile CTA */}
              <div className="pt-4 space-y-3">
                <a 
                  href="tel:+5577999948600"
                  className="flex items-center justify-center gap-2 bg-gray-100 text-[#145bcc] px-6 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-all"
                >
                  <Phone size={20} />
                  Ligar Agora
                </a>
                <a 
                  href="https://wa.me/5577999948600?text=Olá! Gostaria de mais informações sobre os produtos da Barreiras Informática"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#145bcc] to-[#0d4a99] text-white px-6 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  <MessageCircle size={20} />
                  WhatsApp
                </a>
              </div>
            </nav>

            {/* Mobile Footer */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gray-50 border-t border-gray-200">
              <p className="text-center text-sm text-gray-600">
                <strong className="text-[#145bcc]">Desde 1990</strong>
                <br />
                Servindo o Oeste da Bahia
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
}