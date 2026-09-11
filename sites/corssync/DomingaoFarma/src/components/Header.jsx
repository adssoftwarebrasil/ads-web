import { useEffect, useState } from 'react'
import { Menu, MessageCircle, X } from 'lucide-react'
import { contact, navigation } from '../data/siteData'
import { Brand } from './Brand'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    document.addEventListener('keydown', closeOnEscape)
    document.body.classList.toggle('menu-is-open', menuOpen)
    return () => {
      document.removeEventListener('keydown', closeOnEscape)
      document.body.classList.remove('menu-is-open')
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Brand compact />

        <nav id="mobile-navigation" className={'main-nav' + (menuOpen ? ' is-open' : '')} aria-label="Navegação principal">
          <div className="mobile-nav-heading">
            <span>Menu</span>
            <button type="button" onClick={closeMenu} aria-label="Fechar menu">
              <X size={24} aria-hidden="true" />
            </button>
          </div>
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <a className="button button--header mobile-nav-cta" href={contact.whatsappUrl} target="_blank" rel="noreferrer">
            <MessageCircle size={18} aria-hidden="true" />
            Chamar no WhatsApp
          </a>
        </nav>

        <a className="button button--header desktop-header-cta" href={contact.whatsappUrl} target="_blank" rel="noreferrer">
          <MessageCircle size={18} aria-hidden="true" />
          WhatsApp
        </a>

        <button
          className="menu-toggle"
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label="Abrir menu"
        >
          <Menu size={26} aria-hidden="true" />
        </button>
      </div>
      <button
        className={'nav-backdrop' + (menuOpen ? ' is-visible' : '')}
        type="button"
        onClick={closeMenu}
        tabIndex={menuOpen ? 0 : -1}
        aria-label="Fechar menu"
      />
    </header>
  )
}
