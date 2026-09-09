import { useEffect, useState } from 'react'
import { Clock3, Menu, MessageCircle, X } from 'lucide-react'
import brandLogo from '../assets/brand/criatividade-e-cia.webp'
import { WHATSAPP_URL } from '../constants.js'

const links = [
  { label: 'Início', href: '#inicio' },
  { label: 'Departamentos', href: '#departamentos' },
  { label: 'Vitrine', href: '#vitrine' },
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
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [])

  return (
    <>
      <div className="top-bar">
        <div className="container top-bar__inner">
          <p>
            <Clock3 aria-hidden="true" />
            Segunda a sexta, 8h às 18h <span>•</span> Sábado, 8h às 13h
          </p>
          <a href="mailto:criatividadeecia@outlook.com">criatividadeecia@outlook.com</a>
        </div>
      </div>

      <header className="site-header">
        <div className="container site-header__inner">
          <a className="brand" href="#inicio" aria-label="Criatividade e Cia — voltar ao início">
            <span className="brand__crop">
              <img src={brandLogo} alt="Criatividade & Cia" />
            </span>
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
              className="button button--small button--primary main-nav__cta"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle aria-hidden="true" />
              Chamar agora
            </a>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header
