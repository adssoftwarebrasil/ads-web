import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const menuItems = [
    { label: 'Início', id: 'hero' },
    { label: 'Sobre', id: 'sobre' },
    { label: 'Serviços', id: 'servicos' },
    { label: 'Vantagens', id: 'vantagens' },
    { label: 'Depoimentos', id: 'depoimentos' },
    { label: 'Contato', id: 'contato' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 bg-white z-[1000] transition-shadow duration-300 ${
        isScrolled ? 'shadow-md' : 'shadow-sm'
      }`}
      role="banner"
      aria-label="Cabeçalho principal"
    >
      <div className="max-w-[1320px] mx-auto px-6 md:px-10 h-[85px] flex items-center justify-between">
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('hero');
          }}
          className="flex items-center gap-2 md:gap-4"
          aria-label="Lamar Neto - Ir para o início"
        >
          {/* LOGO 1 - Reduzida */}
          <img
            src="https://storage.lucasmendes.dev/site-sp/lamarneto%2Flamar-neto-agronegocios_1_-logo-nova-sem-fundo.png"
            alt="Lamar Neto Logo"
            // ALTERAÇÃO: Altura reduzida para h-40px (mobile) e h-55px (desktop)
            className="h-[40px] md:h-[55px] w-auto"
            loading="eager"
          />
          
          {/* LOGO 2 - Reduzida */}
          <img
            src="https://storage.lucasmendes.dev/site-sp/lamarneto%2Flogomarca-sem-fundo.webp"
            alt="Lamar Neto Agronegócios"
            // ALTERAÇÃO: Altura reduzida para h-40px (mobile) e h-55px (desktop)
            className="h-[40px] md:h-[55px] w-auto"
            loading="eager"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-2" role="navigation" aria-label="Menu principal">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
              }}
              className="text-[#324422] text-[15px] font-medium px-[18px] py-[10px] hover:text-[#fbbf1f] hover:border-b-[3px] hover:border-[#fbbf1f] transition-all duration-300"
              style={{ letterSpacing: '0.3px' }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="https://wa.me/5566984082396?text=Olá!%20Vim%20do%20site%20e%20gostaria%20de%20mais%20informações%20sobre%20comercialização%20de%20grãos"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:flex items-center gap-2 bg-[#fbbf1f] text-[#383838] px-7 py-3 rounded-full text-sm font-semibold hover:bg-[#faa431] button-hover shadow-lg"
          style={{ boxShadow: '0 4px 12px rgba(251, 191, 31, 0.3)' }}
          aria-label="Abrir conversa no WhatsApp"
        >
          <MessageCircle className="w-5 h-5" />
          <span>WHATSAPP</span>
        </a>

        <button
          className="lg:hidden text-[#324422] p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <X className="w-7 h-7 transition-transform duration-300" />
          ) : (
            <Menu className="w-7 h-7 transition-transform duration-300" />
          )}
        </button>
      </div>

      {isMobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-[998] lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <nav
            className="fixed top-0 right-0 bottom-0 w-[280px] bg-white shadow-2xl z-[999] lg:hidden animate-slide-in-right"
            role="navigation"
            aria-label="Menu mobile"
          >
            <div className="flex flex-col p-6 pt-24">
              {menuItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                  className="text-[#383838] text-base font-medium py-4 border-b border-gray-200 hover:text-[#688631] hover:pl-2 transition-all duration-300"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="https://wa.me/5566984082396?text=Olá!%20Vim%20do%20site%20e%20gostaria%20de%20mais%20informações%20sobre%20comercialização%20de%20grãos"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#fbbf1f] text-[#383838] px-6 py-3 rounded-full text-sm font-semibold mt-6 hover:bg-[#faa431] transition-colors"
                aria-label="Abrir conversa no WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WHATSAPP</span>
              </a>
            </div>
          </nav>
        </>
      )}
    </header>
  );
}