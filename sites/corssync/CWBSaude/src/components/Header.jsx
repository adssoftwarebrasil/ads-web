import { useEffect, useState } from 'react'
import { Menu, MessageCircle, X } from 'lucide-react'
import Brand from './Brand.jsx'
import HapvidaBrand from './HapvidaBrand.jsx'
import { whatsappUrl } from '../data/siteData.js'

const navItems = [
  { href: '#planos', label: 'Planos' },
  { href: '#consultoria', label: 'Como funciona' },
  { href: '#sobre', label: 'A CWB Saúde' },
  { href: '#duvidas', label: 'Dúvidas' },
  { href: '#contato', label: 'Contato' },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    document.addEventListener('keydown', closeOnEscape)
    document.body.classList.toggle('menu-open', menuOpen)
    return () => {
      document.removeEventListener('keydown', closeOnEscape)
      document.body.classList.remove('menu-open')
    }
  }, [menuOpen])

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <div className="site-header__brands">
          <a href="#inicio" className="site-header__brand" aria-label="Ir para o início">
            <Brand />
          </a>
          <span className="site-header__brand-divider" aria-hidden="true" />
          <HapvidaBrand />
        </div>

        <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Navegação principal">
          <div className="main-nav__panel">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            ))}
            <a className="button button--small main-nav__cta" href={whatsappUrl} target="_blank" rel="noreferrer">
              <MessageCircle size={17} aria-hidden="true" />
              Solicitar cotação
            </a>
          </div>
        </nav>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
    </header>
  )
}

export default Header
