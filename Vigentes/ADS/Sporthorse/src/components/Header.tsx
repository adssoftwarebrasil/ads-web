import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Produtos', id: 'servicos' },
  { label: 'Vantagens', id: 'vantagens' },
  { label: 'Depoimentos', id: 'depoimentos' },
  { label: 'Contato', id: 'contato' },
];

const logo =
  'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=sporthorse%2Flogo-1.webp&version_id=null';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
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
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={logo}
              alt="C Medeiros Boutique"
              className={`h-12 w-auto transition-all duration-300 ${
                scrolled ? '' : 'brightness-0 invert'
              }`}
            />
          </div>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'hover:bg-gray-100 text-gray-900' : 'hover:bg-white/10 text-white'
            }`}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`font-medium transition-colors hover:text-[rgb(0,200,0)] ${
                  scrolled ? 'text-gray-900' : 'text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
        {menuOpen && (
          <div className="lg:hidden mt-4 flex flex-col gap-2 bg-white rounded-lg shadow-lg p-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="font-medium text-left text-gray-900 hover:text-[rgb(0,123,0)] transition-colors py-2"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
