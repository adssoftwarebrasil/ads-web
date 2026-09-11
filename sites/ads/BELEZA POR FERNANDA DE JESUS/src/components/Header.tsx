import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { WHATSAPP_URL, navLinks } from '../data';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black transition-all duration-300 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="#inicio" className="flex items-center gap-3">
            <img
              src="https://storage.lucasmendes.dev/site-sp/belezaporfernanda%2Flogo.webp"
              alt="Beleza por Fernanda de Jesus"
              className="h-10 sm:h-12 w-auto"
            />
            <span className="font-bold text-lg hidden sm:block transition-colors text-white">
              Beleza por Fernanda de Jesus
            </span>
          </a>
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors hover:opacity-70 text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition-all duration-300 hover:scale-105 font-medium"
          >
            <Phone className="w-4 h-4" />
            (85) 98805-5759
          </a>
          <button
            className="lg:hidden p-2 transition-colors text-white"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {open && (
          <nav className="lg:hidden mt-4 flex flex-col gap-4 pb-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium transition-colors hover:opacity-70 text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition-all duration-300 font-medium w-max"
            >
              <Phone className="w-4 h-4" />
              (85) 98805-5759
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
