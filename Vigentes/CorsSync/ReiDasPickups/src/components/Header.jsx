import { useEffect, useState } from 'react'
import { Menu, MessageCircle, X } from 'lucide-react'
import Brand from './Brand.jsx'
import { whatsappUrl } from '../data/siteData.js'

const navItems = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#motores', label: 'Motores' },
  { href: '#empresa', label: 'A empresa' },
  { href: '#contato', label: 'Contato' },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)

    const handleEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    window.addEventListener('keydown', handleEscape)
    return () => {
      document.body.classList.remove('menu-open')
      window.removeEventListener('keydown', handleEscape)
    }
  }, [menuOpen])

  return (
    <header className="site-header">
      <div className="container header__inner">
        <a className="header__brand" href="#inicio" aria-label="Voltar ao início">
          <Brand compact />
        </a>

        <nav className={`header__nav ${menuOpen ? 'is-open' : ''}`} aria-label="Navegação principal">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <a
            className="button button--small button--primary header__mobile-cta"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
          >
            Chamar no WhatsApp
          </a>
        </nav>

        <a
          className="button button--small button--outline header__cta"
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
        >
          <MessageCircle size={17} aria-hidden="true" />
          Pedir orçamento
        </a>

        <button
          className="header__menu-button"
          type="button"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
    </header>
  )
}

export default Header
