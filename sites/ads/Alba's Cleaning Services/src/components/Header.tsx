import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { scrollToId } from '../lib/scroll';

const navItems: { label: string; id: string }[] = [
  { label: 'Home', id: 'hero' },
  { label: 'Services', id: 'services' },
  { label: 'Gallery', id: 'gallery' },
  { label: 'About Us', id: 'about' },
  { label: 'Testimonials', id: 'testimonials' },
  { label: 'Contact', id: 'contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const go = (id: string) => {
    scrollToId(id);
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <button className="flex items-center space-x-2 group" onClick={() => go('hero')}>
            <img
              src="logotipo_semfundo1.png"
              alt="Alba's Cleaning Services Logo"
              className="h-24 w-auto group-hover:scale-105 transition-transform duration-300"
            />
          </button>
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => go(item.id)}
                className="text-sm font-medium transition-colors duration-200 relative group whitespace-nowrap text-gray-700 hover:text-yellow-600"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 h-0.5 bg-yellow-600 transition-all duration-200 w-0 group-hover:w-full"></span>
              </button>
            ))}
          </nav>
          <div className="hidden md:block">
            <button
              onClick={() => go('contact')}
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-4 py-2 rounded-lg font-semibold text-sm hover:from-yellow-500 hover:to-yellow-600 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg whitespace-nowrap"
            >
              Get a Free Estimate
            </button>
          </div>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-yellow-600 hover:bg-gray-50 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {menuOpen && (
          <div className="lg:hidden pb-4 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => go(item.id)}
                className="block w-full text-left px-2 py-2 text-sm font-medium text-gray-700 hover:text-yellow-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => go('contact')}
              className="w-full mt-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-4 py-2 rounded-lg font-semibold text-sm hover:from-yellow-500 hover:to-yellow-600 transition-all duration-200"
            >
              Get a Free Estimate
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
