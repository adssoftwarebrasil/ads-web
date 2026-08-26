import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const WHATSAPP_NUMBER = '5585989253428';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20imóveis%20da%20Praia%20Imóveis.`;
const LOGO_URL = "https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=praia-imoveis%2Flogo-Praia-Imoveis.png&version_id=null";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Regiões', href: '#regioes' },
    { label: 'Instagram', href: '#instagram' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#00484e]/97 backdrop-blur-md shadow-lg shadow-black/20'
          : 'bg-gradient-to-b from-black/60 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          <a href="#" className="flex items-center py-2">
            <img
              src={LOGO_URL}
              alt="Praia Imóveis"
              className="h-12 md:h-16 w-auto object-contain transition-transform duration-300 hover:scale-105"
            />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-white text-sm font-medium tracking-wide transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:+5585989253428`}
              className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors"
            >
              <Phone size={14} />
              <span>(85) 98925-3428</span>
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-white/90 text-[#00484e] text-sm font-bold px-5 py-2 rounded-full transition-all duration-300 shadow-md hover:shadow-white/20 hover:shadow-lg"
            >
              Falar com Corretor
            </a>
          </div>

          <button
            className="md:hidden text-white p-2 hover:text-white/70 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-[450px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[#00484e]/98 backdrop-blur-md border-t border-white/10 px-4 pb-6 pt-4">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-white/80 hover:text-white text-base py-3 border-b border-white/10 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-5 flex flex-col gap-3">
            <a
              href={`tel:+5585989253428`}
              className="flex items-center gap-2 text-white/70 text-sm"
            >
              <Phone size={14} />
              <span>(85) 98925-3428</span>
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#00484e] text-sm font-bold px-5 py-3 rounded-full text-center transition-all"
            >
              Falar com Corretor
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
