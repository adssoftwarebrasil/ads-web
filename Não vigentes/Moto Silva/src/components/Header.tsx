import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', id: 'hero' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Vantagens', id: 'vantagens' },
  { label: 'Contratar', id: 'contratar' },
  { label: 'Depoimentos', id: 'depoimentos' },
  { label: 'Contato', id: 'contato' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-[#FFE600]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-4">
            <img
              src="https://storage.lucasmendes.dev/site-sp/motosilv/logo.png"
              alt="MotoSilva Logo"
              className="h-12 w-auto"
            />
          </div>
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-white hover:text-[#FFE600] transition-colors duration-300 font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:1937137007"
              className="flex items-center space-x-2 text-white hover:text-[#FFE600] transition-colors duration-300"
            >
              <Phone className="w-5 h-5" />
              <span className="font-medium">(19) 3713-7007</span>
            </a>
          </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white hover:text-[#FFE600] transition-colors duration-300"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {menuOpen && (
          <nav className="lg:hidden pb-4 flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-white hover:text-[#FFE600] transition-colors duration-300 font-medium text-left py-2"
              >
                {item.label}
              </button>
            ))}
            <a
              href="tel:1937137007"
              className="flex items-center space-x-2 text-white hover:text-[#FFE600] transition-colors duration-300 py-2"
            >
              <Phone className="w-5 h-5" />
              <span className="font-medium">(19) 3713-7007</span>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
