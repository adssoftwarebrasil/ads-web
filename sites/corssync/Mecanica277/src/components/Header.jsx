import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Brand from './Brand'
import { contact } from '../data/siteData'

const links = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#modulos', label: 'Módulos' },
  { href: '#frotas', label: 'Frotas' },
  { href: '#estrutura', label: 'Estrutura' },
  { href: '#contato', label: 'Contato' },
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
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.classList.remove('menu-open')
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__inner">
        <Brand />
        <nav id="menu-principal" className={`nav ${open ? 'nav--open' : ''}`} aria-label="Navegação principal">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>
          ))}
          <a className="button button--yellow nav__cta" href={contact.whatsapp} target="_blank" rel="noreferrer">
            Agendar avaliação
          </a>
        </nav>
        <button
          className="menu-button"
          type="button"
          aria-expanded={open}
          aria-controls="menu-principal"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  )
}

export default Header
