import { useEffect, useState } from 'react';
import { Headphones, Menu, Phone, Clock } from 'lucide-react';
import { navItems, scrollToSection } from '../lib/nav';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (id: string) => {
    setIsOpen(false);
    scrollToSection(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-[#3d009e] ${
        isScrolled ? 'shadow-lg' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
          <div className="flex items-center flex-shrink-0">
            <button
              onClick={() => handleNav('home')}
              className="focus:outline-none focus:ring-2 focus:ring-white/50 rounded-lg transition-transform hover:scale-105"
            >
              <img
                src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=sati%2Fimage%2040.png&version_id=null"
                alt="Sati Telecom"
                className="transition-all duration-300 h-10 sm:h-12 lg:h-16"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </button>
          </div>
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="text-white hover:text-gray-200 transition-all duration-300 px-3 xl:px-4 py-2 rounded-lg hover:bg-white/10 font-medium text-sm xl:text-base relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#bc0000] group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://satitelecomunicacoes.my3cx.com.br:5001/suporte"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white text-[#3d009e] px-4 xl:px-5 py-2.5 xl:py-3 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-sm xl:text-base whitespace-nowrap"
            >
              <Headphones className="lucide lucide-headphones w-5 h-5" />
              <span>Clique para Ligar</span>
            </a>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Menu"
          >
            <Menu className="lucide lucide-menu w-6 h-6" />
          </button>
        </div>
      </div>
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[#2d0075] border-t border-white/10">
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="block text-white hover:text-gray-200 hover:bg-white/10 transition-all w-full text-left py-3 px-4 rounded-lg font-medium"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-3 border-t border-white/20 space-y-3 mt-3">
              <a
                href="tel:4933613600"
                className="flex items-center text-white hover:text-gray-200 transition-colors py-2 px-2"
              >
                <Phone className="lucide lucide-phone w-5 h-5 mr-3 flex-shrink-0" />
                <span className="font-medium">(49) 3361-3600</span>
              </a>
              <a
                href="tel:08003636036"
                className="flex items-center text-white hover:text-gray-200 transition-colors py-2 px-2"
              >
                <Phone className="lucide lucide-phone w-5 h-5 mr-3 flex-shrink-0" />
                <span className="font-medium">0800 363-6036</span>
              </a>
              <div className="flex items-start text-white text-sm py-2 px-2">
                <Clock className="lucide lucide-clock w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                <span>Seg-Sex: 8h-12h | 13h30-18h</span>
              </div>
              <div className="flex items-center space-x-4 pt-2 px-2">
                <a
                  href="https://www.instagram.com/satitelecom/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-200 transition-colors p-2 hover:bg-white/10 rounded-lg"
                  aria-label="Instagram"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/satitelecom"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-200 transition-colors p-2 hover:bg-white/10 rounded-lg"
                  aria-label="Facebook"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </div>
            </div>
            <a
              href="https://satitelecomunicacoes.my3cx.com.br:5001/suporte"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-white text-[#3d009e] px-6 py-3.5 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 w-full shadow-lg mt-4"
            >
              <Headphones className="lucide lucide-headphones w-5 h-5" />
              <span>Clique para Ligar</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
