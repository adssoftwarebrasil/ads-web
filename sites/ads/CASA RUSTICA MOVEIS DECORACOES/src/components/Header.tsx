import { useState } from 'react';
import { Instagram, Facebook, Phone, Menu, X } from 'lucide-react';
import { INSTAGRAM, FACEBOOK, WHATSAPP_MSG, LOGO, scrollToSection } from '../shared';

const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Produtos', id: 'produtos' },
  { label: 'Como Funciona', id: 'como-funciona' },
  { label: 'Contato', id: 'contato' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const go = (id: string) => {
    setOpen(false);
    scrollToSection(id);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <img src={LOGO} alt="Casa Rústica Uberlândia" className="h-12 md:h-16 w-auto" />
          </div>
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                className="text-gray-700 hover:text-[rgb(5,86,77)] transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-[rgb(5,86,77)] transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href={FACEBOOK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-[rgb(5,86,77)] transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href={WHATSAPP_MSG}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-[rgb(248,177,1)] text-white px-4 py-2 rounded-lg hover:bg-[rgb(228,157,0)] transition-colors font-medium"
            >
              <Phone className="w-4 h-4" />
              <span>(34) 99726-4665</span>
            </a>
          </div>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden text-gray-700 hover:text-[rgb(5,86,77)] transition-colors"
            aria-label="Menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden bg-white/95 backdrop-blur-sm border-t border-gray-100">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                className="text-left text-gray-700 hover:text-[rgb(5,86,77)] transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
            <a
              href={WHATSAPP_MSG}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-[rgb(248,177,1)] text-white px-4 py-2 rounded-lg hover:bg-[rgb(228,157,0)] transition-colors font-medium"
            >
              <Phone className="w-4 h-4" />
              <span>(34) 99726-4665</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
