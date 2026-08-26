import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Acomodações', href: '#acomodacoes' },
  { label: 'Estrutura', href: '#estrutura' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Localização', href: '#localizacao' },
  { label: 'Contato', href: '#contato' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-navy shadow-2xl shadow-navy/30 py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#inicio" onClick={() => handleNavClick('#inicio')} className="flex items-center gap-3 group">
            <img
              src="https://storage.lucasmendes.dev/site-sp/Hotel-Avalon%2FLogomarca-Fundo-Branco.png"
              alt="Hotel Avalon Benevides"
              className="h-12 w-auto object-contain bg-white rounded px-2 py-1 transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-white/90 hover:text-gold text-sm font-medium px-3 py-2 rounded-md transition-all duration-200 hover:bg-white/10"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+5591982450015"
              className="flex items-center gap-2 text-white/90 hover:text-gold transition-colors duration-200"
            >
              <Phone size={16} className="text-gold" />
              <span className="text-sm font-medium">(91) 98245-0015</span>
            </a>
            <a
              href="https://wa.me/5591982450015?text=Olá!%20Gostaria%20de%20fazer%20uma%20reserva%20no%20Hotel%20Avalon%20Benevides."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold hover:bg-gold-light text-navy font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-gold/30 hover:-translate-y-0.5"
            >
              Reservar Agora
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-navy/98 backdrop-blur-md border-t border-white/10 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="block w-full text-left text-white/90 hover:text-gold font-medium px-4 py-3 rounded-lg hover:bg-white/10 transition-all duration-200"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <a
              href="tel:+5591982450015"
              className="flex items-center gap-2 text-white/80 px-4 py-2"
            >
              <Phone size={16} className="text-gold" />
              <span className="text-sm">(91) 98245-0015</span>
            </a>
            <a
              href="https://wa.me/5591982450015?text=Olá!%20Gostaria%20de%20fazer%20uma%20reserva%20no%20Hotel%20Avalon%20Benevides."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-navy font-semibold text-center px-5 py-3 rounded-full mx-4 transition-all duration-200 hover:bg-gold-light"
            >
              Reservar Agora
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
