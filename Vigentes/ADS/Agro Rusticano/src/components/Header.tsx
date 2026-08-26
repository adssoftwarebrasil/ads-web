import { useState, useEffect } from 'react';
import { ShoppingBag, Menu } from 'lucide-react';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Produtos', id: 'produtos' },
  { label: 'Avaliações', id: 'avaliacoes' },
  { label: 'Contato', id: 'contato' },
];

const WHATSAPP = 'http://wa.me/551235122848';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[rgb(54,59,27)] shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src="https://storage.lucasmendes.dev/site-sp/agro%20rusticano/img/logo-sem-fundo.webp"
              alt="Agro Rusticano Logo"
              className="h-12 md:h-16 w-auto transition-all duration-300"
            />
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="font-medium transition-colors hover:text-[rgb(186,213,51)] text-white"
              >
                {item.label}
              </button>
            ))}
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[rgb(186,213,51)] text-[rgb(54,59,27)] px-6 py-2.5 rounded-full font-semibold hover:bg-[rgb(166,193,31)] transition-all hover:shadow-lg flex items-center space-x-2"
            >
              <ShoppingBag width={18} height={18} />
              <span>Fale Conosco</span>
            </a>
          </nav>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-[rgb(54,59,27)] bg-[rgb(186,213,51)] p-2 rounded-lg"
          >
            {menuOpen ? <Menu width={24} height={24} /> : <Menu width={24} height={24} />}
          </button>
        </div>
        {menuOpen && (
          <nav className="md:hidden mt-4 bg-[rgb(54,59,27)] rounded-xl p-4 flex flex-col space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="font-medium transition-colors hover:text-[rgb(186,213,51)] text-white text-left"
              >
                {item.label}
              </button>
            ))}
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[rgb(186,213,51)] text-[rgb(54,59,27)] px-6 py-2.5 rounded-full font-semibold hover:bg-[rgb(166,193,31)] transition-all flex items-center justify-center space-x-2"
            >
              <ShoppingBag width={18} height={18} />
              <span>Fale Conosco</span>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
