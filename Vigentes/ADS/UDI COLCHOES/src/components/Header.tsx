import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

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

  const menuItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre Nós', href: '#sobre' },
    { label: 'Produtos', href: '#produtos' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleMenuClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/98 backdrop-blur-md shadow-lg py-3'
            : 'bg-white/95 backdrop-blur-sm shadow-md py-4'
        } border-b ${isScrolled ? 'border-accent-pastel' : 'border-white/20'}`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between">
            <a href="#inicio" className="flex-shrink-0">
              <img
                src="https://storage.lucasmendes.dev/site-sp/udicolch%C3%B5es%2Fimgi_1_528393621_17851273047526911_4732640726402337357_n%201.png"
                alt="UDI Colchões"
                className="h-12 md:h-14 lg:h-16 w-auto"
              />
            </a>

            <nav className="hidden lg:flex items-center gap-8">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleMenuClick(item.href);
                  }}
                  className="text-primary font-medium hover:text-primary-vibrant transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-vibrant transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-4">
              <div className="flex items-center gap-2 text-primary font-semibold">
                <Phone size={18} />
                <a href="tel:+5534996610265" className="hover:text-primary-vibrant transition-colors">
                  (34) 99661-0265
                </a>
              </div>
              <span className="text-accent-soft">|</span>
              <div className="px-4 py-2 bg-primary-vibrant text-white rounded-full text-sm font-semibold animate-pulse">
                12x sem juros
              </div>
              <a
                href="https://wa.me/5534996610265"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-primary-vibrant text-white rounded-lg font-semibold hover:bg-primary-medium transition-all hover:scale-105 shadow-lg"
              >
                Falar no WhatsApp
              </a>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-primary hover:text-primary-vibrant transition-colors"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-primary/80 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          <div className="absolute right-0 top-0 bottom-0 w-80 max-w-full bg-white shadow-2xl animate-slide-in-right">
            <div className="flex flex-col h-full pt-24 px-8">
              <nav className="flex flex-col gap-6">
                {menuItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleMenuClick(item.href);
                    }}
                    className="text-lg text-primary font-semibold hover:text-primary-vibrant transition-colors hover:pl-2"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <div className="mt-8 pt-8 border-t border-accent-pastel">
                <a
                  href="tel:+5534996610265"
                  className="flex items-center gap-3 text-primary font-semibold mb-4"
                >
                  <Phone size={20} />
                  (34) 99661-0265
                </a>
                <a
                  href="https://wa.me/5534996610265"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-6 py-3 bg-primary-vibrant text-white rounded-lg font-semibold text-center hover:bg-primary-medium transition-all shadow-lg"
                >
                  Falar no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
