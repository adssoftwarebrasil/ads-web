import { useEffect, useState } from 'react'
import { Clock3, Menu, MessageCircle, X } from 'lucide-react'
import logo from '../assets/images/logo-barzin.png'
import { contact } from '../data/siteData.js'

const navItems = [
  { label: 'Cardápio', href: '#cardapio' },
  { label: 'Nossa história', href: '#historia' },
  { label: 'O Barzin', href: '#galeria' },
  { label: 'Como chegar', href: '#visite' },
]

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('menu-open', isOpen)

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => {
      document.body.classList.remove('menu-open')
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [isOpen])

  const closeMenu = () => setIsOpen(false)

  return (
    <>
      <div className="topline">
        <div className="container topline__content">
          <span>Bar & restaurante em Trindade, GO</span>
          <span className="topline__hours"><Clock3 size={14} aria-hidden="true" /> 11h às 00h</span>
        </div>
      </div>
      <header className="header">
        <div className="container header__inner">
          <a className="brand" href="#inicio" aria-label="Barzin de Esquina — início">
            <img src={logo} alt="" />
            <span>Barzin <small>de Esquina</small></span>
          </a>

          <nav className={`nav ${isOpen ? 'is-open' : ''}`} aria-label="Navegação principal">
            <div className="nav__mobile-brand" aria-hidden="true">Vai ver se eu tô na esquina.</div>
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu}>{item.label}</a>
            ))}
            <a className="button button--red nav__cta" href={contact.whatsappUrl} target="_blank" rel="noreferrer">
              <MessageCircle size={18} aria-hidden="true" /> Falar com o Barzin
            </a>
          </nav>

          <a className="header__cta" href={contact.whatsappUrl} target="_blank" rel="noreferrer">
            <MessageCircle size={18} aria-hidden="true" /> WhatsApp
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
    </>
  )
}

export default Header
