import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const navItems: { label: string; id: string }[] = [
  { label: 'Início', id: 'inicio' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Contato', id: 'contato' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <img
              src="https://storage.lucasmendes.dev/site-sp/romaq%2Fimg%2FRomaqui%20Logo.webp"
              alt="Romaq Empilhadeiras"
              className="h-12 md:h-16 w-auto"
            />
          </div>
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-[rgb(240,186,25)] transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
            <a
              href="tel:+553432321300"
              className="flex items-center gap-2 bg-[rgb(240,186,25)] text-[rgb(66,66,66)] px-6 py-3 rounded-lg font-semibold hover:bg-[rgb(220,166,5)] transition-colors"
            >
              <Phone className="lucide lucide-phone" width={20} height={20} />
              <span>(34) 3232-1300</span>
            </a>
          </nav>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden text-gray-700"
            aria-label="Menu"
          >
            {menuOpen ? (
              <X className="lucide lucide-x" width={28} height={28} />
            ) : (
              <Menu className="lucide lucide-menu" width={28} height={28} />
            )}
          </button>
        </div>
        {menuOpen && (
          <nav className="lg:hidden pb-4 flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left text-gray-700 hover:text-[rgb(240,186,25)] transition-colors font-medium py-2"
              >
                {item.label}
              </button>
            ))}
            <a
              href="tel:+553432321300"
              className="flex items-center gap-2 bg-[rgb(240,186,25)] text-[rgb(66,66,66)] px-6 py-3 rounded-lg font-semibold hover:bg-[rgb(220,166,5)] transition-colors w-max"
            >
              <Phone className="lucide lucide-phone" width={20} height={20} />
              <span>(34) 3232-1300</span>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
