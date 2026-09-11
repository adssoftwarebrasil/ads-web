import { useState } from 'react';
import { ShoppingCart, Menu as MenuIcon } from 'lucide-react';

const navItems: { label: string; target: string }[] = [
  { label: 'Início', target: 'hero' },
  { label: 'Cardápio', target: 'menu' },
  { label: 'Sobre', target: 'about' },
  { label: 'Localização', target: 'location' },
  { label: 'Contato', target: 'footer' },
];

const WHATSAPP_ORDER =
  'https://wa.me/556232513597?text=Olá, gostaria de fazer um pedido!';

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
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:h-20">
            <div className="flex items-center">
              <img
                src="https://storage.lucasmendes.dev/site-sp/himitsu%2FLogo%20Himitsu%20White%20(1).png"
                alt="Himitsu Restaurante"
                className="h-10 lg:h-12 w-auto cursor-pointer"
                onClick={() => scrollTo('hero')}
              />
            </div>
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollTo(item.target)}
                  className="text-white hover:text-[#E02023] transition-colors font-exo"
                >
                  {item.label}
                </button>
              ))}
            </nav>
            <div className="hidden lg:block">
              <a
                href={WHATSAPP_ORDER}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#E02023] text-white px-6 py-3 rounded-lg hover:bg-[#c01a1e] transition-colors font-exo font-semibold"
              >
                Fazer Pedido
              </a>
            </div>
            <div className="flex lg:hidden items-center space-x-4">
              <a
                href={WHATSAPP_ORDER}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <ShoppingCart className="lucide lucide-shopping-cart w-6 h-6" />
              </a>
              <button className="text-white" onClick={() => setMenuOpen(true)}>
                <MenuIcon className="lucide lucide-menu w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>
      <div
        className={`fixed inset-0 bg-black z-40 transition-transform duration-300 lg:hidden ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full space-y-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.target)}
              className="text-white text-2xl hover:text-[#E02023] transition-colors font-exo"
            >
              {item.label}
            </button>
          ))}
          <a
            href={WHATSAPP_ORDER}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#E02023] text-white px-8 py-4 rounded-lg hover:bg-[#c01a1e] transition-colors font-exo font-semibold text-xl"
          >
            Fazer Pedido
          </a>
        </nav>
      </div>
    </>
  );
}
