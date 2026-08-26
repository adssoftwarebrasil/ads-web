import { useState } from 'react';
import { Phone, Menu } from 'lucide-react';

const navItems = [
  { label: 'Início', id: 'início' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Serviços', id: 'serviços' },
  { label: 'Vantagens', id: 'vantagens' },
  { label: 'Depoimentos', id: 'depoimentos' },
  { label: 'Contato', id: 'contato' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 "
        style={{ height: '80px' }}
      >
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          <div className="flex-shrink-0">
            <img
              src="https://storage.lucasmendes.dev/site-sp/PNEU%20ZERO%2Flogo%2Flogo-atualizada-01.png"
              alt="Auto Center Pneu Zero"
              className="h-12 md:h-16 w-auto"
            />
          </div>
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-[rgb(3,3,4)] hover:text-[rgb(227,17,35)] transition-colors duration-300 font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-6">
            <a href="tel:+559930712591" className="flex items-center gap-2 group">
              <div className="bg-[rgb(227,17,35)] text-white p-2 rounded-full transition-transform group-hover:scale-110">
                <Phone
                  width={18}
                  height={18}
                  strokeWidth={2}
                  className="lucide lucide-phone "
                />
              </div>
              <span className="text-[rgb(3,3,4)] font-medium group-hover:text-[rgb(227,17,35)] transition-colors">
                (99) 3071-2591
              </span>
            </a>
            <a href="tel:+5599991458080" className="flex items-center gap-2 group">
              <div className="bg-[rgb(227,17,35)] text-white p-2 rounded-full transition-transform group-hover:scale-110">
                <Phone
                  width={18}
                  height={18}
                  strokeWidth={2}
                  className="lucide lucide-phone "
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-[10px] font-bold text-[rgb(227,17,35)] uppercase tracking-wide">
                  Agende seu serviço
                </span>
                <span className="text-[rgb(3,3,4)] font-medium group-hover:text-[rgb(227,17,35)] transition-colors">
                  (99) 99145-8080
                </span>
              </div>
            </a>
          </div>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden text-[rgb(3,3,4)]"
            aria-label="Menu"
          >
            <Menu width={28} height={28} strokeWidth={2} className="lucide lucide-menu " />
          </button>
        </div>
      </header>

      <div
        className={`fixed top-[80px] left-0 right-0 bg-white z-40 lg:hidden transition-transform duration-300 ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <nav className="flex flex-col p-6 gap-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-[rgb(3,3,4)] hover:text-[rgb(227,17,35)] transition-colors duration-300 text-lg font-medium text-left"
            >
              {item.label}
            </button>
          ))}
          <div className="flex flex-col gap-4 mt-4 pt-4 border-t border-gray-200">
            <a
              href="tel:+559930712591"
              className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-100 hover:border-[rgb(227,17,35)] transition-colors"
            >
              <div className="text-[rgb(227,17,35)]">
                <Phone width={20} height={20} strokeWidth={2} className="lucide lucide-phone " />
              </div>
              <span className="text-[rgb(3,3,4)] font-bold">(99) 3071-2591</span>
            </a>
            <a
              href="tel:+5599991458080"
              className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-100 hover:border-[rgb(227,17,35)] transition-colors"
            >
              <div className="text-[rgb(227,17,35)]">
                <Phone width={20} height={20} strokeWidth={2} className="lucide lucide-phone " />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-[rgb(227,17,35)] uppercase">
                  Agende seu serviço
                </span>
                <span className="text-[rgb(3,3,4)] font-bold">(99) 99145-8080</span>
              </div>
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
