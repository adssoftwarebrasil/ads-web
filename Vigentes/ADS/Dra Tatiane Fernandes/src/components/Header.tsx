import { useEffect, useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Sobre', id: 'sobre' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Resultados', id: 'resultados' },
  { label: 'Depoimentos', id: 'depoimentos' },
  { label: 'Contato', id: 'contato' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    onScroll();
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
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <a href="#">
          <img
            src="https://storage.lucasmendes.dev/site-sp/tatiane-terapeuta-capilar/img/logo-sem-fundo.webp"
            alt="Dr. Tatiane Fernandes"
            className="h-14 w-auto object-contain"
          />
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`text-sm font-medium tracking-wide transition-colors duration-300 ${
                scrolled
                  ? 'text-[#737373] hover:text-[#404040]'
                  : 'hover:text-gray-200 text-white drop-shadow'
              }`}
            >
              {item.label}
            </button>
          ))}
          <a
            href="tel:+553588973804"
            className="flex items-center gap-2 bg-[#737373] hover:bg-[#5a5a5a] text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <Phone width={14} height={14} className="lucide lucide-phone " />
            Agendar Consulta
          </a>
        </nav>
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className={`md:hidden p-2 rounded-lg transition-colors ${
            scrolled ? 'text-[#737373]' : 'text-white'
          }`}
          aria-label="Menu"
        >
          {menuOpen ? (
            <X width={24} height={24} className="lucide lucide-x " />
          ) : (
            <Menu width={24} height={24} className="lucide lucide-menu " />
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg mt-3 mx-4 rounded-2xl overflow-hidden">
          <nav className="flex flex-col py-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-left px-6 py-3 text-sm font-medium text-[#737373] hover:bg-[#F8E5E4]/40 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <a
              href="tel:+553588973804"
              className="flex items-center gap-2 mx-6 my-3 justify-center bg-[#737373] hover:bg-[#5a5a5a] text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-300"
            >
              <Phone width={14} height={14} className="lucide lucide-phone " />
              Agendar Consulta
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
