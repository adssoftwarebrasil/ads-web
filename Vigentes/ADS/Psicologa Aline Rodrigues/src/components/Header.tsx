import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

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

  const navLinks = [
    { label: 'Início', id: 'hero' },
    { label: 'Sobre', id: 'about' },
    { label: 'TCC', id: 'services' },
    { label: 'Serviços', id: 'services-new' },
    { label: 'Como Funciona', id: 'process' },
    { label: 'FAQ', id: 'faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('hero')}>
            <img
              src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=ALINE%20RODRIGUES%20-%20SERVICOS%20DE%20PSICOLOGIA%2Fcapa-de-perfil-para-banner-de-linkedin-engenharia-e-projetos-2560a-aa-1440a-px--3-AoPqG2erwoTGXQnP-removebg-preview.png&version_id=null"
              alt="Aline Rodrigues - Serviços de Psicologia"
              className="h-16 w-auto object-contain"
            />
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-text-main hover:text-brown-dark transition-colors font-medium relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brown-dark transition-all group-hover:w-full"></span>
              </button>
            ))}
            <a
              href="https://wa.me/556282702366?text=Olá, gostaria de saber mais sobre como funciona a terapia."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brown-dark text-white px-6 py-2.5 rounded-lg font-medium hover:bg-opacity-90 transition-all hover:shadow-lg"
            >
              Agendar Consulta
            </a>
          </nav>

          <button
            className="md:hidden text-text-main"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-beige-light">
          <nav className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left text-text-main hover:text-brown-dark transition-colors font-medium py-2"
              >
                {link.label}
              </button>
            ))}
            <a
              href="https://wa.me/556282702366?text=Olá, gostaria de saber mais sobre como funciona a terapia."
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-brown-dark text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all"
            >
              Agendar Consulta
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
