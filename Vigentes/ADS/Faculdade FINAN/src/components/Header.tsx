import { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react'; // Importei o icone FileText
import { useNavigate, useLocation } from 'react-router-dom'; // Importante para navegação

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (id: string) => {
    // Se não estiver na home, vai para a home primeiro
    if (location.pathname !== '/') {
      navigate('/');
      // Pequeno delay para dar tempo de carregar a home antes de rolar
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      // Se já estiver na home, só rola
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  // URL do PDF local
  const editalUrl = "/edital_-_vestibular_2026.pdf";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'h-16 md:h-20 shadow-md' : 'h-[70px] md:h-20'
      } bg-white`}
    >
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
          <img 
            src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=faculdade-finan%2Fapagar-removebg-preview.png&version_id=null"
            alt="FINAN Logo"
            className={`transition-all duration-300 ${
              isScrolled ? 'h-10 md:h-12' : 'h-12 md:h-14'
            }`}
          />
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <button onClick={() => navigate('/noticias')} className="text-gray-700 hover:text-[#074785] transition-colors font-medium">
            Notícias
          </button>
          <button onClick={() => handleNavigation('sobre')} className="text-gray-700 hover:text-[#074785] transition-colors">
            Sobre
          </button>
          <button onClick={() => handleNavigation('curso')} className="text-gray-700 hover:text-[#074785] transition-colors">
            O Curso
          </button>
          
          {/* BOTÃO EDITAL - COMPATÍVEL COM IPHONE */}
          <a
            href={editalUrl}
            download="Edital_Vestibular_2026_FINAN.pdf"
            className="flex items-center gap-2 text-[#074785] border border-[#074785] px-4 py-2 rounded-full hover:bg-[#074785] hover:text-white transition-all"
          >
            <FileText size={18} />
            Edital
          </a>

          <a href="https://wa.me/5567999780073?text=Olá! Gostaria de mais informações sobre a FINAN."
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-full text-white transition-all hover:scale-105 hover:brightness-110"
            style={{ backgroundColor: '#e4100f' }}
          >
            Fale Conosco
          </a>
        </nav>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2"
          style={{ color: '#074785' }}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t">
          <nav className="flex flex-col p-4 gap-4">
            <button onClick={() => { navigate('/noticias'); setIsMobileMenuOpen(false); }} className="text-left text-gray-700 py-2 font-medium border-b border-gray-100">
              Notícias
            </button>
            <button onClick={() => handleNavigation('sobre')} className="text-left text-gray-700 py-2">
              Sobre
            </button>
            <button onClick={() => handleNavigation('curso')} className="text-left text-gray-700 py-2">
              O Curso
            </button>
            
            {/* Botão Edital Mobile */}
            <a href={editalUrl} download="Edital_Vestibular_2026_FINAN.pdf" className="flex items-center gap-2 text-[#074785] py-2 font-medium">
              <FileText size={18} /> Baixar Edital
            </a>

            <a href="https://wa.me/5567999780073?text=Olá! Gostaria de mais informações sobre a FINAN."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full text-white text-center mt-2"
              style={{ backgroundColor: '#e4100f' }}
            >
              Fale Conosco
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}