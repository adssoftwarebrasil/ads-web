import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const navItems = ['Home', 'Services', 'Blog', 'About', 'Contact'];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center cursor-pointer">
            <img
              src="https://storage-admin.lucasmendes.dev/api/v1/buckets/velura/objects/download?preview=true&prefix=img%2Fvelura%20logo2.png&version_id=null"
              alt="Velura Clean Logo"
              className="h-16 sm:h-24 w-auto transition-transform hover:scale-105"
            />
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, i) => (
              <button
                key={item}
                className={
                  i === 0
                    ? 'text-base font-medium transition-colors text-[#B59C6B] font-semibold'
                    : 'text-base font-medium transition-colors text-[#1C2A39] hover:text-[#B59C6B]'
                }
              >
                {item}
              </button>
            ))}
            <a
              href="tel:+14156322837"
              className="flex items-center gap-2 bg-[#D4AF78] text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-[#B59C6B] transition-all hover:scale-105"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden lg:inline">Call Now</span>
            </a>
          </nav>
          <button className="md:hidden text-[#1C2A39]" onClick={() => setMenuOpen((o) => !o)} aria-label="Menu">
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {menuOpen && (
          <nav className="md:hidden pb-4 flex flex-col space-y-2">
            {navItems.map((item, i) => (
              <button
                key={item}
                className={
                  i === 0
                    ? 'text-left py-2 text-base font-medium text-[#B59C6B] font-semibold'
                    : 'text-left py-2 text-base font-medium text-[#1C2A39] hover:text-[#B59C6B]'
                }
              >
                {item}
              </button>
            ))}
            <a
              href="tel:+14156322837"
              className="flex items-center gap-2 bg-[#D4AF78] text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-[#B59C6B] transition-all w-fit"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
