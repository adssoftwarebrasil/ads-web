import { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Serviços', href: '#servicos' },
    { label: 'Produtos', href: '#produtos' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Avaliações', href: '#avaliacoes' },
    { label: 'Localização', href: '#unidades' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex-shrink-0">
            <img
              src="https://storage.lucasmendes.dev/site-sp/netcompany%20informatica/img/LOGO%20NET%20COMPANY%20HORIZONTAL.webp"
              alt="NetCompany Informática"
              className="h-12 w-auto"
            />
          </a>

          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-[#F58842] ${
                  scrolled ? 'text-[#0D1B2A]' : 'text-white drop-shadow'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+559491941919"
              className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
                scrolled ? 'text-[#3069A3]' : 'text-white drop-shadow'
              }`}
            >
              <Phone size={14} />
              (94) 9 9194-1919
            </a>
            <a
              href="http://wa.me/559491941919"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#F58842] hover:bg-[#e07432] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Falar com Especialista
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-[#0D1B2A]' : 'text-white'
            }`}
            aria-label="Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-3 py-2.5 text-sm font-medium text-[#0D1B2A] hover:text-[#3069A3] hover:bg-blue-50 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-gray-100 space-y-2">
              <a
                href="tel:+559491941919"
                className="flex items-center gap-2 px-3 py-2 text-sm text-[#3069A3] font-medium"
              >
                <Phone size={14} />
                (94) 9 9194-1919
              </a>
              <a
                href="http://wa.me/559491941919"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#F58842] text-white text-sm font-semibold px-4 py-3 rounded-lg w-full"
              >
                <MapPin size={14} />
                Falar com Especialista
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
