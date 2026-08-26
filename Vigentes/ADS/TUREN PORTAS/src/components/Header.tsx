import { useEffect, useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Início', target: 'hero' },
  { label: 'Produtos', target: 'produtos' },
  { label: 'Sobre', target: 'sobre' },
  { label: 'Galeria', target: 'galeria' },
  { label: 'Contato', target: 'contato' },
];

const WHATSAPP_URL =
  'https://wa.me/556699118484?text=Olá!%20Gostaria%20de%20conhecer%20mais%20sobre%20as%20portas%20da%20Turen%20Portas.';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#005143] shadow-lg py-3' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <button onClick={() => scrollTo('hero')} className="flex items-center gap-2">
            <img
              src="https://storage.lucasmendes.dev/site-sp/turen%20portas/img/logo-sem-fundo.webp"
              alt="Turen Portas"
              className="h-14 w-auto"
            />
          </button>
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.target}
                onClick={() => scrollTo(item.target)}
                className="text-[#ECC4A4] hover:text-white font-medium text-sm tracking-wide transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#DE8F52] transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+556699118484"
              className="flex items-center gap-2 text-[#ECC4A4] hover:text-white text-sm font-medium transition-colors"
            >
              <Phone width={16} height={16} />
              (66) 9 9911-8484
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#DE8F52] hover:bg-[#c47a40] text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              Solicitar Orçamento
            </a>
          </div>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden text-[#ECC4A4] p-2"
            aria-label="Menu"
          >
            {menuOpen ? <X width={24} height={24} /> : <Menu width={24} height={24} />}
          </button>
        </div>
      </div>
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[#005143] border-t border-[#ECC4A4]/20 px-4 py-4 space-y-4">
          {navItems.map((item) => (
            <button
              key={item.target}
              onClick={() => scrollTo(item.target)}
              className="block w-full text-left text-[#ECC4A4] hover:text-white font-medium py-2 transition-colors"
            >
              {item.label}
            </button>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-[#DE8F52] text-white px-5 py-3 rounded-full font-semibold mt-4"
          >
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </header>
  );
}
