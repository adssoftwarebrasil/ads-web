import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const WHATSAPP_NUMBER = '5563992199115';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Quartos', href: '#quartos' },
    { label: 'Estrutura', href: '#estrutura' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de fazer uma reserva no Hotel Ipanema.`, '_blank');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-black/95 backdrop-blur-md shadow-2xl' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#inicio" className="flex items-center gap-3">
            <img
              src="https://storage.lucasmendes.dev/site-sp/hotel-ipanema%2FLogomarca-Sem-Fundo.png"
              alt="Hotel Ipanema"
              className="h-12 w-auto object-contain"
            />
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/90 hover:text-[#fff808] text-sm font-medium tracking-wide transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#fff808] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+5563992199115"
              className="flex items-center gap-2 text-white/80 hover:text-[#fff808] text-sm transition-colors duration-200"
            >
              <Phone size={16} />
              <span>(63) 9 9219-9115</span>
            </a>
            <button
              onClick={handleWhatsApp}
              className="bg-[#f68033] hover:bg-[#fff808] text-black font-bold px-6 py-2.5 rounded-full text-sm transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Reservar Agora
            </button>
          </div>

          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden bg-black/98 backdrop-blur-md transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-screen py-4' : 'max-h-0'
        }`}
      >
        <nav className="flex flex-col px-4 gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white/90 hover:text-[#fff808] py-3 px-4 rounded-lg text-base font-medium transition-colors duration-200 border-b border-white/5"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={handleWhatsApp}
            className="mt-4 bg-[#f68033] text-black font-bold py-3 px-6 rounded-full text-base transition-all duration-200"
          >
            Reservar Agora
          </button>
        </nav>
      </div>
    </header>
  );
}
