import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import logo from '../assets/logo-conexao-acessivel.jpg'
import { whatsappUrl } from '../data/siteData'

const navigation = [
  { href: '#solucoes', label: 'Soluções' },
  { href: '#metodo', label: 'Como atuamos' },
  { href: '#experiencia', label: 'Experiência' },
  { href: '#clientes', label: 'Clientes' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#contato', label: 'Contato' },
]

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('menu-open', isOpen)
    return () => document.body.classList.remove('menu-open')
  }, [isOpen])

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a className="brand" href="#inicio" aria-label="Conexão Acessível — início" onClick={closeMenu}>
          <img src={logo} alt="Conexão Acessível" />
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isOpen}
          aria-controls="menu-principal"
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>

        <nav id="menu-principal" className={`main-nav ${isOpen ? 'is-open' : ''}`} aria-label="Navegação principal">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <a className="button button--header" href={whatsappUrl} target="_blank" rel="noreferrer" onClick={closeMenu}>
            Falar com especialista
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
