import { useEffect, useState } from 'react';
import { Phone, Menu } from 'lucide-react';

const navItems: { label: string; id: string }[] = [
  { label: 'Início', id: 'hero' },
  { label: 'Serviços', id: 'services' },
  { label: 'Produtos', id: 'products' },
  { label: 'Sobre', id: 'history' },
  { label: 'Depoimentos', id: 'testimonials' },
  { label: 'Contato', id: 'contact' },
];

const LOGO =
  'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=pet-raposo%2Floogo-pet-raposo.png&version_id=null';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
          scrolled ? 'shadow-md' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <img src={LOGO} alt="Pet Raposo Logo" className="h-12 w-auto" />
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-black hover:text-[rgb(253,118,22)] transition-colors duration-300 font-medium"
                >
                  {item.label}
                </button>
              ))}
              <a
                href="https://wa.me/5591985220505"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[rgb(253,118,22)] text-white px-6 py-3 rounded-lg hover:bg-[rgb(233,98,2)] transition-all duration-300 font-semibold flex items-center gap-2"
              >
                <Phone size={18} />
                Fale Conosco
              </a>
            </nav>
            <button
              className="md:hidden text-black"
              onClick={() => setMenuOpen(true)}
              aria-label="Abrir menu"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>

      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity duration-300 md:hidden ${
          menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      ></div>

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white z-50 shadow-xl transform transition-transform duration-300 md:hidden ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col p-6 space-y-6 mt-20">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-black hover:text-[rgb(253,118,22)] transition-colors duration-300 font-medium text-left"
            >
              {item.label}
            </button>
          ))}
          <a
            href="https://wa.me/5591985220505"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[rgb(253,118,22)] text-white px-6 py-3 rounded-full hover:bg-[rgb(233,98,2)] transition-all duration-300 font-semibold text-center flex items-center justify-center gap-2"
          >
            <Phone size={18} />
            Fale Conosco
          </a>
        </div>
      </div>
    </>
  );
}
