import { useState, useEffect } from 'react';
import { Phone, Menu } from 'lucide-react';
import { WHATSAPP_URL, LOGO_URL } from '../constants';

const navItems = [
  { label: 'Início', target: 'inicio' },
  { label: 'Serviços', target: 'servicos' },
  { label: 'Sobre', target: 'sobre' },
  { label: 'Depoimentos', target: 'depoimentos' },
  { label: 'Contato', target: 'contato' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#102694] shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#inicio" className="flex-shrink-0">
            <img src={LOGO_URL} alt="AL Personaliza" className="h-14 w-auto" />
          </a>
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.target}
                onClick={() => scrollTo(item.target)}
                className="text-white/90 hover:text-[#FFC734] font-medium text-sm transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#FFC734] hover:bg-yellow-400 text-[#102694] font-bold text-sm px-4 py-2 rounded-full transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <Phone
                width={15}
                height={15}
                strokeWidth={2.5}
                className="lucide lucide-phone "
              />
              Fale Conosco
            </a>
          </div>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden text-white p-1"
            aria-label="Toggle menu"
          >
            <Menu width={24} height={24} strokeWidth={2} className="lucide lucide-menu " />
          </button>
        </div>
      </div>
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[#102694] px-4 pb-4 pt-2 border-t border-white/10">
          {navItems.map((item) => (
            <button
              key={item.target}
              onClick={() => scrollTo(item.target)}
              className="block w-full text-left text-white/90 hover:text-[#FFC734] font-medium py-3 border-b border-white/10 text-sm transition-colors"
            >
              {item.label}
            </button>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center justify-center gap-2 bg-[#FFC734] text-[#102694] font-bold text-sm px-4 py-3 rounded-full"
          >
            <Phone
              width={15}
              height={15}
              strokeWidth={2.5}
              className="lucide lucide-phone "
            />
            Fale Conosco pelo WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
