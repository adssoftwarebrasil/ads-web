import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const WHATSAPP_NUMBER = '556231239052';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá!%20Gostaria%20de%20agendar%20uma%20vistoria%20veicular.`;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Como Funciona', href: '#como-funciona' },
    { label: 'Veículos', href: '#veiculos' },
    { label: 'Filiais', href: '#filiais' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black shadow-lg shadow-black/40' : 'bg-black/90 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#inicio" className="flex items-center gap-3 flex-shrink-0">
            <img
              src="https://storage.lucasmendes.dev/site-sp/max-vision%2FLogomarca-Com-Fundo-Amarelo.png"
              alt="Max Vision Vistoria Veicular"
              className="h-12 w-auto"
            />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white text-sm font-medium hover:text-[#efcf05] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#efcf05] text-black font-bold px-5 py-2.5 rounded-full text-sm hover:bg-yellow-400 transition-all duration-200 hover:scale-105"
            >
              <Phone size={16} />
              Agendar Vistoria
            </a>
          </div>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <div className="px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-white text-base font-medium hover:text-[#efcf05] transition-colors py-2 border-b border-gray-800"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#efcf05] text-black font-bold px-5 py-3 rounded-full text-sm mt-2"
            >
              <Phone size={16} />
              Agendar Vistoria
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
