import { useState } from 'react';
import { Phone, Menu } from 'lucide-react';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Quem Somos', id: 'quem-somos' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Produtos', id: 'produtos' },
  { label: 'Contato', id: 'contato' },
];

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (id: string) => {
    setMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[rgb(247,247,247)] transition-shadow duration-300 ">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-20">
          <div className="flex items-center justify-between h-[70px] lg:h-[80px]">
            <img
              src="https://storage.lucasmendes.dev/site-sp/manutherm%2Flogomanutherm.jpeg"
              alt="Manutherm Climatização"
              className="h-[40px] lg:h-[50px] w-auto"
            />
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className="text-[rgb(9,74,104)] hover:text-[rgb(28,123,179)] transition-colors duration-300 font-medium"
                >
                  {item.label}
                </button>
              ))}
              <a
                href="https://wa.me/5571999313609"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[rgb(9,74,104)] text-white px-6 py-3 rounded-lg hover:bg-[rgb(28,123,179)] transition-all duration-300 hover:-translate-y-0.5"
              >
                <Phone
                  width={18}
                  height={18}
                  strokeWidth={2}
                  className="lucide lucide-phone "
                />
                WhatsApp
              </a>
            </nav>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="lg:hidden text-[rgb(9,74,104)]"
              aria-label="Menu"
            >
              <Menu width={28} height={28} strokeWidth={2} className="lucide lucide-menu " />
            </button>
          </div>
        </div>
      </header>
      <div
        className={`fixed top-0 right-0 bottom-0 w-[280px] bg-white z-50 transform transition-transform duration-300 lg:hidden shadow-2xl ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col p-5 mt-16">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className="text-[rgb(9,74,104)] hover:text-[rgb(28,123,179)] transition-colors duration-300 font-medium py-4 border-b border-gray-100 text-left"
            >
              {item.label}
            </button>
          ))}
          <a
            href="https://wa.me/5571999313609"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[rgb(9,74,104)] text-white px-6 py-3 rounded-lg hover:bg-[rgb(28,123,179)] transition-all duration-300 mt-6"
          >
            <Phone width={18} height={18} strokeWidth={2} className="lucide lucide-phone " />
            WhatsApp
          </a>
        </nav>
      </div>
    </>
  );
}
