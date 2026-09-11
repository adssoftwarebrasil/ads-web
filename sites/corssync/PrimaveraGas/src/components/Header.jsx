import { useEffect, useRef, useState } from 'react';
import { Clock3, MapPin, Menu, X } from 'lucide-react';
import logo from '../assets/logo-primavera.png';
import { business, navigation } from '../data/business';
import WhatsAppLink from './WhatsAppLink';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    const closeOutside = (event) => {
      if (!headerRef.current?.contains(event.target)) setMenuOpen(false);
    };
    const desktop = window.matchMedia('(min-width: 901px)');
    const closeOnDesktop = (event) => {
      if (event.matches) setMenuOpen(false);
    };
    document.addEventListener('keydown', closeOnEscape);
    document.addEventListener('pointerdown', closeOutside);
    desktop.addEventListener('change', closeOnDesktop);
    return () => {
      document.removeEventListener('keydown', closeOnEscape);
      document.removeEventListener('pointerdown', closeOutside);
      desktop.removeEventListener('change', closeOnDesktop);
    };
  }, [menuOpen]);

  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <div className="utility-bar">
        <div className="container utility-inner">
          <span>
            <MapPin size={13} aria-hidden="true" /> De Sinop. Para Sinop.
          </span>
          <span>
            <Clock3 size={13} aria-hidden="true" /> Atendimento das{' '}
            {business.hours}
          </span>
        </div>
      </div>
      <header className="site-header" ref={headerRef}>
        <div className="container header-inner">
          <a
            href="#inicio"
            className="brand"
            aria-label="Primavera Gás — início"
            onClick={() => setMenuOpen(false)}
          >
            <img src={logo} alt="Primavera Gás" width="300" height="300" />
          </a>
          <nav className="desktop-nav" aria-label="Navegação principal">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <WhatsAppLink className="header-order">Faça seu pedido</WhatsAppLink>
          <button
            ref={toggleRef}
            className="menu-toggle"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
        <nav
          id="mobile-navigation"
          className="mobile-nav"
          aria-label="Navegação móvel"
          hidden={!menuOpen}
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
              <span aria-hidden="true">↗</span>
            </a>
          ))}
          <WhatsAppLink />
        </nav>
      </header>
    </>
  );
}
