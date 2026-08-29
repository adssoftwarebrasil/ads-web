import { useState, useEffect } from 'react';
import { Phone, Mail, Menu, X } from 'lucide-react';

const NAV_ITEMS: { label: string; id: string }[] = [
  { label: 'Início', id: 'hero' },
  { label: 'Sobre', id: 'about' },
  { label: 'Serviços', id: 'services' },
  { label: 'Vantagens', id: 'advantages' },
  { label: 'Depoimentos', id: 'testimonials' },
  { label: 'Contato', id: 'contact' },
];

interface HeaderProps {
  onNavigate: (id: string) => void;
}

export default function Header({ onNavigate }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleNav = (id: string) => {
    onNavigate(id);
    setMenuOpen(false);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 text-white bg-[rgb(34,2,34)] "
      style={{ height: '80px' }}
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="https://storage.lucasmendes.dev/site-sp/acai%20e%20granola%2Fimg%2Flogo.png"
            alt="ACAI & GRANOLA"
            className="h-12 md:h-16"
            loading="eager"
          />
        </div>
        <nav className="hidden lg:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className="text-white/90 hover:text-white hover:opacity-100 transition-all duration-300 font-medium text-sm uppercase tracking-wide"
            >
              {item.label}
            </button>
          ))}
        </nav>
        <div className="hidden lg:flex items-center space-x-6">
          <a
            href="tel:+5583998415555"
            className="flex items-center space-x-2 text-white/90 hover:text-white transition-colors"
          >
            <Phone size={18} className="lucide lucide-phone " />
            <span className="text-sm font-medium">(83) 99841-5555</span>
          </a>
          <a
            href="mailto:acaigranola@gmail.com"
            className="flex items-center space-x-2 text-white/90 hover:text-white transition-colors"
          >
            <Mail size={18} className="lucide lucide-mail " />
            <span className="text-sm font-medium">acaigranola@gmail.com</span>
          </a>
        </div>
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="lg:hidden text-white hover:text-gray-200 transition-colors"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} className="lucide lucide-menu " />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-[rgb(34,2,34)] border-t border-white/10">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-2">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="text-left text-white/90 hover:text-white transition-all duration-300 font-medium text-sm uppercase tracking-wide py-2"
              >
                {item.label}
              </button>
            ))}
            <a
              href="tel:+5583998415555"
              className="flex items-center space-x-2 text-white/90 hover:text-white transition-colors py-2"
            >
              <Phone size={18} />
              <span className="text-sm font-medium">(83) 99841-5555</span>
            </a>
            <a
              href="mailto:acaigranola@gmail.com"
              className="flex items-center space-x-2 text-white/90 hover:text-white transition-colors py-2"
            >
              <Mail size={18} />
              <span className="text-sm font-medium">acaigranola@gmail.com</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
