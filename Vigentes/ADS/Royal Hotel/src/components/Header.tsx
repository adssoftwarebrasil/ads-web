import { useState, useEffect } from 'react';
import { Instagram, Phone, Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Início', id: 'inicio' },
  { label: 'Quartos', id: 'quartos' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Localização', id: 'localizacao' },
  { label: 'Contato', id: 'contato' },
];

const LOGO =
  'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=royal%20hotel%2Fimage%2046.png&version_id=null';

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
        scrolled ? 'bg-[#435A4A]/95 backdrop-blur-md shadow-lg' : 'bg-[#435A4A]/95 backdrop-blur-md'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
          <div className="flex items-center flex-shrink-0">
            <img
              src={LOGO}
              alt="Royal Hotel Logo"
              className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto transition-all duration-300"
            />
          </div>
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-white hover:text-[#C8AF82] font-medium text-base xl:text-lg relative group transition-colors duration-300"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C8AF82] transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
            <a
              href="https://www.instagram.com/royalhoteldourados"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C8AF82] hover:text-white transition-all duration-300 hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram width={22} height={22} />
            </a>
            <a
              href="https://wa.me/5567992365009"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C8AF82] hover:text-white transition-all duration-300 hover:scale-110"
              aria-label="WhatsApp"
            >
              <Phone width={22} height={22} />
            </a>
            <button className="px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-xl bg-[#435A4A] text-white hover:bg-[#2D3A2F]  bg-[#C8AF82] hover:bg-[#D4AF37] text-[#2C2C2C] font-semibold px-6 py-2.5 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Reserve Agora
            </button>
          </div>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden text-white hover:text-[#C8AF82] transition-colors duration-300 p-2"
            aria-label="Menu"
          >
            {menuOpen ? <X width={28} height={28} /> : <Menu width={28} height={28} />}
          </button>
        </div>
        {menuOpen && (
          <div className="lg:hidden pb-4 animate-fadeIn">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="text-left text-white hover:text-[#C8AF82] font-medium text-lg py-2 transition-colors duration-300"
                >
                  {item.label}
                </button>
              ))}
              <div className="flex items-center gap-4 pt-2">
                <a
                  href="https://www.instagram.com/royalhoteldourados"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C8AF82] hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram width={22} height={22} />
                </a>
                <a
                  href="https://wa.me/5567992365009"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C8AF82] hover:text-white transition-colors"
                  aria-label="WhatsApp"
                >
                  <Phone width={22} height={22} />
                </a>
              </div>
              <button className="mt-2 bg-[#C8AF82] hover:bg-[#D4AF37] text-[#2C2C2C] font-semibold px-6 py-2.5 rounded-lg transition-all duration-300">
                Reserve Agora
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
