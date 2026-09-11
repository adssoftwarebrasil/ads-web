import { useEffect, useState } from 'react'
import { MapPin, Menu, MessageCircle, X } from 'lucide-react'
import { contact, navItems } from '../data'
import { Brand } from './Brand'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)
    const closeOnEscape = (event) => event.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', closeOnEscape)
    return () => {
      document.body.classList.remove('menu-open')
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [menuOpen])

  return (
    <header className="site-header">
      <div className="topbar">
        <div className="container topbar__inner">
          <span><MapPin size={14} aria-hidden="true" /> Maringá/PR e região</span>
          <a href={contact.whatsappUrl} target="_blank" rel="noreferrer">
            <MessageCircle size={14} aria-hidden="true" /> {contact.whatsappLabel}
          </a>
        </div>
      </div>

      <div className="nav-shell">
        <div className="container nav-shell__inner">
          <Brand />
          <nav className={`main-nav${menuOpen ? ' main-nav--open' : ''}`} aria-label="Navegação principal">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            ))}
            <a className="button button--small button--primary nav-cta" href={contact.whatsappUrl} target="_blank" rel="noreferrer">
              Pedir orçamento
            </a>
          </nav>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>
    </header>
  )
}

