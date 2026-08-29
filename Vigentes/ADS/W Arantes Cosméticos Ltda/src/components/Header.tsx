import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const menuItems = [
  { label: 'Início', id: 'início' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Produtos', id: 'produtos' },
  { label: 'Nossas Lojas', id: 'lojas' },
  { label: 'Contato', id: 'contato' }
];

const Header = () => {
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
          ? 'bg-[#c40278] shadow-lg py-2' 
          : 'bg-[#c40278]/95 backdrop-blur-sm py-3'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img
              src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=Biolune%20cosm%C3%A9ticos%20e%20beleza%2Fnova-logo-biolune-beleza-com-fundo%201.png&version_id=null"
              alt="Biolune Cosméticos"
              // ALTERADO: Reduzi mais (h-12 mobile / h-16 desktop)
              className="h-12 md:h-16 w-auto object-contain transition-all duration-300"
            />
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-white hover:text-pink-200 font-medium transition-colors duration-200 text-lg"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="https://wa.me/5562999597617"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-white text-[#c40278] px-6 py-3 rounded-full font-bold hover:shadow-xl hover:bg-pink-50 transform hover:scale-105 transition-all duration-300 shadow-md"
            >
              <Phone className="w-5 h-5" />
              <span>Fale Conosco</span>
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-[#f4ccd4] animate-slideDown">
            <nav className="flex flex-col p-4 space-y-3">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-[#350020] hover:text-[#c40278] font-medium py-3 text-left hover:bg-[#f4ccd4]/20 px-4 rounded-lg transition-all"
                >
                  {item.label}
                </button>
              ))}
              
              <a
                href="https://wa.me/5562999597617"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-[#c40278] text-white px-6 py-3 rounded-full font-semibold mt-4 shadow-lg active:scale-95 transition-transform"
              >
                <Phone className="w-5 h-5" />
                <span>Fale Conosco</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;