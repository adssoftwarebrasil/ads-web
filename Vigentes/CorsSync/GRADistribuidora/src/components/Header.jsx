import { useEffect, useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'
import logo from '../assets/gra-logo.jpg'

const navItems = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Estrutura', href: '#estrutura' },
  { label: 'Nossa história', href: '#historia' },
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

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#inicio" aria-label="GRA Distribuidora de Peças — início">
          <img src={logo} alt="GRA Distribuidora de Peças" />
        </a>

        <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Navegação principal">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <a
            className="nav-contact"
            href="https://wa.me/5562991073396?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20GRA%20e%20gostaria%20de%20atendimento."
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            <Phone size={17} aria-hidden="true" />
            Falar agora
          </a>
        </nav>

        <button
          className="menu-toggle"
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
