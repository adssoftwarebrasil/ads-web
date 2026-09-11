import { useEffect, useState } from 'react'
import { Menu, MessageCircle, X } from 'lucide-react'
import Brand from './Brand.jsx'

const navigation = [
  { label: 'Tratamentos', href: '#tratamentos' },
  { label: 'Nosso cuidado', href: '#como-funciona' },
  { label: 'Nossa história', href: '#historia' },
  { label: 'Contato', href: '#contato' },
]

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('menu-open', isOpen)

    const handleEscape = (event) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    window.addEventListener('keydown', handleEscape)
    return () => {
      document.body.classList.remove('menu-open')
      window.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen])

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Brand />

        <nav className={`main-nav ${isOpen ? 'is-open' : ''}`} aria-label="Navegação principal">
          <div className="nav-panel">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            ))}
            <a className="button button--primary nav-cta" href="#contato" onClick={closeMenu}>
              <MessageCircle size={18} aria-hidden="true" />
              Agendar sessão
            </a>
          </div>
        </nav>

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
  )
}

export default Header

