import { useEffect, useState } from 'react'
import { Clock3, Menu, Phone, X } from 'lucide-react'
import BrandLogo from './BrandLogo.jsx'

const navigation = [
  { label: 'Produtos', href: '#produtos' },
  { label: 'Nossa história', href: '#historia' },
  { label: 'Atendimento', href: '#atendimento' },
  { label: 'Contato', href: '#contato' },
]

const whatsappUrl =
  'https://wa.me/557536250670?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('menu-is-open', menuOpen)
    return () => document.body.classList.remove('menu-is-open')
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <div className="utility-bar">
        <div className="container utility-bar__inner">
          <span>
            <Clock3 aria-hidden="true" size={15} /> Seg–sex 07:30–17:00 · Sáb 07:30–11:30
          </span>
          <a href="tel:+557536250670">
            <Phone aria-hidden="true" size={15} /> (75) 3625-0670
          </a>
        </div>
      </div>

      <div className="navigation-shell">
        <div className="container navigation-shell__inner">
          <a className="logo-link" href="#inicio" aria-label="Feira Rolamentos — início">
            <BrandLogo />
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

          <nav
            id="main-navigation"
            className={`main-navigation ${menuOpen ? 'main-navigation--open' : ''}`}
            aria-label="Navegação principal"
          >
            <ul>
              {navigation.map((item) => (
                <li key={item.href}>
                  <a href={item.href} onClick={closeMenu}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              className="button button--small button--primary nav-cta"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
            >
              Pedir orçamento
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}

