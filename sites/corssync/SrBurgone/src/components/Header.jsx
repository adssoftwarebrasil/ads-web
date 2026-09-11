import { useEffect, useRef, useState } from 'react';
import { Clock3, Menu, X } from 'lucide-react';
import Brand from './Brand';
import WhatsAppLink from './WhatsAppLink';
import { business, navigation } from '../data/site';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    if (!menuOpen) return;
    function onKeyDown(event) {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    }
    function onPointerDown(event) {
      if (!headerRef.current?.contains(event.target)) setMenuOpen(false);
    }
    const desktop = window.matchMedia('(min-width: 1000px)');
    const closeOnDesktop = () => {
      if (desktop.matches) setMenuOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);
    desktop.addEventListener('change', closeOnDesktop);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
      desktop.removeEventListener('change', closeOnDesktop);
    };
  }, [menuOpen]);

  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <div className="topbar">
        <div className="container topbar__inner">
          <span>DE GOIANIRA, COM MUITO SABOR.</span>
          <span>
            <Clock3 size={13} aria-hidden="true" /> {business.hours}
          </span>
        </div>
      </div>
      <header className="header" ref={headerRef}>
        <div className="container header__inner">
          <Brand />
          <nav className="desktop-nav" aria-label="Navegação principal">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <WhatsAppLink className="button button--red header__order">Bora pedir?</WhatsAppLink>
          <button
            ref={menuButton}
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        <nav
          id="mobile-menu"
          className="mobile-nav"
          aria-label="Navegação mobile"
          hidden={!menuOpen}
        >
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <WhatsAppLink className="button button--red" onClick={() => setMenuOpen(false)}>
            Fazer meu pedido
          </WhatsAppLink>
        </nav>
      </header>
    </>
  );
}
