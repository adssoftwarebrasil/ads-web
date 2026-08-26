import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Avaliações', id: 'avaliacoes' },
  { label: 'Contato', id: 'contato' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <img
              src="https://storage.lucasmendes.dev/site-sp/coruja%20carretinha%2Fimg%2Flogo-sem-fundo.webp"
              alt="Coruja Carretinha"
              className="h-16 w-auto"
            />
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-[rgb(253,253,253)] hover:text-[rgb(242,150,1)] transition-colors duration-300 font-medium"
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://wa.me/5571986462034"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[rgb(242,150,1)] text-[rgb(25,47,79)] px-6 py-2.5 rounded-full font-semibold hover:bg-[rgb(242,150,1)]/90 transition-all duration-300 hover:scale-105"
            >
              <Phone className="w-4 h-4" />
              Fale Conosco
            </a>
          </nav>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-[rgb(253,253,253)] hover:text-[rgb(242,150,1)] transition-colors"
            aria-label="Menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden pb-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-left text-[rgb(253,253,253)] hover:text-[rgb(242,150,1)] transition-colors duration-300 font-medium"
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://wa.me/5571986462034"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[rgb(242,150,1)] text-[rgb(25,47,79)] px-6 py-2.5 rounded-full font-semibold hover:bg-[rgb(242,150,1)]/90 transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              Fale Conosco
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
