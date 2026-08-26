import { useEffect, useState } from 'react';
import { WhatsAppIcon } from './icons';

const IMG = 'https://fabbiturturismo.com.br';
const WA_PASSAGEM =
  'https://wa.me/5599984741978?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Fabbitur%20e%20gostaria%20de%20consultar%20uma%20passagem.';

const navLinks = [
  { href: '/comprar-passagem', label: 'Comprar passagem' },
  { href: '/rotas', label: 'Rotas' },
  { href: '/encomendas', label: 'Encomendas' },
  { href: '/frota', label: 'Frota' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/contato', label: 'Contato' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[var(--color-green-700)] focus:text-white focus:rounded-lg focus:font-semibold"
      >
        Pular para o conteúdo
      </a>
      <header
        id="site-header"
        className="sticky top-0 z-50 bg-white border-b border-[var(--color-border)] shadow-[0_2px_12px_rgba(16,20,24,0.06)]"
        role="banner"
      >
        <div className="container-site flex items-center justify-between h-24 gap-4">
          {/* Logo */}
          <a href="/" aria-label="Fabbitur Turismo – página inicial" className="flex-shrink-0 flex items-center">
            <picture>
              <source type="image/webp" srcSet={`${IMG}/images/logo-fabbitur.webp`} />
              <img
                src={`${IMG}/images/logo-fabbitur.png`}
                alt="Fabbitur Turismo"
                width={254}
                height={80}
                className="h-20 w-auto object-contain"
                fetchPriority="high"
              />
            </picture>
          </a>

          {/* Desktop nav */}
          <nav aria-label="Navegação principal" className="hidden lg:flex items-center gap-1">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-2 text-sm font-medium text-[var(--color-text-900)] hover:text-[var(--color-green-700)] rounded-md transition-colors duration-150"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
            <a
              href={WA_PASSAGEM}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-sm px-4 py-2"
              aria-label="Abrir WhatsApp da Fabbitur"
            >
              <WhatsAppIcon size={18} />
              WhatsApp
            </a>
            <a href="/comprar-passagem" className="btn-primary text-sm px-4 py-2">
              Comprar passagem
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            id="menu-btn"
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-md text-[var(--color-text-900)] hover:bg-[var(--color-green-100)] transition-colors"
            aria-label="Abrir menu de navegação"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <svg
              width={22}
              height={22}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.2}
              aria-hidden="true"
              className={open ? 'hidden' : ''}
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
            <svg
              width={22}
              height={22}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.2}
              aria-hidden="true"
              className={open ? '' : 'hidden'}
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          className={`lg:hidden ${open ? '' : 'hidden'} border-t border-[var(--color-border)] bg-white`}
          role="navigation"
          aria-label="Menu mobile"
        >
          <div className="container-site py-4 flex flex-col gap-1">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="block px-3 py-3 text-base font-medium text-[var(--color-text-900)] hover:text-[var(--color-green-700)] hover:bg-[var(--color-green-100)] rounded-md transition-colors"
              >
                {l.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 mt-3 pt-3 border-t border-[var(--color-border)]">
              <a
                href={WA_PASSAGEM}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp justify-center"
              >
                <WhatsAppIcon size={18} />
                WhatsApp
              </a>
              <a href="/comprar-passagem" className="btn-primary justify-center">
                Comprar passagem
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
