import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const WHATSAPP_URL = 'http://wa.me/553399711500';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Depoimentos', id: 'depoimentos' },
  { label: 'Contato', id: 'contato' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-sm py-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="https://storage.lucasmendes.dev/site-sp/dra%20marcela%20laender%2Fimg%2Flogo-sem-fundo.webp"
              alt="Dra. Marcela Laender"
              className="h-12 sm:h-16 w-auto"
            />
          </div>
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-[#613C45] hover:text-[#D88B9B] transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:block bg-[#613C45] text-white px-6 py-3 rounded-full hover:bg-[#D88B9B] transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Agendar Consulta
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-[#613C45] p-2"
            aria-label="Menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        {menuOpen && (
          <nav className="lg:hidden mt-4 flex flex-col space-y-2 pb-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-[#613C45] hover:text-[#D88B9B] transition-colors font-medium text-left py-2"
              >
                {item.label}
              </button>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#613C45] text-white px-6 py-3 rounded-full hover:bg-[#D88B9B] transition-all duration-300 font-medium text-center mt-2"
            >
              Agendar Consulta
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
