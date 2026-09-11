import { useEffect, useState } from 'react'
import { Clock3, MapPin, Menu, Phone, X } from 'lucide-react'
import logo from '../assets/logo-casa-das-oficinas.png'
import { whatsappUrl } from '../data/siteData'

const navItems = [
  { label: 'Soluções', href: '#solucoes' },
  { label: 'Peças e serviços', href: '#pecas-servicos' },
  { label: 'Nossa história', href: '#historia' },
  { label: 'Atendimento', href: '#contato' },
]

export default function Header() {
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

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="site-header">
      <div className="utility-bar">
        <div className="container utility-bar__inner">
          <span><MapPin size={14} aria-hidden="true" /> Feira de Santana e região</span>
          <span><Clock3 size={14} aria-hidden="true" /> Seg a sex, 7h30 às 18h · Sáb, 7h30 às 13h</span>
        </div>
      </div>

      <div className="nav-shell">
        <div className="container nav-shell__inner">
          <a className="brand" href="#inicio" aria-label="Casa das Oficinas — início">
            <img src={logo} alt="Casa das Oficinas — Auto Peças e Acessórios" />
          </a>

          <nav className={`main-nav ${isOpen ? 'is-open' : ''}`} aria-label="Navegação principal">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu}>{item.label}</a>
            ))}
            <a className="mobile-phone" href="tel:+557536148613">
              <Phone size={18} aria-hidden="true" /> (75) 3614-8613
            </a>
          </nav>

          <a className="header-cta" href={whatsappUrl} target="_blank" rel="noreferrer">
            Pedir atendimento
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
      </div>
    </header>
  )
}
