import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const LOGO = 'https://storage.lucasmendes.dev/site-sp/cotec%2Flogo.webp';

const navItems: { label: string; id: string }[] = [
  { label: 'Início', id: 'hero' },
  { label: 'Sobre', id: 'about' },
  { label: 'Serviços', id: 'services' },
  { label: 'Vantagens', id: 'advantages' },
  { label: 'Depoimentos', id: 'testimonials' },
  { label: 'Contato', id: 'contact' },
];

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleNav = (id: string) => {
    setOpen(false);
    scrollTo(id);
  };

  return (
    <div className="relative z-50">
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-[#333333]/95 backdrop-blur-sm">
        <div style={{ maxWidth: '1400px', margin: '0px auto', padding: '0px 2rem', width: '100%' }}>
          <div className="py-4 flex items-center justify-between gap-8">
            <div className="flex items-center z-50" style={{ marginLeft: '6rem' }}>
              <img
                src={LOGO}
                alt="COTEC Logo"
                className="h-12 w-auto cursor-pointer transition-transform duration-300 hover:scale-105"
                loading="eager"
                onClick={() => scrollTo('hero')}
              />
            </div>
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className="nav-link relative text-white font-medium text-[15px] transition-all duration-300 hover:text-[#FB6F11] after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#FB6F11] after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.label}
                </button>
              ))}
              <a
                href="https://wa.me/5579998311944"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FB6F11] text-white px-6 py-2.5 rounded-full font-medium hover:bg-[#e56410] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#FB6F11]/50"
              >
                WhatsApp
              </a>
            </nav>
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden text-white hover:text-[#FB6F11] transition-colors duration-300 z-50"
              aria-label="Toggle menu"
            >
              <Menu size={28} className="lucide lucide-menu " />
            </button>
          </div>
        </div>
      </header>

      <div
        onClick={() => setOpen(false)}
        className={`lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      ></div>

      <div
        className={`lg:hidden fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-[#333333] shadow-2xl z-50 transform transition-transform duration-500 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 h-full flex flex-col">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6 text-white hover:text-[#FB6F11] transition-colors duration-300"
            aria-label="Close menu"
          >
            <X size={24} className="lucide lucide-x " />
          </button>
          <div className="mt-4 mb-8">
            <img src={LOGO} alt="COTEC Logo" className="h-10 w-auto" loading="lazy" />
          </div>
          <nav className="flex flex-col space-y-1 flex-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="text-left text-white font-medium py-3 px-4 rounded-lg hover:bg-[#FB6F11]/10 hover:text-[#FB6F11] transition-all duration-300 border-b border-white/5"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <a
            href="https://wa.me/5579998311944"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FB6F11] text-white px-6 py-3 rounded-full text-center font-medium hover:bg-[#e56410] transition-all duration-300 hover:shadow-lg hover:shadow-[#FB6F11]/50 mt-6"
          >
            WhatsApp
          </a>
          <div className="mt-6 pt-6 border-t border-white/10">
            <p className="text-white/60 text-xs text-center">(79) 99831-1944 | (79) 3013-0061</p>
          </div>
        </div>
      </div>
    </div>
  );
}
