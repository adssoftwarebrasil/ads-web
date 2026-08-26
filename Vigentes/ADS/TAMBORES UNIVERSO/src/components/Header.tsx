import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // O efeito de scroll já não é necessário para a cor de fundo, mas pode ser mantido
  // para futuras funcionalidades ou para aplicar um efeito sutil (como shadow).
  // No entanto, para simplificar e garantir que seja SEMPRE branca, podemos removê-lo
  // se ele só servia para mudar a cor de fundo/texto.

  const menuItems = [
    { label: 'Nossa História', href: '#historia' },
    { label: 'Nossos Produtos', href: '#produtos' },
    { label: 'Chapas PEAD', href: '#chapas' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Contato', href: '#contato' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header
        // CLASSE FIXA: 'bg-white' para ser sempre branca e 'shadow-md' para um destaque leve.
        // Removida a lógica condicional do 'isScrolled' para a cor e transparência.
        className={`fixed top-0 w-full z-50 bg-white shadow-md transition-all duration-300`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center">
              {/* O logo fica como estava */}
              <img
                src="https://storage.lucasmendes.dev/site-sp/tamboresuniverso%2Flogo.webp"
                alt="Tambores Universo"
                className="h-12 md:h-16 w-auto"
              />
            </div>

            <nav className="hidden md:flex items-center gap-8">
              {menuItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  // O texto agora é sempre escuro ('text-gray-700'), pois o fundo é sempre branco.
                  className={`text-sm font-medium transition-colors duration-300 hover:text-[#0A85E3] text-gray-700`}
                >
                  {item.label}
                </button>
              ))}
              <a
                href="https://wa.me/5562984164141?text=Olá, gostaria de solicitar um orçamento"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#0A85E3] to-[#034D9B] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
              >
                Solicitar Orçamento
              </a>
            </nav>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              // Ícone do menu agora é sempre escuro ('text-gray-700').
              className={`md:hidden p-2 rounded-lg transition-colors text-gray-700`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>
      
      {/* O menu móvel (quando aberto) continua sendo branco. */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white md:hidden">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {menuItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-xl font-medium text-gray-700 hover:text-[#0A85E3] transition-colors"
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://wa.me/5562984164141?text=Olá, gostaria de solicitar um orçamento"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#0A85E3] to-[#034D9B] text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg"
            >
              Solicitar Orçamento
            </a>
          </div>
        </div>
      )}
    </>
  );
}