import { Menu, MessageCircle, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { assets, contact } from '../data/siteData.js'

const navigation = [
  { label: 'Nossa história', href: '#historia' },
  { label: 'Delícias', href: '#delicias' },
  { label: 'Pães & salgados', href: '#paes-salgados' },
  { label: 'Visite', href: '#visite' },
]

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [])

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a className="brand" href="#inicio" aria-label="Padaria A Moderna - início" onClick={closeMenu}>
          <img src={assets.logoAModerna} alt="" />
          <span className="brand__text">
            <strong>A Moderna</strong>
            <small>Padaria artesanal</small>
          </span>
        </a>

        <nav className={`main-nav ${isOpen ? 'is-open' : ''}`} aria-label="Navegação principal">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <a
            className="button button--header"
            href={contact.whatsappHref}
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            <MessageCircle size={18} aria-hidden="true" />
            Chamar no WhatsApp
          </a>
        </nav>

        <button
          className="menu-toggle"
          type="button"
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
    </header>
  )
}

export default Header
