import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { IMG, NAV_LINKS, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from '../data';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-ink/90 backdrop-blur-md border-b border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#inicio" className="flex items-center shrink-0">
            <img src={IMG.logo} alt="Grife do Carro" className="h-12 w-auto" />
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-semibold tracking-wider text-white/80 hover:text-gold transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-5">
            <a
              href={PHONE_TEL}
              className="flex items-center gap-2 text-sm font-semibold text-white/90 hover:text-gold transition-colors"
            >
              <Phone className="w-4 h-4 text-gold" />
              {PHONE_DISPLAY}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener"
              className="rounded-full bg-gold px-5 py-2.5 text-xs font-bold tracking-wider text-black hover:bg-gold-light transition-colors"
            >
              WHATSAPP
            </a>
          </div>

          <button
            className="lg:hidden text-white p-2"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-ink border-t border-white/5">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-2 text-sm font-semibold tracking-wider text-white/80 hover:text-gold transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={PHONE_TEL}
              className="flex items-center gap-2 py-2 text-sm font-semibold text-white/90"
            >
              <Phone className="w-4 h-4 text-gold" />
              {PHONE_DISPLAY}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-gold px-5 py-2.5 text-center text-xs font-bold tracking-wider text-black"
            >
              WHATSAPP
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
