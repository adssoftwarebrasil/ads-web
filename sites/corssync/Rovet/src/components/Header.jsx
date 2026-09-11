import { useEffect, useState } from 'react'
import { Clock3, Instagram, Menu, Phone, X } from 'lucide-react'
import logo from '../assets/logo-rovet.png'

const whatsappUrl =
  'https://wa.me/5563999466901?text=Ol%C3%A1%2C%20preciso%20de%20atendimento%20veterin%C3%A1rio.'

const navItems = [
  { label: 'Atendimento', href: '#atendimento' },
  { label: 'Estrutura', href: '#estrutura' },
  { label: 'Nossa história', href: '#historia' },
  { label: 'Loja', href: '#loja' },
  { label: 'Como chegar', href: '#contato' },
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
    <>
      <div className="emergency-bar">
        <div className="container emergency-bar__content">
          <p>
            <Clock3 aria-hidden="true" />
            Plantão presencial 24 horas, todos os dias
          </p>
          <div className="emergency-bar__links">
            <a href="tel:+5563999466901">
              <Phone aria-hidden="true" />
              (63) 99946-6901
            </a>
            <a
              href="https://www.instagram.com/rovethospital?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==&igsi=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram da Rovet"
            >
              <Instagram aria-hidden="true" />
              @rovethospital
            </a>
          </div>
        </div>
      </div>

      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#inicio" aria-label="Rovet - início">
            <img src={logo} alt="Rovet Hospital Veterinário" />
          </a>

          <nav className="desktop-nav" aria-label="Navegação principal">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <a className="button button--primary header-cta" href={whatsappUrl} target="_blank" rel="noreferrer">
            Chamar no WhatsApp
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>

        <div className={`mobile-menu ${menuOpen ? 'is-open' : ''}`} id="mobile-navigation">
          <nav className="container" aria-label="Navegação mobile">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            ))}
            <a className="button button--primary" href={whatsappUrl} target="_blank" rel="noreferrer" onClick={closeMenu}>
              Chamar no WhatsApp
            </a>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header
