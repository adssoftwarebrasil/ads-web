import { useEffect, useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Início', target: 'inicio' },
  { label: 'Sobre', target: 'sobre' },
  { label: 'Produtos', target: 'produtos' },
  { label: 'Por que nós', target: 'diferenciais' },
  { label: 'Contato', target: 'contato' },
];

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
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-black/95 backdrop-blur-md shadow-lg shadow-black/30 py-3'
            : 'bg-gradient-to-b from-black/80 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <a href="#inicio">
            <img
              src="https://storage.lucasmendes.dev/site-sp/estopas%20madri/img/logo-sem-fundo.webp"
              alt="Estopas Madri"
              className="h-12 sm:h-14 w-auto object-contain"
            />
          </a>
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.target}
                onClick={() => scrollTo(link.target)}
                className="text-white/90 hover:text-[#E93235] text-sm font-medium tracking-wide transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#E93235] transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:6536941080"
              className="flex items-center gap-2 text-white/80 hover:text-white text-sm transition-colors"
            >
              <Phone width={15} height={15} className="lucide lucide-phone text-[#E93235]" />
              <span>(65) 3694-1080</span>
            </a>
            <a
              href="http://wa.me/556599164429"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#E93235] hover:bg-[#CC1F22] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-[#E93235]/30 hover:-translate-y-0.5"
            >
              Fale Conosco
            </a>
          </div>
          <button
            className="lg:hidden text-white p-2"
            aria-label="Menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? (
              <X width={24} height={24} className="lucide lucide-x" />
            ) : (
              <Menu width={24} height={24} className="lucide lucide-menu" />
            )}
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-black transition-all duration-300 lg:hidden ${
          menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        style={{ paddingTop: '80px' }}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8 -mt-16">
          {navLinks.map((link) => (
            <button
              key={link.target}
              onClick={() => scrollTo(link.target)}
              className="text-white text-2xl font-semibold hover:text-[#E93235] transition-colors"
            >
              {link.label}
            </button>
          ))}
          <div className="flex flex-col items-center gap-4 mt-4">
            <a href="tel:6536941080" className="flex items-center gap-2 text-white/80 text-lg">
              <Phone width={18} height={18} className="lucide lucide-phone text-[#E93235]" />
              (65) 3694-1080
            </a>
            <a
              href="http://wa.me/556599164429"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#E93235] text-white font-bold px-10 py-3 rounded-full text-lg"
            >
              WhatsApp
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
