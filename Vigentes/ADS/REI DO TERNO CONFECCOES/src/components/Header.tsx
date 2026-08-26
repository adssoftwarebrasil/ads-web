import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const LOGO =
  'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=rei-do-terno%2FWhatsApp_Image_2025-10-27_at_15.17.32-removebg-preview%201.png&version_id=null';

const NAV_ITEMS: { label: string; target: string }[] = [
  { label: 'Início', target: 'inicio' },
  { label: 'Produtos', target: 'produtos' },
  { label: 'Galeria', target: 'galeria' },
  { label: 'Contato', target: 'contato' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src={LOGO} alt="Rei do Terno" className="h-12 md:h-16 w-auto" />
        </div>
        <div className="hidden md:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.target}
              onClick={() => scrollTo(item.target)}
              className="text-[#2D587A] hover:text-[#B89E5E] transition-colors font-medium"
            >
              {item.label}
            </button>
          ))}
          <a
            href="https://wa.me/5517992369599"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#B89E5E] text-white px-6 py-2 rounded-lg hover:bg-[#a08952] transition-all hover:scale-105 font-semibold"
          >
            Fale Conosco
          </a>
        </div>
        <button
          onClick={() => setMenuOpen((o) => !o)}
          className="md:hidden text-[#2D587A] p-2"
          aria-label="Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-100">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.target}
                onClick={() => scrollTo(item.target)}
                className="text-left text-[#2D587A] hover:text-[#B89E5E] transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://wa.me/5517992369599"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#B89E5E] text-white px-6 py-2 rounded-lg hover:bg-[#a08952] transition-all font-semibold text-center"
            >
              Fale Conosco
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
