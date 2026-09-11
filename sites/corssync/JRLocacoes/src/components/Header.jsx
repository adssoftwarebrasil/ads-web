import { useEffect, useState } from 'react'
import { Menu, MessageCircle, X } from 'lucide-react'
import logo from '../assets/logo-jr-locacoes.jpeg'

const navItems = [
  { label: 'Início', href: '#inicio' },
  { label: 'Soluções', href: '#solucoes' },
  { label: 'Operações', href: '#operacoes' },
  { label: 'A JR', href: '#empresa' },
  { label: 'Contato', href: '#contato' },
]

const primaryWhatsApp =
  'https://wa.me/5562981648938?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20com%20a%20JR%20Loca%C3%A7%C3%B5es.'

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    document.addEventListener('keydown', closeOnEscape)
    document.body.classList.toggle('menu-open', isOpen)

    return () => {
      document.removeEventListener('keydown', closeOnEscape)
      document.body.classList.remove('menu-open')
    }
  }, [isOpen])

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#inicio" aria-label="JR Locações — início">
          <span className="brand-mark">
            <img src={logo} alt="" />
          </span>
          <span className="brand-copy">
            <strong>JR Locações</strong>
            <small>Munck &amp; Contêineres</small>
          </span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isOpen}
          aria-controls="menu-principal"
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>

        <div className={`header-panel ${isOpen ? 'is-open' : ''}`} id="menu-principal">
          <nav aria-label="Navegação principal">
            <ul className="nav-list">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} onClick={() => setIsOpen(false)}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a
            className="button button--compact button--red"
            href={primaryWhatsApp}
            target="_blank"
            rel="noreferrer"
            onClick={() => setIsOpen(false)}
          >
            <MessageCircle size={18} aria-hidden="true" />
            Pedir orçamento
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
