import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Início', target: 'inicio' },
  { label: 'Sobre Nós', target: 'sobre' },
  { label: 'Serviços', target: 'servicos' },
  { label: 'Diferenciais', target: 'diferenciais' },
  { label: 'Contato', target: 'contato' },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <img
              src="https://storage.lucasmendes.dev/site-sp/netcon%2FLOGO%20PNG.png"
              alt="NetCon Contabilidade"
              className="h-16"
            />
          </div>
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.target}
                onClick={() => scrollTo(item.target)}
                className="text-[rgb(0,0,87)] hover:text-[rgb(211,0,0)] transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <a
            href="https://wa.me/5595991548154"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block bg-[rgb(0,0,87)] text-white px-6 py-3 rounded-lg hover:bg-[rgb(0,0,107)] transition-colors font-medium"
          >
            Fale com um Especialista
          </a>
          <button
            className="md:hidden text-[rgb(0,0,87)]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.target}
              onClick={() => scrollTo(item.target)}
              className="block w-full text-left py-2 text-[rgb(0,0,87)] hover:text-[rgb(211,0,0)] transition-colors font-medium"
            >
              {item.label}
            </button>
          ))}
          <a
            href="https://wa.me/5595991548154"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-[rgb(0,0,87)] text-white px-6 py-3 rounded-lg hover:bg-[rgb(0,0,107)] transition-colors font-medium text-center"
          >
            Fale com um Especialista
          </a>
        </div>
      )}
    </header>
  );
}

export default Header;
