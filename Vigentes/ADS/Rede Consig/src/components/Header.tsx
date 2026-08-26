import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

interface HeaderProps {
  scrolled: boolean;
}

const Header = ({ scrolled }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hideTopBar, setHideTopBar] = useState(false);

  const menuItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Vantagens', href: '#vantagens' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Contato', href: '#contato' }
  ];

  const handleWhatsApp = () => {
    window.open('https://wa.me/5563984274000', '_blank');
  };

  // Detecta scroll para esconder/mostrar a barra de contato
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHideTopBar(true);
      } else {
        setHideTopBar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Barra de Contato - Esconde no scroll */}
      <div
        className={`bg-[#1a1a1a] text-white py-2.5 fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
          hideTopBar ? '-translate-y-full' : 'translate-y-0'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-8 text-xs md:text-sm">
            <a href="tel:+5563984274000" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone size={14} className="md:hidden" />
              <Phone size={16} className="hidden md:block" />
              <span>(63) 98427-4000</span>
            </a>
            <a href="mailto:redeconsigoficial@gmail.com" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Mail size={14} className="md:hidden" />
              <Mail size={16} className="hidden md:block" />
              <span className="text-xs md:text-sm">redeconsigoficial@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Header Principal - Ajusta posição com base no scroll */}
      <header
        className={`fixed left-0 right-0 z-40 gradient-orange-135 transition-all duration-300 ${
          hideTopBar ? 'top-0 shadow-lg' : 'top-[52px] md:top-[42px]'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-[60px] md:h-[90px]">
            {/* Logo */}
            <a href="#inicio" className="flex-shrink-0">
              <img
                src="https://storage.lucasmendes.dev/site-sp/redeconsig%2Flogo-redeconsig-fundo-laranja-removebg-preview%201.png"
                alt="Rede Consig"
                className="h-9 md:h-15 w-auto"
              />
            </a>

            {/* Menu Desktop */}
            <nav className="hidden lg:flex items-center gap-8">
              {menuItems.map((item) => (
                <a // <--- CORREÇÃO APLICADA AQUI
                  key={item.label}
                  href={item.href}
                  className="text-white font-medium hover:opacity-90 transition-opacity relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            {/* CTA Desktop */}
            <button
              onClick={handleWhatsApp}
              className="hidden lg:block bg-white text-[#eb6601] px-6 py-3 rounded-full font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
              Falar com Especialista
            </button>

            {/* Hamburger Mobile */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-white"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-[112px] gradient-orange-135 z-40 overflow-y-auto">
            <nav className="flex flex-col items-center justify-center min-h-full gap-8 py-8">
              {menuItems.map((item) => (
                <a // <--- Este já estava correto, mas mantido para integridade
                  key={item.label}
                  href={item.href}
                  className="text-white text-xl font-medium hover:opacity-90 transition-opacity"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <button
                onClick={() => {
                  handleWhatsApp();
                  setMobileMenuOpen(false);
                }}
                className="bg-white text-[#eb6601] px-8 py-3 rounded-full font-semibold text-lg mt-4"
              >
                Falar com Especialista
              </button>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;