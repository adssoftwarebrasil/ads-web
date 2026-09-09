import { useEffect, useState } from 'react'
import { Menu, MessageCircle, X } from 'lucide-react'
import Brand from './Brand'
import { defaultWhatsAppLink, navigation } from '../data/siteData'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 18)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)
    return () => document.body.classList.remove('menu-open')
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container header__inner">
        <Brand light />

        <nav className={`header__nav ${menuOpen ? 'is-open' : ''}`} aria-label="Navegação principal">
          <div className="mobile-nav__top">
            <span>Menu</span>
            <button type="button" onClick={closeMenu} aria-label="Fechar menu">
              <X size={22} />
            </button>
          </div>
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <a
            className="button button--gold mobile-nav__cta"
            href={defaultWhatsAppLink}
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            <MessageCircle size={18} />
            Solicitar atendimento
          </a>
        </nav>

        <a className="header__cta" href={defaultWhatsAppLink} target="_blank" rel="noreferrer">
          <span>Fale com o escritório</span>
          <MessageCircle size={18} />
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
        >
          <Menu size={24} />
        </button>
      </div>
      {menuOpen && <button className="nav-scrim" type="button" aria-label="Fechar menu" onClick={closeMenu} />}
    </header>
  )
}
