import { useEffect, useState } from 'react'
import { Clock3, Menu, MessageCircle, X } from 'lucide-react'
import logo from '../assets/brand/logo-juda.jpg'

const navItems = [
  { label: 'Novidades', href: '#novidades' },
  { label: 'Para você', href: '#para-voce' },
  { label: 'Nossa história', href: '#nossa-historia' },
  { label: 'Visite a loja', href: '#contato' },
]

const whatsappUrl =
  'https://wa.me/556492674193?text=Ol%C3%A1%2C%20Jud%C3%A1%20Cal%C3%A7ados!%20Gostaria%20de%20conhecer%20as%20novidades.'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }

    document.addEventListener('keydown', handleEscape)
    document.body.classList.toggle('menu-open', isMenuOpen)

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.classList.remove('menu-open')
    }
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <>
      <div className="announcement">
        <div className="container announcement__content">
          <span>Novidades para toda a família</span>
          <span className="announcement__hours">
            <Clock3 size={14} aria-hidden="true" /> Atendimento das 08:00 às 19:00
          </span>
        </div>
      </div>

      <header className="header">
        <div className="container header__inner">
          <a className="brand" href="#inicio" aria-label="Judá Calçados — início">
            <img src={logo} alt="Judá Calçados" />
          </a>

          <nav className="desktop-nav" aria-label="Navegação principal">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <a className="button button--gold header__cta" href={whatsappUrl} target="_blank" rel="noreferrer">
            <MessageCircle size={18} aria-hidden="true" /> Falar no WhatsApp
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>

        <div id="mobile-menu" className={`mobile-menu ${isMenuOpen ? 'is-open' : ''}`}>
          <nav aria-label="Navegação mobile">
            {navItems.map((item, index) => (
              <a key={item.href} href={item.href} onClick={closeMenu}>
                <span>0{index + 1}</span> {item.label}
              </a>
            ))}
            <a className="button button--gold" href={whatsappUrl} target="_blank" rel="noreferrer" onClick={closeMenu}>
              <MessageCircle size={19} aria-hidden="true" /> Falar no WhatsApp
            </a>
          </nav>
        </div>
      </header>
    </>
  )
}
