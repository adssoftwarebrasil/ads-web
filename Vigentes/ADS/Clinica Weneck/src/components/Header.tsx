import { useState, useEffect } from 'react';
import { Menu, X, Phone, Smartphone } from 'lucide-react';

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

  // Fecha menu mobile ao redimensionar para desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  // Previne scroll do body quando menu mobile está aberto
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
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { id: 'inicio', label: 'Início' },
    { id: 'especialidades', label: 'Especialidades' },
    { id: 'sobre', label: 'Sobre' },
    { id: 'equipe', label: 'Equipe' },
    { id: 'resultados', label: 'Resultados' },
    { id: 'contato', label: 'Contato' }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex flex-col transition-all duration-300 ${
          isScrolled ? 'shadow-lg' : 'shadow-md'
        }`}
      >
        {/* Top Bar - Contatos */}
        <div 
          className={`bg-[#003870] text-[#f1f5f8] w-full transition-all duration-300 overflow-hidden ${
            isScrolled ? 'max-h-0 opacity-0' : 'max-h-12 opacity-100'
          }`}
        >
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-2 flex justify-center md:justify-end items-center gap-4 sm:gap-6 text-xs sm:text-sm font-medium">
            <a href="tel:+558134621259" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone size={14} />
              <span>(81) 3462-1259</span>
            </a>
            <a href="https://wa.me/5581994073827" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Smartphone size={14} />
              <span>(81) 999407-3827</span>
            </a>
          </div>
        </div>

        {/* Main Navigation */}
        <div 
          className={`bg-[#f7f7f7] w-full transition-all duration-300 ${
            isScrolled ? 'h-[70px]' : 'h-20'
          }`}
        >
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 h-full flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => scrollToSection('inicio')}
              className="flex-shrink-0 transition-transform duration-300 hover:scale-105"
              aria-label="Ir para o início"
            >
              <img
                src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=clinicawerneck%2Flogomarca-sem-fundo-removebg-preview%201.png&version_id=null"
                alt="Clínica Werneck - Odontologia de Excelência"
                className={`w-auto object-contain transition-all duration-300 ${
                  isScrolled ? 'h-12' : 'h-16'
                }`}
              />
            </button>

            {/* Navigation Desktop */}
            <nav className="hidden md:flex items-center gap-8" aria-label="Navegação principal">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="nav-link text-[#003870] font-medium relative group transition-colors duration-300 hover:text-[#004a8f]"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#003870] transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
              
              <a 
                href="https://wa.me/5581994073827?text=Olá! Gostaria de agendar uma consulta na Clínica Werneck."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#003870] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#004a8f] transition-all duration-300 hover:scale-105 hover:shadow-lg whitespace-nowrap"
                aria-label="Agendar consulta via WhatsApp"
              >
                Agendar Consulta
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-[#003870] p-2 hover:bg-[#f1f5f8] rounded-lg transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>


        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-[#f7f7f7] border-t border-gray-200 transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-[600px] opacity-100 overflow-y-auto' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <nav
            className="flex flex-col p-4 gap-3"
            aria-label="Navegação mobile"
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="mobile-nav-link text-left px-4 py-3 text-[#003870] font-medium rounded-lg hover:bg-[#f1f5f8] transition-colors duration-300"
              >
                {link.label}
              </button>
            ))}
            
            <a 
              href="https://wa.me/5581994073827?text=Olá! Gostaria de agendar uma consulta na Clínica Werneck."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#003870] text-white px-6 py-3 rounded-lg font-medium text-center hover:bg-[#004a8f] transition-all duration-300 hover:shadow-lg mt-2"
              aria-label="Agendar consulta via WhatsApp"
            >
              Agendar Consulta
            </a>
          </nav>
        </div>
      </header>

      {/* Overlay para fechar menu mobile ao clicar fora */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}