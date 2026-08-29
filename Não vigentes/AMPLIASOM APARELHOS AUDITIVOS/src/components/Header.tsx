import { Phone, Menu, X } from 'lucide-react';
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <img
              src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=AMPLIASOM%2FLogomarcaCorreta.png&version_id=null"
              alt="AmpliaSom Logo"
              className="h-12 w-auto"
            />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('inicio')} className="text-gray-700 hover:text-[#007E7A] transition-colors">
              Início
            </button>
            <button onClick={() => scrollToSection('aluguel')} className="text-gray-700 hover:text-[#007E7A] transition-colors">
              Aluguel
            </button>
            <button onClick={() => scrollToSection('Cuidamos')} className="text-gray-700 hover:text-[#007E7A] transition-colors">
              Cuidamos do seu aparelho
            </button>
            <button onClick={() => scrollToSection('venda')} className="text-gray-700 hover:text-[#007E7A] transition-colors">
              Venda
            </button>
            <button onClick={() => scrollToSection('marcas')} className="text-gray-700 hover:text-[#007E7A] transition-colors">
              Marcas
            </button>
          </nav>

          <a
            href="https://wa.me/5561994174249"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-[#007E7A] to-[#ED0180] text-white px-6 py-2.5 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            <Phone className="w-4 h-4" />
            <span className="font-medium">(61) 99417-4249</span>
          </a>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col space-y-1 px-4 py-4">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-left py-3 text-gray-700 hover:text-[#007E7A] transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('aluguel')}
              className="text-left py-3 text-gray-700 hover:text-[#007E7A] transition-colors"
            >
              Aluguel
            </button>
            <button
              onClick={() => scrollToSection('Cuidamos')}
              className="text-left py-3 text-gray-700 hover:text-[#007E7A] transition-colors"
            >
              Cuidamos do seu aparelho
            </button>
            <button
              onClick={() => scrollToSection('venda')}
              className="text-left py-3 text-gray-700 hover:text-[#007E7A] transition-colors"
            >
              Venda
            </button>
            <button
              onClick={() => scrollToSection('marcas')}
              className="text-left py-3 text-gray-700 hover:text-[#007E7A] transition-colors"
            >
              Marcas
            </button>
            <a
              href="https://wa.me/5561994174249"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-gradient-to-r from-[#007E7A] to-[#ED0180] text-white px-6 py-3 rounded-full mt-4"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">(61) 9 9417 4249</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
