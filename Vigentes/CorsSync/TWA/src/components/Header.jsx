import { useEffect, useState } from 'react'
import { Menu, MessageCircle, X } from 'lucide-react'
import logo from '../assets/images/twa-logo.png'
import { createWhatsAppUrl } from '../data/siteData'

const navigation = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Quem somos', href: '#quem-somos' },
  { label: 'Contato', href: '#contato' },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)

    const closeWithEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    window.addEventListener('keydown', closeWithEscape)
    return () => {
      document.body.classList.remove('menu-open')
      window.removeEventListener('keydown', closeWithEscape)
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#inicio" aria-label="TWA Tecnologia — início" onClick={closeMenu}>
          <img src={logo} alt="TWA Tecnologia" />
        </a>

        <nav
          id="main-navigation"
          className={`main-navigation ${menuOpen ? 'is-open' : ''}`}
          aria-label="Navegação principal"
        >
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}

          <a
            className="button button--accent mobile-menu-cta"
            href={createWhatsAppUrl()}
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            <MessageCircle size={18} aria-hidden="true" />
            Falar com especialista
          </a>
        </nav>

        <a
          className="button button--accent header-cta"
          href={createWhatsAppUrl()}
          target="_blank"
          rel="noreferrer"
        >
          Falar com especialista
        </a>

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

export default Header
