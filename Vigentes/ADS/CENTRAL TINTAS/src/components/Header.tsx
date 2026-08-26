import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white'
      }`}
      style={{ height: '80px' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          <div className="flex-shrink-0">
            {/* ATUALIZAÇÃO:
                Adicionada a classe 'bg-[#3f4196]' para o fundo roxo.
                Mantive 'p-1.5' e 'rounded-lg' para dar um acabamento profissional,
                impedindo que a logo toque nas bordas do quadrado roxo.
            */}
            <img
              src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=central-tintas%2Fcentral-tintas-logo-removebg-preview.png"
              alt="Central Tintas Logo"
              className="h-12 w-auto bg-[#3f4196] p-1.5 rounded-lg"
            />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-gray-700 hover:text-[#3f4196] transition-colors font-medium"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('produtos')}
              className="text-gray-700 hover:text-[#3f4196] transition-colors font-medium"
            >
              Produtos
            </button>
            <button
              onClick={() => scrollToSection('diferenciais')}
              className="text-gray-700 hover:text-[#3f4196] transition-colors font-medium"
            >
              Diferenciais
            </button>
            <button
              onClick={() => scrollToSection('atendimento')}
              className="text-gray-700 hover:text-[#3f4196] transition-colors font-medium"
            >
              Atendimento
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="text-gray-700 hover:text-[#3f4196] transition-colors font-medium"
            >
              Contato
            </button>
            <a
              href="https://wa.me/5577999571092?text=Olá! Vim através do site e gostaria de mais informações."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#ec3237] text-white px-6 py-2 rounded-lg hover:bg-[#d32d32] transition-all hover:scale-105 font-medium"
            >
              Fale Conosco
            </a>
          </nav>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden absolute top-20 left-0 right-0 bg-white shadow-lg transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <nav className="flex flex-col p-4 space-y-4">
          <button
            onClick={() => scrollToSection('inicio')}
            className="text-gray-700 hover:text-[#3f4196] transition-colors font-medium text-left"
          >
            Início
          </button>
          <button
            onClick={() => scrollToSection('produtos')}
            className="text-gray-700 hover:text-[#3f4196] transition-colors font-medium text-left"
          >
            Produtos
          </button>
          <button
            onClick={() => scrollToSection('diferenciais')}
            className="text-gray-700 hover:text-[#3f4196] transition-colors font-medium text-left"
          >
            Diferenciais
          </button>
          <button
            onClick={() => scrollToSection('atendimento')}
            className="text-gray-700 hover:text-[#3f4196] transition-colors font-medium text-left"
          >
            Atendimento
          </button>
          <button
            onClick={() => scrollToSection('contato')}
            className="text-gray-700 hover:text-[#3f4196] transition-colors font-medium text-left"
          >
            Contato
          </button>
          <a
            href="https://wa.me/5577999571092?text=Olá! Vim através do site e gostaria de mais informações."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#ec3237] text-white px-6 py-2 rounded-lg hover:bg-[#d32d32] transition-colors font-medium text-center"
          >
            Fale Conosco
          </a>
        </nav>
      </div>
    </header>
  );
}