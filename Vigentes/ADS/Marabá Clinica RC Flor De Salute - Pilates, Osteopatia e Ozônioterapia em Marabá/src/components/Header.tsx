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

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const menuItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre Nós', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Localização', href: '#localizacao' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white shadow-lg backdrop-blur-sm' 
            : 'bg-white/98 backdrop-blur-sm shadow-sm'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 md:px-10 lg:px-[60px] w-full">
          <div className="flex items-center justify-between h-[70px] md:h-[80px]">
            {/* Logo */}
            <a 
              href="#inicio"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#inicio');
              }}
              className="flex items-center gap-3 group"
            >
              <div className="relative h-[45px] w-[45px] md:h-[55px] md:w-[55px] rounded-full overflow-hidden bg-white shadow-md ring-2 ring-[#FFB5B8]/20 group-hover:ring-[#FFB5B8]/40 transition-all duration-300">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/flordesalute%2Flogo-ma%20(1).jpg"
                  alt="RC Flor De Salute Logo"
                  className="w-full h-full object-cover scale-110"
                />
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="text-[#78645C] font-bold text-base md:text-lg leading-tight">
                  RC Flor De Salute
                </span>
                <span className="text-[#A88D83] text-xs font-medium">
                  Saúde & Bem-estar
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {menuItems.map((item) => (
                
                  <a key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="text-[#78645C] hover:text-[#A88D83] transition-colors duration-300 font-medium relative group px-3 py-2"
                >
                  <span className="relative z-10">{item.label}</span>
                  <span className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[#FFB5B8] to-[#FFDCDE] transition-all duration-300 group-hover:w-[calc(100%-24px)] group-hover:left-3 rounded-full"></span>
                </a>
              ))}
              
              {/* CTA Button Desktop */}
              
                <a href="https://wa.me/5594991379414?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20na%20RC%20Flor%20De%20Salute."
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-flor-green text-white px-5 xl:px-6 py-2.5 rounded-lg font-semibold text-sm xl:text-base hover:brightness-110 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl ml-2 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Phone size={16} className="group-hover:rotate-12 transition-transform duration-300" />
                  Agendar Consulta
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-[#78645C] p-2 hover:bg-[#F5EEEB] rounded-lg transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X size={26} strokeWidth={2.5} />
              ) : (
                <Menu size={26} strokeWidth={2.5} />
              )}
            </button>
          </div>
        </div>

        {/* Linha decorativa inferior */}
        <div 
          className={`h-[2px] bg-gradient-to-r from-transparent via-[#FFB5B8]/30 to-transparent transition-opacity duration-300 ${
            isScrolled ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden animate-fadeIn"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-[85%] max-w-[320px] bg-gradient-to-b from-white to-[#F5EEEB] z-50 lg:hidden transform transition-transform duration-300 ease-out shadow-2xl ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header do Menu Mobile */}
        <div className="bg-gradient-to-r from-flor-green to-[#4a6b5e] p-6 flex items-center gap-3 shadow-lg">
          <div className="h-[50px] w-[50px] rounded-full overflow-hidden bg-white shadow-md ring-2 ring-white/50">
            <img
              src="https://storage.lucasmendes.dev/site-sp/flordesalute%2Flogo-ma%20(1).jpg"
              alt="RC Flor De Salute Logo"
              className="w-full h-full object-cover scale-110"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-white font-bold text-lg leading-tight">
              RC Flor De Salute
            </h3>
            <p className="text-white/90 text-xs font-medium">
              Saúde & Bem-estar
            </p>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white p-1 hover:bg-white/20 rounded-lg transition-colors duration-300"
            aria-label="Fechar menu"
          >
            <X size={24} strokeWidth={2.5} />
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col p-6 pt-4 overflow-y-auto max-h-[calc(100vh-140px)]">
          <div className="space-y-1">
            {menuItems.map((item, index) => (
              
                <a key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="group flex items-center text-[#78645C] hover:text-white hover:bg-flor-green/10 py-3.5 px-4 rounded-lg border-b border-gray-100/50 last:border-0 transition-all duration-300 font-medium"
                style={{
                  animation: isMobileMenuOpen
                    ? `slideIn 0.3s ease-out ${index * 0.05}s both`
                    : 'none',
                }}
              >
                <span className="w-2 h-2 rounded-full bg-flor-green mr-3 group-hover:scale-125 transition-transform duration-300"></span>
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Button Mobile */}
          
            <a href="https://wa.me/5594991379414?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20na%20RC%20Flor%20De%20Salute."
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-flor-green text-white px-6 py-3.5 rounded-lg font-semibold text-center mt-6 hover:brightness-110 hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden"
            style={{
              animation: isMobileMenuOpen
                ? `slideIn 0.3s ease-out ${menuItems.length * 0.05}s both`
                : 'none',
            }}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <Phone size={18} className="group-hover:rotate-12 transition-transform duration-300" />
              Agendar Consulta
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF9BA0] to-[#FFB5B8] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>

          {/* Informações de Contato */}
          <div className="mt-6 p-4 bg-white/60 backdrop-blur-sm rounded-lg border border-[#FFB5B8]/20">
            <p className="text-xs text-[#78645C]/70 font-medium mb-2">
              Horário de Atendimento:
            </p>
            <p className="text-sm text-[#78645C] font-semibold">
              Seg - Sex: 08:00 - 12:00 | 14:00 - 20:00
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;