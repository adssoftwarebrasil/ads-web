import { useEffect, useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'
import Brand from './Brand.jsx'
import { contact, links, navItems } from '../data/siteData.js'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    document.body.classList.toggle('menu-open', menuOpen)
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.body.classList.remove('menu-open')
      document.removeEventListener('keydown', handleEscape)
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <div className="topbar">
        <div className="container topbar__inner">
          <span>Seg a sex, 8h às 18h · Sáb, 8h às 12h</span>
          <a href={'tel:' + contact.phone} aria-label={'Ligar para ' + contact.phoneDisplay}>
            <Phone size={14} aria-hidden="true" />
            {contact.phoneDisplay}
          </a>
        </div>
      </div>

      <div className="nav-wrap">
        <div className="container nav-wrap__inner">
          <a className="brand-link" href="#inicio" aria-label="Óptica Renascer - início">
            <Brand />
          </a>

          <nav className={'main-nav' + (menuOpen ? ' is-open' : '')} aria-label="Navegação principal">
            <div className="main-nav__mobile-head">
              <Brand compact />
              <button type="button" onClick={closeMenu} aria-label="Fechar menu">
                <X aria-hidden="true" />
              </button>
            </div>
            <div className="main-nav__links">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={closeMenu}>
                  {item.label}
                </a>
              ))}
            </div>
            <a className="button button--primary main-nav__cta" href={links.whatsapp} target="_blank" rel="noreferrer">
              Falar no WhatsApp
            </a>
          </nav>

          <button
            className="menu-button"
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
          >
            <Menu aria-hidden="true" />
          </button>
        </div>
      </div>

      {menuOpen && <button className="menu-backdrop" type="button" onClick={closeMenu} aria-label="Fechar menu" />}
    </header>
  )
}

export default Header
