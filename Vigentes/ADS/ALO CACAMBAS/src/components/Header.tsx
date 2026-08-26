import { useEffect, useState } from 'react';
import { Phone, Menu } from 'lucide-react';

const navItems = [
  { label: 'Início', target: 'inicio' },
  { label: 'Serviços', target: 'servicos' },
  { label: 'Diferenciais', target: 'diferenciais' },
  { label: 'Sobre', target: 'sobre' },
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
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#inicio" className="flex items-center gap-2 shrink-0">
            <img
              src="https://storage.lucasmendes.dev/site-sp/alo-cacambas/img/logo-sem-fundo.webp"
              alt="Alô Caçambas"
              className={`h-12 w-auto object-contain transition-all duration-300 ${
                scrolled ? '' : 'brightness-0 invert'
              }`}
            />
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.target}
                onClick={() => scrollTo(item.target)}
                className={`text-sm font-semibold transition-colors duration-200 tracking-wide hover:text-[#ffaf24] ${
                  scrolled ? 'text-[#343434]' : 'text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
          <a
            href="tel:+553491233322"
            className="hidden md:flex items-center gap-2 bg-[#ffaf24] hover:bg-[#343434] hover:text-white text-[#343434] font-bold text-sm px-5 py-2.5 rounded-full transition-all duration-200 shadow-md active:scale-95"
          >
            <Phone className="lucide lucide-phone" width={16} height={16} />
            (34) 9 9123-3322
          </a>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className={`md:hidden p-2 rounded-md transition-colors hover:text-[#ffaf24] ${
              scrolled ? 'text-[#343434]' : 'text-white'
            }`}
          >
            <Menu className="lucide lucide-menu" width={26} height={26} />
          </button>
        </div>
      </div>
      <div
        className={`md:hidden bg-white border-t border-gray-100 transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-4 flex flex-col gap-1">
          {navItems.map((item) => (
            <button
              key={item.target}
              onClick={() => scrollTo(item.target)}
              className="text-[#343434] text-base font-medium py-3 px-3 rounded-lg hover:bg-gray-50 hover:text-[#ffaf24] transition-all text-left"
            >
              {item.label}
            </button>
          ))}
          <a
            href="tel:+553491233322"
            className="mt-2 flex items-center justify-center gap-2 bg-[#ffaf24] text-[#343434] font-bold text-sm px-5 py-3 rounded-full transition-all"
          >
            <Phone className="lucide lucide-phone" width={16} height={16} />
            (34) 9 9123-3322
          </a>
        </div>
      </div>
    </header>
  );
}
