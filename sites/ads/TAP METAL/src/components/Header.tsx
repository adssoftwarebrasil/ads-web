import { useState } from 'react';
import { Menu } from 'lucide-react';

const WHATSAPP = 'http://wa.me/5562985811343';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Diferenciais', id: 'diferenciais' },
  { label: 'Projetos', id: 'projetos' },
  { label: 'Contato', id: 'contato' },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          <div className="flex-shrink-0">
            <img
              src="https://storage.lucasmendes.dev/site-sp/tap%20metal%2Flogo%2Ftap-logo-sem%20fundo.png"
              alt="TAP Metal Logo"
              className="h-12 lg:h-16 w-auto object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-[rgba(198,198,207)] hover:text-[rgba(12,132,227)] transition-colors duration-300 text-sm font-medium uppercase tracking-wide"
              >
                {item.label}
              </button>
            ))}
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[rgba(12,132,227)] hover:bg-[rgba(12,132,227,0.8)] text-white px-6 py-2.5 rounded-full transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Solicitar Orçamento
            </a>
          </nav>
          <button
            onClick={() => setIsOpen((v) => !v)}
            className="lg:hidden text-white hover:text-[rgba(12,132,227)] transition-colors duration-300"
            aria-label="Toggle menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </div>
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <nav className="bg-[rgba(9,9,35,0.98)] backdrop-blur-md border-t border-[rgba(198,198,207,0.1)]">
          <div className="container mx-auto px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="block w-full text-left text-[rgba(198,198,207)] hover:text-[rgba(12,132,227)] hover:bg-[rgba(12,132,227,0.1)] px-4 py-3 rounded-lg transition-all duration-300 text-base font-medium"
              >
                {item.label}
              </button>
            ))}
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-[rgba(12,132,227)] hover:bg-[rgba(12,132,227,0.8)] text-white px-6 py-3 rounded-full transition-all duration-300 font-semibold mt-4"
            >
              Solicitar Orçamento
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
