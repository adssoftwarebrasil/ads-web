import { useEffect, useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Início', target: 'hero' },
  { label: 'Produtos', target: 'featured-products' },
  { label: 'Sobre Nós', target: 'about' },
  { label: 'Avaliações', target: 'testimonials' },
  { label: 'Contato', target: 'contact' },
];

const WHATSAPP_URL =
  'https://wa.me/553497228602?text=Olá! Vim pelo site e gostaria de mais informações sobre os suplementos.';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <img
                src="https://storage.lucasmendes.dev/site-sp/sowfit/img/logo-fundo-preto.webp"
                alt="SowFit Suplementos"
                className="h-10 md:h-12"
              />
            </div>
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollTo(item.target)}
                  className={`font-medium relative group ${
                    isScrolled ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-primary'
                  }`}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </nav>
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="tel:3434807593"
                className={`flex items-center space-x-2 ${
                  isScrolled ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-primary'
                }`}
              >
                <Phone className="w-5 h-5" />
                <span className="font-medium">(34) 3480-7593</span>
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-lg font-semibold transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                WhatsApp
              </a>
            </div>
            <button
              onClick={() => setIsOpen((v) => !v)}
              className={`lg:hidden ${isScrolled ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-primary'}`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-2xl z-50 transform transition-transform duration-400 ease-in-out lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-24 px-6">
          <nav className="flex flex-col space-y-6">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.target)}
                className="text-lg text-gray-700 hover:text-primary font-medium text-left transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="mt-8 space-y-4">
            <a href="tel:3434807593" className="flex items-center space-x-2 text-gray-700 hover:text-primary">
              <Phone className="w-5 h-5" />
              <span className="font-medium">(34) 3480-7593</span>
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-lg font-semibold text-center transition-all"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
