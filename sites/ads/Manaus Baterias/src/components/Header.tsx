import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';

export function Header() {
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
    { label: 'Sobre', href: '#about' },
    { label: 'Serviços', href: '#services' },
    { label: 'Vantagens', href: '#advantages' },
    { label: 'Depoimentos', href: '#testimonials' },
    { label: 'Contato', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a href="#hero" className="flex items-center space-x-3">
            <img
              src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=sos-baterias%2Fmanausbaterias.png&version_id=null"
              alt="SOS Baterias e Radiadores"
              className="h-16 w-auto"
            />
          </a>

          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[#1E3A8A] hover:text-[#FF6B00] transition-colors relative group font-medium"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF6B00] transition-all group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex flex-col text-right">
              <a
                href="tel:+5592981059681"
                className="flex items-center space-x-2 text-[#1E3A8A] hover:text-[#FF6B00] transition-colors font-medium text-sm"
              >
                <Phone className="w-4 h-4" />
                <span className="font-semibold">(92) 98105-9681</span>
              </a>
              <a
                href="tel:+5592995262436"
                className="flex items-center space-x-2 text-[#1E3A8A] hover:text-[#FF6B00] transition-colors font-medium text-sm"
              >
                <Phone className="w-4 h-4" />
                <span className="font-semibold">(92) 99526-2436</span>
              </a>
            </div>
            <a
              href="https://wa.me/5592981059681"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#059669] text-white px-6 py-3 rounded-lg hover:bg-[#047857] transition-all hover:scale-105 animate-pulse-slow"
            >
              WhatsApp
            </a>
          </div>

          <button
            className="lg:hidden text-[#1E3A8A]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-[#1E3A8A] hover:text-[#FF6B00] transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="tel:+5592981059681"
                className="flex items-center space-x-2 text-[#1E3A8A] hover:text-[#FF6B00] transition-colors font-medium"
              >
                <Phone className="w-5 h-5" />
                <span className="font-semibold">(92) 98105-9681</span>
              </a>
              <a
                href="tel:+5592995262436"
                className="flex items-center space-x-2 text-[#1E3A8A] hover:text-[#FF6B00] transition-colors font-medium"
              >
                <Phone className="w-5 h-5" />
                <span className="font-semibold">(92) 99526-2436</span>
              </a>
              <a
                href="https://wa.me/5592981059681"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#059669] text-white px-6 py-3 rounded-lg hover:bg-[#047857] transition-all text-center"
              >
                WhatsApp 1
              </a>
              <a
                href="https://wa.me/5592995262436"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#059669] text-white px-6 py-3 rounded-lg hover:bg-[#047857] transition-all text-center"
              >
                WhatsApp 2
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}