import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const WHATSAPP_URL = 'http://wa.me/5548988277661';

const navItems: { label: string; target: string }[] = [
  { label: 'Início', target: 'inicio' },
  { label: 'Sobre', target: 'sobre' },
  { label: 'Produtos', target: 'catalogo' },
  { label: 'Depoimentos', target: 'depoimentos' },
  { label: 'Contato', target: 'contato' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[rgb(254,254,252)]/95 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <img
              src="https://storage.lucasmendes.dev/site-sp/moonlight%20pijamas%2Fimg%2Flogo-sem-fundo.webp"
              alt="Moonlight Pijamas"
              className="h-16 w-auto"
            />
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.target}
                onClick={() => scrollTo(item.target)}
                className="text-[rgb(102,78,56)] hover:text-[rgb(111,86,60)] transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[rgb(102,78,56)] text-[rgb(254,254,252)] px-6 py-2.5 rounded-full hover:bg-[rgb(111,86,60)] transition-all duration-300 flex items-center gap-2 font-medium shadow-md hover:shadow-lg"
            >
              <Phone width={18} height={18} />
              Atendimento
            </a>
          </nav>
          <button
            className="md:hidden text-[rgb(102,78,56)]"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menu"
          >
            {menuOpen ? <X width={28} height={28} /> : <Menu width={28} height={28} />}
          </button>
        </div>
        {menuOpen && (
          <nav className="md:hidden pb-4 flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.target}
                onClick={() => scrollTo(item.target)}
                className="text-left text-[rgb(102,78,56)] hover:text-[rgb(111,86,60)] transition-colors font-medium py-2"
              >
                {item.label}
              </button>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[rgb(102,78,56)] text-[rgb(254,254,252)] px-6 py-2.5 rounded-full hover:bg-[rgb(111,86,60)] transition-all duration-300 flex items-center justify-center gap-2 font-medium shadow-md hover:shadow-lg"
            >
              <Phone width={18} height={18} />
              Atendimento
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
