import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { useWhatsAppModal, whatsappLink } from '../context/WhatsAppModalContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { openModal } = useWhatsAppModal();

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
        isScrolled ? 'bg-white shadow-lg py-1' : 'bg-white py-2'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between max-w-7xl">
        <div className="flex items-center py-1">
          <img 
            src="https://storage.lucasmendes.dev/site-sp/vidrolatas%2Flogo-sem-fundo.png" 
            alt="Vidrolatas Para-brisas e Acessórios" 
            className={`transition-all duration-300 object-contain ${
              isScrolled ? 'h-14 md:h-16' : 'h-16 md:h-20'
            }`}
          />
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection('inicio')} className="text-[#012d78] hover:text-[#0298d2] transition-colors font-medium">
            Início
          </button>
          <button onClick={() => scrollToSection('servicos')} className="text-[#012d78] hover:text-[#0298d2] transition-colors font-medium">
            Serviços
          </button>
          <button onClick={() => scrollToSection('sobre')} className="text-[#012d78] hover:text-[#0298d2] transition-colors font-medium">
            Sobre
          </button>
          <button onClick={() => scrollToSection('contato')} className="text-[#012d78] hover:text-[#0298d2] transition-colors font-medium">
            Contato
          </button>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={whatsappLink()}
            onClick={(e) => {
              e.preventDefault();
              openModal();
            }}
            className="hidden md:flex items-center gap-2 bg-[#0298d2] text-white px-6 py-2.5 rounded-lg hover:bg-[#66c2e8] transition-all duration-300 hover:scale-105 font-medium"
          >
            <Phone size={18} />
            WhatsApp
          </a>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#012d78] p-2"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-[#d0d0d0] shadow-xl">
          <nav className="flex flex-col p-4">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-[#012d78] py-3 px-4 text-left hover:bg-[#e4eef8] rounded transition-colors font-medium"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('servicos')}
              className="text-[#012d78] py-3 px-4 text-left hover:bg-[#e4eef8] rounded transition-colors font-medium"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('sobre')}
              className="text-[#012d78] py-3 px-4 text-left hover:bg-[#e4eef8] rounded transition-colors font-medium"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="text-[#012d78] py-3 px-4 text-left hover:bg-[#e4eef8] rounded transition-colors font-medium"
            >
              Contato
            </button>
            <a
              href={whatsappLink()}
              onClick={(e) => {
                e.preventDefault();
                openModal();
                setIsMenuOpen(false);
              }}
              className="flex items-center gap-2 bg-[#0298d2] text-white px-4 py-3 rounded-lg hover:bg-[#66c2e8] transition-colors mt-2 font-medium justify-center"
            >
              <Phone size={18} />
              WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}