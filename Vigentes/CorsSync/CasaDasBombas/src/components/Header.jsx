import { useEffect, useState } from 'react'
import { ArrowUpRight, Gauge, Menu, X } from 'lucide-react'
import { site } from '../data/site'

const navigation = [
  { label: 'Soluções', href: '#solucoes' },
  { label: 'Assistência', href: '#assistencia' },
  { label: 'Como funciona', href: '#atendimento' },
  { label: 'Onde estamos', href: '#localizacao' },
]

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    document.body.classList.toggle('menu-open', isOpen)
    window.addEventListener('keydown', closeOnEscape)

    return () => {
      document.body.classList.remove('menu-open')
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [isOpen])

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#inicio" aria-label="Casa das Bombas e Compressores — início">
          <span className="brand-symbol" aria-hidden="true">
            <Gauge size={24} strokeWidth={2.4} />
          </span>
          <span className="brand-copy">
            <strong>Casa das Bombas</strong>
            <span>&amp; Compressores</span>
          </span>
        </a>

        <nav className={`main-navigation ${isOpen ? 'is-open' : ''}`} aria-label="Navegação principal">
          <div className="mobile-nav-head">
            <span>Menu</span>
            <button className="icon-button" type="button" onClick={closeMenu} aria-label="Fechar menu">
              <X size={24} />
            </button>
          </div>
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
            className="button button-primary mobile-nav-cta"
            href={site.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            Chamar no WhatsApp
            <ArrowUpRight size={18} />
          </a>
        </nav>

        <div className="header-actions">
          <a className="header-whatsapp" href={site.whatsappUrl} target="_blank" rel="noreferrer">
            Falar com um técnico
            <ArrowUpRight size={17} />
          </a>
          <button
            className="icon-button menu-button"
            type="button"
            onClick={() => setIsOpen(true)}
            aria-label="Abrir menu"
            aria-expanded={isOpen}
          >
            <Menu size={25} />
          </button>
        </div>
      </div>
      {isOpen && <button className="menu-backdrop" type="button" onClick={closeMenu} aria-label="Fechar menu" />}
    </header>
  )
}

export default Header
