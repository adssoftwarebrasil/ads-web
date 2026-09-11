import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const STORE_URL = 'https://www.lojamodrali.com.br';

interface HeaderProps {
  onScrollTo: (id: string) => void;
}

export function Header({ onScrollTo }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNav = (id: string) => {
    onScrollTo(id);
    setIsMenuOpen(false);
  };

  return (
    // Mudança: bg-white e shadow suave
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => handleNav('inicio')}
            className="flex-shrink-0 transition-transform duration-300 hover:scale-105"
          >
            <img
              src="https://storage.lucasmendes.dev/site-sp/lojamodrali/logo.webp"
              alt="MODRALI Logo"
              className="h-14 w-auto"
            />
          </button>

          <nav className="hidden md:flex items-center space-x-6">
            {[
              { label: 'Início', id: 'inicio' },
              { label: 'Sobre', id: 'sobre' },
              { label: 'Promoções', id: 'promocoes' },
              { label: 'Categorias', id: 'categorias' },
              { label: 'Produtos', id: 'produtos' },
              { label: 'Contato', id: 'contato' }
            ].map(({ label, id }) => (
              <button
                key={id}
                onClick={() => handleNav(id)}
                className="text-gray-700 hover:text-[#FF8337] transition-colors duration-300 font-medium text-sm"
              >
                {label}
              </button>
            ))}
            <a
              href={STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FF8337] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#e67430] transition-all duration-300 hover:scale-105 shadow-lg text-sm"
            >
              Acessar Loja
            </a>
          </nav>

          {/* Botão Mobile ajustado para fundo claro */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#00476F] p-2 hover:bg-gray-100 rounded-lg transition-colors duration-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile ajustado */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4 space-y-3">
            {[
              { label: 'Início', id: 'inicio' },
              { label: 'Promoções', id: 'promocoes' },
              { label: 'Categorias', id: 'categorias' },
              { label: 'Produtos', id: 'produtos' },
              { label: 'Sobre', id: 'sobre' },
              { label: 'Contato', id: 'contato' }
            ].map(({ label, id }) => (
              <button
                key={id}
                onClick={() => handleNav(id)}
                className="block w-full text-left text-gray-700 hover:text-[#FF8337] transition-colors duration-300 py-2 font-medium"
              >
                {label}
              </button>
            ))}
            <a
              href={STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-[#FF8337] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#e67430] transition-all duration-300"
            >
              Acessar Loja
            </a>
          </div>
        </div>
      )}
    </header>
  );
}