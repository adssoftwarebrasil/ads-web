import { useEffect, useState } from 'react'
import { Menu, ShoppingBag, X } from 'lucide-react'
import logo from '../assets/logo-pizza-do-gaucho.jpg'
import { links, navItems } from '../data/site'

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#inicio" aria-label="Pizza do Gaúcho — início">
          <img src={logo} alt="Pizza do Gaúcho" />
        </a>

        <nav className={`main-nav ${isOpen ? 'is-open' : ''}`} aria-label="Navegação principal">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
              {item.label}
            </a>
          ))}
          <a
            className="nav-order-mobile"
            href={links.whatsapp}
            target="_blank"
            rel="noreferrer"
            onClick={() => setIsOpen(false)}
          >
            Fazer pedido
          </a>
        </nav>

        <a className="button button-small header-order" href={links.whatsapp} target="_blank" rel="noreferrer">
          <ShoppingBag size={17} aria-hidden="true" />
          Pedir agora
        </a>

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

