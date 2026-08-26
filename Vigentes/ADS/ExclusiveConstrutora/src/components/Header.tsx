import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleOrcamento = () => {
    window.open('https://wa.me/5562993531722?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20um%20orçamento.', '_blank');
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#050a1e] z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Área da Logo atualizada */}
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('hero')}>
            <img
              src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=exclusive-construtora%2FLogo_Exclusive2_Construtora_AzulClaro.png&version_id=null"
              alt="Exclusive Construtora"
              className="h-16 w-auto object-contain"
            />
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('hero')} className="text-white hover:text-[#07dde5] transition-colors">
              Início
            </button>
            <button onClick={() => scrollToSection('sobre')} className="text-white hover:text-[#07dde5] transition-colors">
              Sobre
            </button>
            <button onClick={() => scrollToSection('servicos')} className="text-white hover:text-[#07dde5] transition-colors">
              Serviços
            </button>
            <button onClick={() => scrollToSection('galeria')} className="text-white hover:text-[#07dde5] transition-colors">
              Galeria
            </button>
            <button onClick={() => scrollToSection('contato')} className="text-white hover:text-[#07dde5] transition-colors">
              Contato
            </button>
            <Button variant="accent" onClick={handleOrcamento}>
              Solicite um Orçamento
            </Button>
          </nav>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-[#050a1e] border-t border-[#0a154b]">
          <nav className="flex flex-col px-4 py-4 gap-4">
            <button onClick={() => scrollToSection('hero')} className="text-white hover:text-[#07dde5] text-left py-2">
              Início
            </button>
            <button onClick={() => scrollToSection('sobre')} className="text-white hover:text-[#07dde5] text-left py-2">
              Sobre
            </button>
            <button onClick={() => scrollToSection('servicos')} className="text-white hover:text-[#07dde5] text-left py-2">
              Serviços
            </button>
            <button onClick={() => scrollToSection('galeria')} className="text-white hover:text-[#07dde5] text-left py-2">
              Galeria
            </button>
            <button onClick={() => scrollToSection('contato')} className="text-white hover:text-[#07dde5] text-left py-2">
              Contato
            </button>
            <Button variant="accent" onClick={handleOrcamento} className="w-full">
              Solicite um Orçamento
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};