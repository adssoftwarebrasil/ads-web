import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Header = () => {
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
    { label: 'Produtos', href: '#produtos' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Contato', href: '#contato' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        isScrolled ? 'shadow-md' : ''
      }`}
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-20">
          <div className="flex-shrink-0">
            <img
              src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=wec%20digital%2FWhatsApp%20Image%202025-11-18%20at%2020.35.34-Photoroom.png&version_id=null"
              alt="W&C Digital"
              className="h-12 lg:h-14 w-auto"
            />
          </div>

          <ul className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-gray-700 hover:text-[rgb(237,27,38)] font-medium transition-colors duration-200 relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[rgb(237,27,38)] group-hover:w-full transition-all duration-200"></span>
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <a
              href="https://wa.me/c/558491775185"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[rgb(237,27,38)] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[rgb(217,17,28)] transition-colors duration-200"
            >
              Ver Catálogo
            </a>
          </div>

          <button
            className="md:hidden text-[rgb(237,27,38)] p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 animate-in fade-in slide-in-from-top duration-200">
            <ul className="flex flex-col space-y-3">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="block text-gray-700 hover:text-[rgb(237,27,38)] font-medium py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://wa.me/c/558491775185"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-[rgb(237,27,38)] text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-[rgb(217,17,28)] transition-colors duration-200"
                >
                  Ver Catálogo
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};
