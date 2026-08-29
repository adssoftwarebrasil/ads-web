import { Phone, Clock, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="bg-gradient-to-r from-[#01904B] to-[#0379CB] text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center md:justify-between items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span className="font-medium">Seg-Qui: 07h-18h | Sex: 07h-17h</span>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:7536263728" className="flex items-center gap-2 hover:text-gray-200 transition-colors">
              <Phone className="w-4 h-4" />
              <span>(75) 3626-3728</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Feira de Santana - BA</span>
            </div>
          </div>
        </div>
      </div>

      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src="https://storage.lucasmendes.dev/site-sp/feira%20fios%2Fimg%2Flogo-com-texto-sem-fundo.webp"
                alt="Feira Fios"
                className="h-12 md:h-16 w-auto"
              />
            </div>

            <nav className="hidden lg:flex items-center gap-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-[#01904B] font-medium transition-colors">
                Início
              </button>
              <button onClick={() => scrollToSection('servicos')} className="text-gray-700 hover:text-[#01904B] font-medium transition-colors">
                Serviços
              </button>
              <button onClick={() => scrollToSection('sobre')} className="text-gray-700 hover:text-[#01904B] font-medium transition-colors">
                Sobre
              </button>
              <button onClick={() => scrollToSection('galeria')} className="text-gray-700 hover:text-[#01904B] font-medium transition-colors">
                Galeria
              </button>
              <button onClick={() => scrollToSection('contato')} className="text-gray-700 hover:text-[#01904B] font-medium transition-colors">
                Contato
              </button>
            </nav>

            <a
              href="https://wa.me/5575991231578?text=Olá! Gostaria de solicitar um orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#01904B] to-[#0379CB] text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
