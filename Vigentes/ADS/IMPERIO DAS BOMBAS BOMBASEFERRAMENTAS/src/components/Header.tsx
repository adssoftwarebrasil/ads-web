import { Menu, X, MessageCircle, Phone } from 'lucide-react';

interface HeaderProps {
  mobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  scrolled: boolean;
}

const Header = ({ mobileMenuOpen, toggleMobileMenu, scrolled }: HeaderProps) => {
  return (
    <>
      {/* Top Bar - Info Strip */}
      <div className="bg-gradient-to-r from-imperio-blue via-imperio-mid-blue to-imperio-light-blue text-white py-2 hidden lg:block">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <a 
                href="tel:+5591980252240" 
                className="flex items-center gap-2 hover:text-imperio-ice transition-colors"
              >
                <Phone size={14} />
                <span>(91) 98025-2240</span>
              </a>
              <span className="text-imperio-ice/60">|</span>
              <span className="text-imperio-ice/90">Segunda a Sexta: 8h às 18h • Sábado: 8h às 13h</span>
            </div>
            <a 
              href="https://wa.me/5591980252240"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-imperio-ice transition-colors font-medium"
            >
              <MessageCircle size={14} />
              <span>Atendimento via WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-gradient-to-r from-imperio-dark via-imperio-blue to-imperio-mid-blue ${
          scrolled
            ? 'shadow-2xl'
            : 'shadow-xl'
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo Container */}
            <div className="flex-shrink-0">
              <a href="#inicio" className="block group">
                <div 
                  className={`transition-all duration-300 
                    ${scrolled ? 'lg:scale-95' : 'lg:scale-100'}
                    group-hover:scale-105`}
                >
                  <img
                    src="https://storage.lucasmendes.dev/site-sp/imperiodasbombas%2Fimperio-das-bombas-sem-fundo.webp"
                    alt="Império das Bombas - Bombas d'Água e Ferramentas"
                    className="h-12 lg:h-16 w-auto object-contain"
                  />
                </div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              <a
                href="#inicio"
                className="relative px-4 py-2 text-white font-medium transition-all duration-300 group"
              >
                <span className="relative z-10">Início</span>
                <span className="absolute inset-0 bg-white/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
              </a>
              <a
                href="#sobre"
                className="relative px-4 py-2 text-white font-medium transition-all duration-300 group"
              >
                <span className="relative z-10">Sobre</span>
                <span className="absolute inset-0 bg-white/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
              </a>
              <a
                href="#produtos"
                className="relative px-4 py-2 text-white font-medium transition-all duration-300 group"
              >
                <span className="relative z-10">Produtos</span>
                <span className="absolute inset-0 bg-white/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
              </a>
              <a
                href="#vantagens"
                className="relative px-4 py-2 text-white font-medium transition-all duration-300 group"
              >
                <span className="relative z-10">Vantagens</span>
                <span className="absolute inset-0 bg-white/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
              </a>
              <a
                href="#depoimentos"
                className="relative px-4 py-2 text-white font-medium transition-all duration-300 group"
              >
                <span className="relative z-10">Depoimentos</span>
                <span className="absolute inset-0 bg-white/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
              </a>
              <a
                href="#contato"
                className="relative px-4 py-2 text-white font-medium transition-all duration-300 group"
              >
                <span className="relative z-10">Contato</span>
                <span className="absolute inset-0 bg-white/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
              </a>
            </nav>

            {/* CTA Button Desktop */}
            <a
              href="https://wa.me/5591980252240?text=Olá! Gostaria de solicitar um orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3.5 rounded-xl font-bold shadow-lg hover:shadow-green-500/50 hover:scale-105 transition-all duration-300 group relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              <MessageCircle size={20} className="relative z-10" />
              <span className="relative z-10">Solicitar Orçamento</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden relative w-12 h-12 flex items-center justify-center text-imperio-dark bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <span
                  className={`absolute top-1/2 left-0 w-full h-0.5 bg-imperio-dark transition-all duration-300 ${
                    mobileMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
                  }`}
                />
                <span
                  className={`absolute top-1/2 left-0 w-full h-0.5 bg-imperio-dark transition-all duration-300 ${
                    mobileMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`absolute top-1/2 left-0 w-full h-0.5 bg-imperio-dark transition-all duration-300 ${
                    mobileMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
                  }`}
                />
              </div>
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-500 ${
              mobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="border-t border-white/10 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-xl py-6">
              <nav className="flex flex-col space-y-2">
                <a
                  href="#inicio"
                  onClick={toggleMobileMenu}
                  className="relative px-4 py-3 text-imperio-dark font-medium bg-white/90 hover:bg-white rounded-lg transition-all duration-300 flex items-center justify-between group"
                >
                  <span>Início</span>
                  <span className="text-imperio-light-blue opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </a>
                <a
                  href="#sobre"
                  onClick={toggleMobileMenu}
                  className="relative px-4 py-3 text-imperio-dark font-medium bg-white/90 hover:bg-white rounded-lg transition-all duration-300 flex items-center justify-between group"
                >
                  <span>Sobre</span>
                  <span className="text-imperio-light-blue opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </a>
                <a
                  href="#produtos"
                  onClick={toggleMobileMenu}
                  className="relative px-4 py-3 text-imperio-dark font-medium bg-white/90 hover:bg-white rounded-lg transition-all duration-300 flex items-center justify-between group"
                >
                  <span>Produtos</span>
                  <span className="text-imperio-light-blue opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </a>
                <a
                  href="#vantagens"
                  onClick={toggleMobileMenu}
                  className="relative px-4 py-3 text-imperio-dark font-medium bg-white/90 hover:bg-white rounded-lg transition-all duration-300 flex items-center justify-between group"
                >
                  <span>Vantagens</span>
                  <span className="text-imperio-light-blue opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </a>
                <a
                  href="#depoimentos"
                  onClick={toggleMobileMenu}
                  className="relative px-4 py-3 text-imperio-dark font-medium bg-white/90 hover:bg-white rounded-lg transition-all duration-300 flex items-center justify-between group"
                >
                  <span>Depoimentos</span>
                  <span className="text-imperio-light-blue opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </a>
                <a
                  href="#contato"
                  onClick={toggleMobileMenu}
                  className="relative px-4 py-3 text-imperio-dark font-medium bg-white/90 hover:bg-white rounded-lg transition-all duration-300 flex items-center justify-between group"
                >
                  <span>Contato</span>
                  <span className="text-imperio-light-blue opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </a>
                
                {/* Mobile CTA */}
                <a
                  href="https://wa.me/5591980252240?text=Olá! Gostaria de solicitar um orçamento."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={toggleMobileMenu}
                  className="mt-4 flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-4 rounded-xl font-bold shadow-lg hover:shadow-green-500/50 transition-all duration-300"
                >
                  <MessageCircle size={20} />
                  <span>Solicitar Orçamento</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;