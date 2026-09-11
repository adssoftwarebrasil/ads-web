import { useState } from 'react';
import { Phone, Menu } from 'lucide-react';

const navLinks = [
  { label: 'Services', id: 'services' },
  { label: 'Why Choose Us', id: 'why-choose-us' },
  { label: 'Fleet', id: 'fleet' },
  { label: 'Testimonials', id: 'testimonials' },
  { label: 'FAQ', id: 'faq' },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black/95 backdrop-blur-sm shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img
              src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=royall%2Fimg%2Flogo.jpg&version_id=null"
              alt="Royal Ride LLC"
              className="h-20 w-auto object-contain"
            />
          </div>
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-white hover:text-yellow-400 transition-colors font-medium"
              >
                {link.label}
              </button>
            ))}
            <a
              href="tel:5103162021"
              className="flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-2.5 rounded-full font-semibold hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105"
            >
              <Phone size={18} />
              <span>(510) 316-2021</span>
            </a>
          </nav>
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-sm border-t border-yellow-400/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-white hover:text-yellow-400 transition-colors font-medium text-left"
              >
                {link.label}
              </button>
            ))}
            <a
              href="tel:5103162021"
              className="flex items-center justify-center space-x-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-2.5 rounded-full font-semibold"
            >
              <Phone size={18} />
              <span>(510) 316-2021</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
