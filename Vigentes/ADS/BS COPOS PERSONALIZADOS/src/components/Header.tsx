import { useState } from 'react';
import { Facebook, Instagram, Menu, X } from 'lucide-react';
import { navLinks } from '../data';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full z-[100] transition-all duration-300 bg-transparent">
      <header className="w-full bg-white transition-all duration-300 py-4">
        <nav className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <a href="#inicio" className="flex items-center">
            <img
              src="https://storage.lucasmendes.dev/site-sp/bscomerc%2Flogo.png"
              alt="BS Copos"
              className="transition-all duration-300 h-12 md:h-14"
            />
          </a>
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-700 hover:text-[#000EFF] font-bold text-sm uppercase transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="w-[1px] h-6 bg-slate-200"></div>
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/bscoposemacrilicopersonalizados"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-[#000EFF] transition-colors"
                aria-label="Facebook"
              >
                <Facebook width={20} height={20} />
              </a>
              <a
                href="https://www.instagram.com/bscopos/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-[#000EFF] transition-colors"
                aria-label="Instagram"
              >
                <Instagram width={20} height={20} />
              </a>
            </div>
          </div>
          <button
            className="lg:hidden p-2 text-[#000EFF]"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X width={28} height={28} /> : <Menu width={28} height={28} />}
          </button>
        </nav>

        {open && (
          <div className="lg:hidden bg-white border-t border-slate-100">
            <ul className="flex flex-col px-4 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-slate-700 hover:text-[#000EFF] font-bold text-sm uppercase transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4 px-4 pb-4">
              <a
                href="https://www.facebook.com/bscoposemacrilicopersonalizados"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-[#000EFF] transition-colors"
                aria-label="Facebook"
              >
                <Facebook width={20} height={20} />
              </a>
              <a
                href="https://www.instagram.com/bscopos/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-[#000EFF] transition-colors"
                aria-label="Instagram"
              >
                <Instagram width={20} height={20} />
              </a>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
