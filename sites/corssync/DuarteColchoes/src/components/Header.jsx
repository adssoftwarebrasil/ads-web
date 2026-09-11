import { useEffect, useState } from 'react'
import { Menu, MessageCircle, X } from 'lucide-react'
import Brand from './Brand'
import { createWhatsAppLink } from '../data/siteData'

const navItems = [
  { label: 'Produtos', href: '#produtos' },
  { label: 'Vitrine', href: '#vitrine' },
  { label: 'Nossa história', href: '#historia' },
  { label: 'Inspirações', href: '#inspiracoes' },
  { label: 'Contato', href: '#contato' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    function handleEscape(event) {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('keydown', handleEscape)
    document.body.classList.toggle('menu-is-open', open)

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.classList.remove('menu-is-open')
    }
  }, [open])

  return (
    <>
      <div className="topbar">
        <div className="container topbar__inner">
          <p>Conforto para o quarto e para a sala</p>
          <span aria-hidden="true">•</span>
          <p>Seg. a sex. 9h–18h · Sáb. 9h–13h</p>
        </div>
      </div>
      <header className="header">
        <div className="container header__inner">
          <Brand />
          <nav className={`nav ${open ? 'nav--open' : ''}`} aria-label="Navegação principal">
            <div className="nav__mobile-head">
              <Brand />
              <button className="icon-button" type="button" onClick={() => setOpen(false)} aria-label="Fechar menu">
                <X size={24} />
              </button>
            </div>
            <div className="nav__links">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              ))}
            </div>
            <a
              className="button button--red nav__cta"
              href={createWhatsAppLink()}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
            >
              <MessageCircle size={18} aria-hidden="true" />
              Falar no WhatsApp
            </a>
          </nav>
          <button
            className="icon-button header__menu"
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Abrir menu"
            aria-expanded={open}
          >
            <Menu size={25} />
          </button>
        </div>
      </header>
      {open && <button className="nav-backdrop" type="button" onClick={() => setOpen(false)} aria-label="Fechar menu" />}
    </>
  )
}

