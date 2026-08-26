import { useState, useEffect } from 'react';
import { Phone, Clock, Menu, X } from 'lucide-react';
import {
  PHONE_DISPLAY,
  PHONE_HREF,
  INSTAGRAM_URL,
  HOURS,
  WA_DEFAULT,
  NAV_LINKS,
} from '../data';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? scrollTop / docHeight : 0);
      setScrolled(scrollTop > 20);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[70] focus:bg-accent focus:text-primary focus:px-4 focus:py-2 focus:rounded-full focus:font-semibold"
      >
        Pular para o conteúdo
      </a>

      <div
        className="fixed top-0 left-0 right-0 h-1 bg-accent z-[60] origin-left"
        style={{ transform: `scaleX(${progress})` }}
      ></div>

      {/* Top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 hidden md:block bg-primary text-white/75 text-xs border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-8 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <a
              href={PHONE_HREF}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone width={11} height={11} aria-hidden="true" />
              {PHONE_DISPLAY}
            </a>
            <span className="flex items-center gap-1.5">
              <Clock width={11} height={11} aria-hidden="true" />
              {HOURS}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener"
              className="hover:text-accent transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header
        className={`fixed left-0 right-0 z-40 transition-all duration-300 top-0 md:top-8 bg-white border-b border-gray-100 ${
          scrolled ? 'shadow-sm' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between gap-6">
          <a href="#" className="flex items-center gap-3 flex-shrink-0">
            <img alt="Planeta Ferros" className="h-10 w-auto" src="/images/logo.png" />
          </a>
          <nav className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a
              href={PHONE_HREF}
              className="flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-accent transition-colors"
            >
              <Phone width={14} height={14} aria-hidden="true" />
              {PHONE_DISPLAY}
            </a>
            <a
              href={WA_DEFAULT}
              target="_blank"
              rel="noopener"
              className="bg-accent text-white font-semibold px-5 py-2.5 rounded-full text-sm hover:bg-accent/90 transition-colors shadow-sm"
            >
              Orçamento grátis
            </a>
          </div>
          <button
            className="md:hidden text-primary p-1"
            aria-label="Menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? (
              <X width={24} height={24} aria-hidden="true" />
            ) : (
              <Menu width={24} height={24} aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4">
            <nav className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-3 px-2 text-sm font-medium text-gray-600 hover:text-accent transition-colors border-b border-gray-50"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={PHONE_HREF}
                onClick={() => setMenuOpen(false)}
                className="mt-2 flex items-center gap-2 py-2 px-2 text-sm font-medium text-gray-500 hover:text-accent transition-colors"
              >
                <Phone width={14} height={14} aria-hidden="true" />
                {PHONE_DISPLAY}
              </a>
              <a
                href={WA_DEFAULT}
                target="_blank"
                rel="noopener"
                onClick={() => setMenuOpen(false)}
                className="mt-2 text-center bg-accent text-white font-semibold px-5 py-3 rounded-full text-sm hover:bg-accent/90 transition-colors shadow-sm"
              >
                Orçamento grátis
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
