import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-[#2e3094] p-2 rounded-lg">
              <img
                src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=Vetorcontabil%2FlogoContabilidade.png&version_id=null"
                alt="Vetorcontabil Logo"
                className="h-10 w-auto"
              />
            </div>
            <span className="text-xl font-bold text-[#2e3094]">Vetorcontabil</span>
          </div>

          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-[#21201e] hover:text-[#f0851a] transition-colors font-medium">
              Início
            </button>
            <button onClick={() => scrollToSection('services')} className="text-[#21201e] hover:text-[#f0851a] transition-colors font-medium">
              Serviços
            </button>
            <button onClick={() => scrollToSection('about')} className="text-[#21201e] hover:text-[#f0851a] transition-colors font-medium">
              Sobre
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-[#21201e] hover:text-[#f0851a] transition-colors font-medium">
              Contato
            </button>
          </div>

          <button
            className="md:hidden text-[#2e3094]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left text-[#21201e] hover:text-[#f0851a] transition-colors font-medium py-2">
              Início
            </button>
            <button onClick={() => scrollToSection('services')} className="block w-full text-left text-[#21201e] hover:text-[#f0851a] transition-colors font-medium py-2">
              Serviços
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left text-[#21201e] hover:text-[#f0851a] transition-colors font-medium py-2">
              Sobre
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-[#21201e] hover:text-[#f0851a] transition-colors font-medium py-2">
              Contato
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
