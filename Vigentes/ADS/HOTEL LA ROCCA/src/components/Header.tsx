import { useEffect, useState } from 'react';
import { Phone, Menu } from 'lucide-react';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#quartos', label: 'Quartos' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const textColor = scrolled ? 'text-gray-900' : 'text-white';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="flex items-center">
            <img
              src="https://storage.lucasmendes.dev/site-sp/hotellarocca%2Flogo.webp"
              alt="Hotel La Rocca"
              className="h-12 object-contain"
            />
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors ${textColor} hover:text-gray-200`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+5562983080229"
              className={`flex items-center gap-2 font-medium ${textColor}`}
            >
              <Phone size={18} className="lucide lucide-phone " />
              (62) 98308-0229
            </a>
          </nav>
          <button
            className={`md:hidden ${textColor}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menu"
          >
            <Menu size={24} className="lucide lucide-menu " />
          </button>
        </div>
        {menuOpen && (
          <nav className="md:hidden bg-white rounded-xl shadow-lg mb-4 py-4 flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-6 py-3 font-medium text-gray-900 hover:text-[rgb(190,0,3)] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+5562983080229"
              onClick={() => setMenuOpen(false)}
              className="px-6 py-3 flex items-center gap-2 font-medium text-gray-900 hover:text-[rgb(190,0,3)] transition-colors"
            >
              <Phone size={18} />
              (62) 98308-0229
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
