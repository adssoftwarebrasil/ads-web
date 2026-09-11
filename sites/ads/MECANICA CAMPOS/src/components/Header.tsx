import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#152755] shadow-lg' : 'bg-[#152755]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <img
              src="https://storage.lucasmendes.dev/site-sp/MECANICA-CAMPOS%2Flogomarca.webp"
              alt="Mecânica Campos"
              className="h-12 md:h-15 w-auto"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) {
                  parent.innerHTML = '<span class="text-white text-xl font-bold">MECÂNICA CAMPOS</span>';
                }
              }}
            />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('inicio')} className="text-white hover:text-[#FF6B35] transition-colors">
              Início
            </button>
            <button onClick={() => scrollToSection('servicos')} className="text-white hover:text-[#FF6B35] transition-colors">
              Serviços
            </button>
            <button onClick={() => scrollToSection('autopecas')} className="text-white hover:text-[#FF6B35] transition-colors">
              Auto Peças
            </button>
            <button onClick={() => scrollToSection('sobre')} className="text-white hover:text-[#FF6B35] transition-colors">
              Sobre
            </button>
            <button onClick={() => scrollToSection('contato')} className="text-white hover:text-[#FF6B35] transition-colors">
              Contato
            </button>
            <a
              href="https://wa.me/5566996460016?text=Olá!%20Gostaria%20de%20um%20orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FF6B35] text-white px-6 py-2 rounded-lg hover:bg-[#e55a2a] transition-all transform hover:scale-105"
            >
              Orçamento Rápido
            </a>
          </nav>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#152755] border-t border-white/10">
          <div className="px-4 py-4 space-y-3">
            <button onClick={() => scrollToSection('inicio')} className="block w-full text-left text-white py-2 hover:text-[#FF6B35] transition-colors">
              Início
            </button>
            <button onClick={() => scrollToSection('servicos')} className="block w-full text-left text-white py-2 hover:text-[#FF6B35] transition-colors">
              Serviços
            </button>
            <button onClick={() => scrollToSection('autopecas')} className="block w-full text-left text-white py-2 hover:text-[#FF6B35] transition-colors">
              Auto Peças
            </button>
            <button onClick={() => scrollToSection('sobre')} className="block w-full text-left text-white py-2 hover:text-[#FF6B35] transition-colors">
              Sobre
            </button>
            <button onClick={() => scrollToSection('contato')} className="block w-full text-left text-white py-2 hover:text-[#FF6B35] transition-colors">
              Contato
            </button>
            <a
              href="https://wa.me/5566996460016?text=Olá!%20Gostaria%20de%20um%20orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-[#FF6B35] text-white px-6 py-3 rounded-lg hover:bg-[#e55a2a] transition-all text-center"
            >
              Orçamento Rápido
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
