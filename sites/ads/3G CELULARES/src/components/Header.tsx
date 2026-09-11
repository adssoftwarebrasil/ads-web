import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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

  const menuItems = ['Início', 'Produtos', 'Serviços', 'Sobre', 'Contato'];

  const scrollToSection = (item: string) => {
    const sectionMap: { [key: string]: string } = {
      'Início': 'hero',
      'Produtos': 'produtos',
      'Serviços': 'produtos',
      'Sobre': 'sobre',
      'Contato': 'contato'
    };
    const sectionId = sectionMap[item];
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#172059] shadow-lg' : 'bg-[#172059]/90'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-[70px] lg:h-[80px]">
          {/* Logo com fundo branco */}
          <div className="bg-white rounded-lg px-3 py-2">
            <img
              src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=3G%2F2024-06-12__1_-removebg-preview.png&version_id=null"
              alt="3G Celulares e Informática"
              className="h-[40px] lg:h-[50px] object-contain cursor-pointer"
              onClick={() => scrollToSection('Início')}
            />
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-white hover:text-[#81c227] transition-colors duration-200 font-medium"
              >
                {item}
              </button>
            ))}
          </nav>

          
            <a href="https://wa.me/5549999504348"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:block bg-[#81c227] text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-[#6fa01f] transition-all duration-200 hover:shadow-lg"
          >
            Fale Conosco
          </a>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden fixed top-[70px] right-0 w-64 bg-[#172059] shadow-xl transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ height: 'calc(100vh - 70px)' }}
      >
        <nav className="flex flex-col p-6 space-y-4">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-white hover:text-[#81c227] transition-colors duration-200 font-medium text-left py-2"
            >
              {item}
            </button>
          ))}
          
            <a href="https://wa.me/5549999504348"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#81c227] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#6fa01f] transition-all duration-200 text-center mt-4"
          >
            Fale Conosco
          </a>
        </nav>
      </div>
    </header>
  );
}