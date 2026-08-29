import { useState } from 'react';
import { Phone, Mail, Menu } from 'lucide-react';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Vantagens', id: 'vantagens' },
  { label: 'Depoimentos', id: 'depoimentos' },
  { label: 'Contato', id: 'contato' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black/95 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20 lg:h-20">
            <div className="flex-shrink-0">
              <img
                src="https://storage.lucasmendes.dev/site-sp/box40%2Fimg%2Fbox40logo.png"
                alt="Box 40 Logo"
                className="h-12 lg:h-14"
              />
            </div>
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="text-white hover:text-gold transition-colors duration-300 font-medium"
                >
                  {item.label}
                </button>
              ))}
            </nav>
            <div className="hidden lg:flex items-center space-x-6">
              <a
                href="tel:+556198423838"
                className="flex items-center space-x-2 text-gold hover:text-gold-light transition-colors"
              >
                <Phone size={18} className="lucide lucide-phone " />
                <span className="font-medium">(61) 98432-3838</span>
              </a>
              <a
                href="mailto:contato@box40.com.br"
                className="flex items-center space-x-2 text-gold hover:text-gold-light transition-colors"
              >
                <Mail size={18} className="lucide lucide-mail " />
                <span className="font-medium">contato@box40.com.br</span>
              </a>
            </div>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="lg:hidden text-gold p-2"
              aria-label="Toggle menu"
            >
              <Menu size={28} className="lucide lucide-menu " />
            </button>
          </div>
        </div>
      </header>
      <div
        className={`fixed inset-0 bg-black z-40 lg:hidden transition-transform duration-300 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: '80px' }}
      >
        <nav className="flex flex-col items-center justify-center h-full space-y-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-white hover:text-gold transition-colors duration-300 text-2xl font-medium"
            >
              {item.label}
            </button>
          ))}
          <div className="flex flex-col items-center space-y-4 pt-8 border-t border-gold/30">
            <a href="tel:+556198423838" className="flex items-center space-x-2 text-gold text-lg">
              <Phone size={20} className="lucide lucide-phone " />
              <span>(61) 98432-3838</span>
            </a>
            <a href="mailto:contato@box40.com.br" className="flex items-center space-x-2 text-gold text-lg">
              <Mail size={20} className="lucide lucide-mail " />
              <span>contato@box40.com.br</span>
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
