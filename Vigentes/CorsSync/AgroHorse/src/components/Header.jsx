import { useEffect, useState } from 'react'
import { Instagram, Menu, MessageCircle, X } from 'lucide-react'
import logo from '../assets/logo-agrohorse.jpg'
import { contact, whatsappLink } from '../data/catalog.js'

const navItems = [
  { label: 'Coleções', href: '#colecoes' },
  { label: 'Nossa história', href: '#historia' },
  { label: 'Novidades', href: '#novidades' },
  { label: 'Visite a loja', href: '#visite' },
]

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('menu-open', isOpen)
    return () => document.body.classList.remove('menu-open')
  }, [isOpen])

  useEffect(() => {
    const onEscape = (event) => {
      if (event.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', onEscape)
    return () => window.removeEventListener('keydown', onEscape)
  }, [])

  return (
    <header className="site-header">
      <div className="top-note">
        <span>Há 12 anos vivendo a tradição country</span>
        <a href={contact.instagram} target="_blank" rel="noreferrer">
          <Instagram size={15} aria-hidden="true" /> @agrohorsewestern
        </a>
      </div>
      <div className="header-main shell">
        <a className="brand" href="#inicio" aria-label="AgroHorse Western — início">
          <img src={logo} alt="AgroHorse Western" />
          <span>
            <strong>AgroHorse</strong>
            <small>Western</small>
          </span>
        </a>

        <nav className={`main-nav ${isOpen ? 'is-open' : ''}`} aria-label="Navegação principal">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
              {item.label}
            </a>
          ))}
          <a
            className="mobile-only mobile-social"
            href={contact.instagram}
            target="_blank"
            rel="noreferrer"
            onClick={() => setIsOpen(false)}
          >
            <Instagram size={18} aria-hidden="true" /> Instagram
          </a>
        </nav>

        <a
          className="button button-dark header-cta"
          href={whatsappLink('Olá! Gostaria de conhecer os produtos da AgroHorse Western.')}
          target="_blank"
          rel="noreferrer"
        >
          <MessageCircle size={18} aria-hidden="true" /> Falar com a loja
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
      {isOpen && <button className="menu-backdrop" type="button" aria-label="Fechar menu" onClick={() => setIsOpen(false)} />}
    </header>
  )
}

export default Header
