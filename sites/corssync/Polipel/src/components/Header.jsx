import { useEffect, useState } from 'react'
import { Clock3, Menu, MessageCircle, Phone, X } from 'lucide-react'
import { PHONE_DISPLAY, PHONE_LINK, WHATSAPP_LINK } from '../data.js'
import { Brand } from './Brand.jsx'

const navItems = [
  { href: '#inicio', label: 'Início' },
  { href: '#produtos', label: 'Produtos' },
  { href: '#diferenciais', label: 'Por que a Polipel' },
  { href: '#loja', label: 'Visite a loja' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)
    return () => document.body.classList.remove('menu-open')
  }, [menuOpen])

  return (
    <header className="site-header">
      <div className="utility-bar">
        <div className="container utility-bar__inner">
          <span><Clock3 size={15} aria-hidden="true" /> Seg–sex, 8h às 18h · Sáb, 8h às 13h</span>
          <a href={PHONE_LINK} aria-label={`Ligar para a Polipel no número ${PHONE_DISPLAY}`}>
            <Phone size={15} aria-hidden="true" /> {PHONE_DISPLAY}
          </a>
        </div>
      </div>

      <div className="nav-wrap">
        <div className="container nav-wrap__inner">
          <a className="brand-link" href="#inicio" aria-label="Polipel — ir para o início">
            <Brand />
          </a>

          <nav className={`main-nav ${menuOpen ? 'main-nav--open' : ''}`} aria-label="Navegação principal">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            ))}
            <a className="button button--small button--nav" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
              <MessageCircle size={18} aria-hidden="true" /> Pedir pelo WhatsApp
            </a>
          </nav>

          <button
            className="menu-button"
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

