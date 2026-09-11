import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Produtos', id: 'produtos' },
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
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-white/95 backdrop-blur-sm py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src="https://storage.lucasmendes.dev/site-sp/lr%20personalizacoes%2Fimg%2Flogo.jpg"
              alt="LR Personalizações"
              className="h-12 w-auto rounded-lg shadow-md"
            />
            <div className="hidden md:block">
              <h1 className="text-xl font-bold text-[rgb(0,33,78)]">LR PERSONALIZAÇÕES</h1>
              <p className="text-xs text-gray-600">Há 20 anos personalizando sonhos</p>
            </div>
          </div>
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-gray-700 hover:text-[rgb(203,13,13)] transition-colors font-medium"
              >
                {link.label}
              </button>
            ))}
          </nav>
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm">
              <Phone width={16} height={16} className="lucide lucide-phone text-[rgb(203,13,13)]" />
              <span className="text-gray-700">(62) 3206-5937</span>
            </div>
            <a
              href="https://wa.me/5562985597671"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[rgb(203,13,13)] text-white px-6 py-2 rounded-full hover:bg-[rgb(180,11,11)] transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
            >
              Solicitar Orçamento
            </a>
          </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-gray-700 hover:text-[rgb(203,13,13)] transition-colors"
            aria-label="Menu"
          >
            {menuOpen ? (
              <X width={28} height={28} className="lucide lucide-x " />
            ) : (
              <Menu width={28} height={28} className="lucide lucide-menu " />
            )}
          </button>
        </div>
        {menuOpen && (
          <nav className="lg:hidden mt-4 flex flex-col space-y-3 pb-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-left text-gray-700 hover:text-[rgb(203,13,13)] transition-colors font-medium"
              >
                {link.label}
              </button>
            ))}
            <a
              href="https://wa.me/5562985597671"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[rgb(203,13,13)] text-white px-6 py-2 rounded-full hover:bg-[rgb(180,11,11)] transition-all duration-300 font-medium shadow-lg text-center"
            >
              Solicitar Orçamento
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
