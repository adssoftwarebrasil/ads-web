import { useEffect, useState } from 'react'
import Icon from './Icon.jsx'
import Logo from './Logo.jsx'

const links = [
  { label: 'Acomodações', href: '#acomodacoes' },
  { label: 'Experiência', href: '#experiencia' },
  { label: 'Nossa história', href: '#historia' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Localização', href: '#localizacao' },
]

function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
    return () => document.body.classList.remove('menu-open')
  }, [open])

  const closeMenu = () => setOpen(false)

  return (
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
      <div className="site-header__inner container">
        <Logo />
        <nav className={`site-nav ${open ? 'site-nav--open' : ''}`} aria-label="Navegação principal">
          <div className="site-nav__mobile-head">
            <Logo />
            <button className="icon-button" type="button" onClick={closeMenu} aria-label="Fechar menu">
              <Icon name="close" />
            </button>
          </div>
          <div className="site-nav__links">
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={closeMenu}>{link.label}</a>
            ))}
          </div>
          <a
            className="button button--primary site-nav__mobile-cta"
            href="https://wa.me/556233533888?text=Ol%C3%A1%2C%20gostaria%20de%20consultar%20a%20disponibilidade%20para%20uma%20hospedagem."
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            Consultar disponibilidade <Icon name="arrow" size={19} />
          </a>
        </nav>
        <a
          className="button button--primary site-header__cta"
          href="https://wa.me/556233533888?text=Ol%C3%A1%2C%20gostaria%20de%20consultar%20a%20disponibilidade%20para%20uma%20hospedagem."
          target="_blank"
          rel="noreferrer"
        >
          Reservar <Icon name="arrow" size={18} />
        </a>
        <button
          className="icon-button site-header__menu"
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Abrir menu"
          aria-expanded={open}
        >
          <Icon name="menu" />
        </button>
      </div>
      {open && <button className="menu-backdrop" type="button" onClick={closeMenu} aria-label="Fechar menu" />}
    </header>
  )
}

export default Header
