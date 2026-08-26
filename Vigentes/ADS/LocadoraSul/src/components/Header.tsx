import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'Quem Somos', href: '#quem-somos' },
    { label: 'Equipamentos', href: '#equipamentos' },
    { label: 'Contato', href: '#contato' }
  ];

  const handleMenuClick = (href: string) => {
    setIsMenuOpen(false);
    
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        // Ajuste este valor se o Header ficar por cima do conteúdo ao rolar
        const headerOffset = 100; 
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-2 md:py-3"> {/* Padding reduzido para acomodar logo maior */}
        <div className="flex items-center justify-between">
          
          {/* LOGOMARCA AUMENTADA: h-16 no mobile e h-24 no desktop */}
          <img 
            src="https://storage.lucasmendes.dev/site-sp/locadorasul%2Flogo.png" 
            alt="Locadora Sul" 
            className="h-16 md:h-20 w-auto object-contain transition-all"
          />

          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <a key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleMenuClick(item.href);
                }}
                className="text-gray-700 hover:text-blue-600 font-bold text-lg transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X size={32} className="text-[#0072BA]" /> : <Menu size={32} className="text-[#0072BA]" />}
          </button>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <nav className="md:hidden mt-2 pb-4 border-t border-gray-100">
            {menuItems.map((item) => (
              <a key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleMenuClick(item.href);
                }}
                className="block py-4 text-gray-700 hover:text-blue-600 font-medium border-b border-gray-50"
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}