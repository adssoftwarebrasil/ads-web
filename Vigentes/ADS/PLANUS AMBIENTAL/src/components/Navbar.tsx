import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    window.location.hash = id;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <img
              src="https://storage.lucasmendes.dev/site-sp/planus%2Fplanusambientallogo.png"
              alt="Planus Ambiental Logo"
              className="h-12 w-auto"
            />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('inicio')} className="text-[#333333] hover:text-[#8BC34A] transition-colors font-medium">
              Início
            </button>
            <button onClick={() => scrollToSection('sobre')} className="text-[#333333] hover:text-[#8BC34A] transition-colors font-medium">
              Sobre Nós
            </button>
            <button onClick={() => scrollToSection('beneficios')} className="text-[#333333] hover:text-[#8BC34A] transition-colors font-medium">
              Benefícios
            </button>
            <button onClick={() => scrollToSection('servicos')} className="text-[#333333] hover:text-[#8BC34A] transition-colors font-medium">
              Serviços
            </button>
            <button onClick={() => scrollToSection('contato')} className="text-[#333333] hover:text-[#8BC34A] transition-colors font-medium">
              Contato
            </button>
            <a
              href="https://wa.me/5562981874429"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1A472A] text-white px-6 py-3 rounded-lg hover:bg-[#8BC34A] transition-all duration-300 font-semibold shadow-md hover:shadow-lg"
            >
              Fale com um Especialista
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-[#1A472A]">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button onClick={() => scrollToSection('inicio')} className="block w-full text-left px-3 py-2 text-[#333333] hover:bg-[#F8F9FA] hover:text-[#8BC34A] rounded-md">
              Início
            </button>
            <button onClick={() => scrollToSection('sobre')} className="block w-full text-left px-3 py-2 text-[#333333] hover:bg-[#F8F9FA] hover:text-[#8BC34A] rounded-md">
              Sobre Nós
            </button>
            <button onClick={() => scrollToSection('beneficios')} className="block w-full text-left px-3 py-2 text-[#333333] hover:bg-[#F8F9FA] hover:text-[#8BC34A] rounded-md">
              Benefícios
            </button>
            <button onClick={() => scrollToSection('servicos')} className="block w-full text-left px-3 py-2 text-[#333333] hover:bg-[#F8F9FA] hover:text-[#8BC34A] rounded-md">
              Serviços
            </button>
            <button onClick={() => scrollToSection('contato')} className="block w-full text-left px-3 py-2 text-[#333333] hover:bg-[#F8F9FA] hover:text-[#8BC34A] rounded-md">
              Contato
            </button>
            <a
              href="https://wa.me/5562981874429"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center mt-4 bg-[#1A472A] text-white px-6 py-3 rounded-lg hover:bg-[#8BC34A] transition-all duration-300 font-semibold"
            >
              Fale com um Especialista
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
