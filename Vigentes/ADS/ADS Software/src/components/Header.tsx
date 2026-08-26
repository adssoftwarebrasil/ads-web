import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Início', href: '/' },
  { label: 'Serviços', href: '/servicos' },
  { label: 'Blog', href: '/blog' },
  { label: 'Trabalhe Conosco', href: '/carreiras' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-transparent">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="/">
              <img
                src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=ads-site%2FlogoADS.png&version_id=null"
                alt="ADS Software - Marketing Digital"
                loading="eager"
                width="674"
                height="244"
                className="h-10 sm:h-12 w-auto"
              />
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                className="font-medium transition-colors text-white hover:text-[#f9bb04]"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/558007800040"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Falar conosco pelo WhatsApp"
              className="bg-[#33a753] hover:bg-[#2d9249] text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Falar Conosco
            </a>
          </div>
          <button
            className="md:hidden p-2 rounded-lg transition-colors text-white hover:bg-white/10"
            aria-label="Abrir menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>
        {open && (
          <div id="mobile-menu" className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                className="block font-medium transition-colors text-white hover:text-[#f9bb04] px-2 py-2"
                href={link.href}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/558007800040"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Falar conosco pelo WhatsApp"
              className="block text-center bg-[#33a753] hover:bg-[#2d9249] text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Falar Conosco
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
