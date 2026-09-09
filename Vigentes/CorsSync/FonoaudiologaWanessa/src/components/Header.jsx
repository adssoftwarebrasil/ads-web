import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import logo from '../assets/images/logo-wanessa.jpg'
import { whatsappUrl } from '../data/contact.js'

const links = [
  { label: 'Início', href: '#inicio' },
  { label: 'Atendimentos', href: '#atendimentos' },
  { label: 'Wanessa', href: '#wanessa' },
  { label: 'Espaço', href: '#espaco' },
  { label: 'Contato', href: '#contato' },
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
      <div className="container header-inner">
        <a className="brand" href="#inicio" aria-label="Wanessa Fonoaudióloga — início">
          <img src={logo} alt="Wanessa Fonoaudióloga" />
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          aria-controls="menu-principal"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>

        <nav
          id="menu-principal"
          className={`main-nav ${menuOpen ? 'main-nav--open' : ''}`}
          aria-label="Navegação principal"
        >
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a
            className="button button--small"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            Agendar conversa
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
