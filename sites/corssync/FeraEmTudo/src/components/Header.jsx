import { useEffect, useState } from 'react'
import { Menu, MessageCircle, X } from 'lucide-react'
import logo from '../assets/photos/logo-fera-em-tudo.jpeg'
import { whatsappUrl } from '../data/storeData.js'

const navItems = [
  { label: 'Departamentos', href: '#categorias' },
  { label: 'Nossa loja', href: '#sobre' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Contato', href: '#contato' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => {
      document.body.classList.remove('menu-open')
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [menuOpen])

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a className="brand" href="#inicio" aria-label="Fera em Tudo — início">
          <img src={logo} alt="Ferragista Fera em Tudo" />
        </a>

        <nav
          id="main-navigation"
          className={`main-nav ${menuOpen ? 'is-open' : ''}`}
          aria-label="Navegação principal"
        >
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <a
            className="button button--orange main-nav__cta"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            <MessageCircle size={18} aria-hidden="true" />
            Pedir informação
          </a>
        </nav>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
    </header>
  )
}
