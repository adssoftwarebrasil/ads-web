import { useState } from 'react';
import { Phone, Mail, Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Vantagens', id: 'vantagens' },
  { label: 'Depoimentos', id: 'depoimentos' },
  { label: 'Contato', id: 'contato' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <img
              src="https://storage.lucasmendes.dev/site-sp/pjtapete%2Flogo.png"
              alt="PJ Tapetes"
              className="h-12 w-auto"
            />
          </div>
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, i) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={
                  i === 0
                    ? 'text-sm font-medium transition-colors text-[rgb(183,40,26)]'
                    : 'text-sm font-medium transition-colors text-[rgb(15,15,13)] hover:text-[rgb(183,40,26)]'
                }
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="hidden xl:flex items-center space-x-6 text-sm text-[rgb(15,15,13)]">
            <a
              href="tel:+556230951429"
              className="flex items-center space-x-2 hover:text-[rgb(183,40,26)] transition-colors"
            >
              <Phone className="lucide lucide-phone" width={16} height={16} />
              <span>(62) 3095-1429</span>
            </a>
            <a
              href="mailto:contato@pjtapetes.com.br"
              className="flex items-center space-x-2 hover:text-[rgb(183,40,26)] transition-colors"
            >
              <Mail className="lucide lucide-mail" width={16} height={16} />
              <span>contato@pjtapetes.com.br</span>
            </a>
          </div>
          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="lg:hidden text-[rgb(15,15,13)] p-2"
            aria-label="Menu"
          >
            {mobileOpen ? (
              <X className="lucide lucide-x" width={24} height={24} />
            ) : (
              <Menu className="lucide lucide-menu" width={24} height={24} />
            )}
          </button>
        </div>
      </div>
      {mobileOpen && (
        <nav className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="block w-full text-left text-sm font-medium text-[rgb(15,15,13)] hover:text-[rgb(183,40,26)] transition-colors py-2"
            >
              {item.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
