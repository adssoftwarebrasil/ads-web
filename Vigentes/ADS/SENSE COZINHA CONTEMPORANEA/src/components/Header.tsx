import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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
    { label: 'Início', href: '#hero' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Nossa Cozinha', href: '#cozinha' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Localização', href: '#localizacao' },
    { label: 'Contato', href: '#contato' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#hero" className="flex items-center" onClick={(e) => scrollToSection(e, '#hero')}>
            <img
              src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=SENSE%20COZINHA%20CONTEMPORANEA%2Fimgi_7_568389501_18389071909121202_2066482576358897888_n_1-removebg-preview.png&version_id=null"
              alt="Sense Cozinha Contemporânea - Buffet a quilo contemporâneo em Goiânia"
              className="h-12 md:h-16 w-auto"
              loading="eager"
            />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`text-sm font-medium transition-colors hover:text-orange-primary ${
                  isScrolled ? 'text-warm-gray' : 'text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="https://wa.me/556239267006?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informações."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-block px-6 py-2 bg-orange-primary text-white rounded-full hover:bg-orange-dark transition-colors"
          >
            Fale Conosco
          </a>

          <button
            className={`md:hidden ${isScrolled ? 'text-warm-gray' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="block px-4 py-3 text-warm-gray hover:bg-cream transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://wa.me/556239267006?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informações."
              target="_blank"
              rel="noopener noreferrer"
              className="block mx-4 mt-3 px-6 py-2 bg-orange-primary text-white rounded-full text-center hover:bg-orange-dark transition-colors"
            >
              Fale Conosco
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
