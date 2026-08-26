import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Início', href: '#inicio' },
     { label: 'Sobre', href: '#sobre' },
    { label: 'Produtos', href: '#produtos' },
   
    { label: 'Serviços', href: '#servicos' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Contato', href: '#contato' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <img
              src="https://storage.lucasmendes.dev/site-sp/muralhacorretora/logo.png"
              alt="Muralha Corretora"
              className="h-12 w-auto"
            />
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-neutral-700 hover:text-primary font-medium transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a
              href="https://api.whatsapp.com/send?phone=558191952020&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Acabei%20de%20visitar%20o%20site%20poderia%20me%20falar%20um%20pouco%20mais%20sobre%20seus%20servi%C3%A7os%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              WHATSAPP
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-neutral-700 hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-neutral-200">
          <nav className="px-4 pt-4 pb-6 space-y-3">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="block text-neutral-700 hover:text-primary font-medium py-2 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://api.whatsapp.com/send?phone=558191952020&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Acabei%20de%20visitar%20o%20site%20poderia%20me%20falar%20um%20pouco%20mais%20sobre%20seus%20servi%C3%A7os%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-primary hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold text-center transition-all duration-300"
            >
              WHATSAPP
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
