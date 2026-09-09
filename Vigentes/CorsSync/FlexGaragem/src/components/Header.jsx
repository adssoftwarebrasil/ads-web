import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import BrandMark from './BrandMark.jsx'

const navItems = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Resultados', href: '#resultados' },
  { label: 'A Flex', href: '#sobre' },
]

function Header() {
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
      <div className="utility-bar">
        <div className="container utility-bar__inner">
          <p>Barra Funda · São Paulo</p>
          <div>
            <a href="mailto:flexgaragem01@gmail.com">flexgaragem01@gmail.com</a>
            <span aria-hidden="true">/</span>
            <p>Seg–Sex · 08:30–18:00</p>
          </div>
        </div>
      </div>

      <div className="nav-shell">
        <div className="container nav-shell__inner">
          <BrandMark official />

          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>

          <nav id="main-navigation" className={`main-nav${menuOpen ? ' is-open' : ''}`} aria-label="Navegação principal">
            <ul>
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} onClick={() => setMenuOpen(false)}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              className="button button--small button--lime button--featured nav-cta"
              href="https://wa.me/5511911396107?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20servi%C3%A7o%20na%20Flex%20Garagem."
              target="_blank"
              rel="noreferrer"
              onClick={() => setMenuOpen(false)}
            >
              Agendar avaliação
              <ArrowUpRight aria-hidden="true" />
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
