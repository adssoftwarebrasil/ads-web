import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

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
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-4'
          : 'bg-white py-6'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo atualizado com imagem */}
          <div className="flex items-center">
            <img 
              src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=protons%2FLogomarcaProtons.png&version_id=null" 
              alt="Protons Consultoria" 
              className="h-14 w-auto object-contain"
            />
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            <button onClick={() => scrollToSection('hero')} className="text-[#2c2c5b] hover:text-[#4a90a4] transition-colors font-medium">
              Início
            </button>
            <button onClick={() => scrollToSection('services')} className="text-[#2c2c5b] hover:text-[#4a90a4] transition-colors font-medium">
              Serviços
            </button>
            <button onClick={() => scrollToSection('about')} className="text-[#2c2c5b] hover:text-[#4a90a4] transition-colors font-medium">
              Sobre
            </button>
            <button onClick={() => scrollToSection('why-protons')} className="text-[#2c2c5b] hover:text-[#4a90a4] transition-colors font-medium">
              Diferenciais
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-[#2c2c5b] hover:text-[#4a90a4] transition-colors font-medium">
              Contato
            </button>
            {/* Novo link do Portal do Cliente (Desktop) */}
            <a 
              href="http://portaldocliente.protonsconsultoria.com/loginProtons" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#2c2c5b] hover:text-[#4a90a4] transition-colors font-medium"
            >
              Portal do Cliente
            </a>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-[#2c2c5b]">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">(62) 99800-5803</span>
            </div>
            
            <a href="https://wa.me/5562998005803"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2c2c5b] hover:bg-[#3d3d7a] text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-300 hover:shadow-lg"
            >
              Fale com um Especialista
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-[#2c2c5b] p-2"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden mt-6 pb-4 border-t border-gray-200 pt-4 animate-in fade-in slide-in-from-top-2 duration-300">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('hero')} className="text-[#2c2c5b] hover:text-[#4a90a4] transition-colors font-medium text-left">
                Início
              </button>
              <button onClick={() => scrollToSection('services')} className="text-[#2c2c5b] hover:text-[#4a90a4] transition-colors font-medium text-left">
                Serviços
              </button>
              <button onClick={() => scrollToSection('about')} className="text-[#2c2c5b] hover:text-[#4a90a4] transition-colors font-medium text-left">
                Sobre
              </button>
              <button onClick={() => scrollToSection('why-protons')} className="text-[#2c2c5b] hover:text-[#4a90a4] transition-colors font-medium text-left">
                Diferenciais
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-[#2c2c5b] hover:text-[#4a90a4] transition-colors font-medium text-left">
                Contato
              </button>
              {/* Novo link do Portal do Cliente (Mobile) */}
              <a 
                href="http://portaldocliente.protonsconsultoria.com/loginProtons" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#2c2c5b] hover:text-[#4a90a4] transition-colors font-medium text-left"
              >
                Portal do Cliente
              </a>
              <div className="flex items-center space-x-2 text-[#2c2c5b] pt-2">
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">(62) 99800-5803</span>
              </div>
              
              <a href="https://wa.me/5562998005803"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#2c2c5b] hover:bg-[#3d3d7a] text-white px-6 py-3 rounded-lg font-medium transition-all text-center"
              >
                Fale com um Especialista
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}