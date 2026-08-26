import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-[#ffef1d] shadow-2xl' 
            : 'bg-[#ffef1d]'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                src="https://storage.lucasmendes.dev/site-sp/megabaterias/LogomarcaComFundoAmareloRemovido.png"
                alt="Mega Baterias"
                className={`w-auto transition-all duration-300 ${
                  scrolled ? 'h-8 md:h-10' : 'h-10 md:h-12'
                }`}
              />
            </div>

            <div className="hidden lg:flex items-center gap-1">
              <button
                onClick={() => scrollToSection('sobre')}
                className="text-[#0b0d10] hover:text-[#d7282d] transition-all duration-300 font-bold px-4 py-2 rounded-lg hover:bg-[#0b0d10]/5 relative group"
              >
                A MEGA
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#d7282d] group-hover:w-3/4 transition-all duration-300"></span>
              </button>
              <button
                onClick={() => scrollToSection('produtos')}
                className="text-[#0b0d10] hover:text-[#d7282d] transition-all duration-300 font-bold px-4 py-2 rounded-lg hover:bg-[#0b0d10]/5 relative group"
              >
                PRODUTOS
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#d7282d] group-hover:w-3/4 transition-all duration-300"></span>
              </button>
              <button
                onClick={() => scrollToSection('servicos')}
                className="text-[#0b0d10] hover:text-[#d7282d] transition-all duration-300 font-bold px-4 py-2 rounded-lg hover:bg-[#0b0d10]/5 relative group"
              >
                SERVIÇOS
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#d7282d] group-hover:w-3/4 transition-all duration-300"></span>
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className="text-[#0b0d10] hover:text-[#d7282d] transition-all duration-300 font-bold px-4 py-2 rounded-lg hover:bg-[#0b0d10]/5 relative group"
              >
                CONTATO
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#d7282d] group-hover:w-3/4 transition-all duration-300"></span>
              </button>
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:5577999036565"
                className="flex items-center gap-2 text-[#0b0d10] hover:text-[#d7282d] transition-colors duration-300 font-bold"
              >
                <Phone size={18} />
                <span className="text-sm">(77) 9 9903-6565</span>
              </a>
              <a
                href="https://wa.me/5577999036565?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20baterias."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#d7282d] text-white px-6 py-2.5 rounded-full font-bold hover:bg-[#0b0d10] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                FALE CONOSCO
              </a>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-[#d7282d] p-2 hover:bg-[#0b0d10]/5 rounded-lg transition-all duration-300 active:scale-95"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} strokeWidth={2.5} /> : <Menu size={28} strokeWidth={2.5} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-[#0b0d10] pt-20 pb-6 px-6 overflow-y-auto">
          <div className="flex flex-col gap-3 mb-8">
            <button
              onClick={() => scrollToSection('sobre')}
              className="w-full text-left text-white text-lg font-bold py-4 px-6 rounded-xl bg-white/5 hover:bg-[#ffef1d]/10 hover:text-[#ffef1d] transition-all duration-300 border border-white/10 hover:border-[#ffef1d]/30 active:scale-98"
            >
              A MEGA
            </button>
            <button
              onClick={() => scrollToSection('produtos')}
              className="w-full text-left text-white text-lg font-bold py-4 px-6 rounded-xl bg-white/5 hover:bg-[#ffef1d]/10 hover:text-[#ffef1d] transition-all duration-300 border border-white/10 hover:border-[#ffef1d]/30 active:scale-98"
            >
              PRODUTOS
            </button>
            <button
              onClick={() => scrollToSection('servicos')}
              className="w-full text-left text-white text-lg font-bold py-4 px-6 rounded-xl bg-white/5 hover:bg-[#ffef1d]/10 hover:text-[#ffef1d] transition-all duration-300 border border-white/10 hover:border-[#ffef1d]/30 active:scale-98"
            >
              SERVIÇOS
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="w-full text-left text-white text-lg font-bold py-4 px-6 rounded-xl bg-white/5 hover:bg-[#ffef1d]/10 hover:text-[#ffef1d] transition-all duration-300 border border-white/10 hover:border-[#ffef1d]/30 active:scale-98"
            >
              CONTATO
            </button>
          </div>

          <div className="space-y-3">
            <a
              href="tel:5577999036565"
              className="flex items-center justify-center gap-3 text-white bg-white/5 py-4 px-6 rounded-xl font-bold text-base transition-all duration-300 border border-white/10 hover:border-[#ffef1d]/30 hover:bg-[#ffef1d]/10 active:scale-98"
            >
              <Phone size={20} />
              <span>(77) 9 9903-6565</span>
            </a>
            <a
              href="https://wa.me/5577999036565?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20baterias."
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-gradient-to-r from-[#ffef1d] to-[#ffd700] text-[#0b0d10] py-4 px-6 rounded-xl font-bold text-base hover:from-[#d7282d] hover:to-[#ff4444] hover:text-white transition-all duration-300 shadow-lg active:scale-98"
            >
              FALE CONOSCO
            </a>
          </div>
        </div>
      </div>
    </>
  );
}