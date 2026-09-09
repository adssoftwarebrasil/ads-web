import { Instagram, MessageCircle } from 'lucide-react'
import logo from '../assets/logo-pizza-do-gaucho.jpg'
import { contact, links, navItems } from '../data/site'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a href="#inicio" aria-label="Pizza do Gaúcho — início">
            <img src={logo} alt="Pizza do Gaúcho" />
          </a>
          <p>Pizzas e bordas recheadas em Trindade-GO.</p>
        </div>

        <div className="footer-nav">
          <strong>Explore</strong>
          {navItems.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </div>

        <div className="footer-contact">
          <strong>Fale com a gente</strong>
          <a href={links.whatsapp} target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" /> {contact.phone}</a>
          <a href={links.instagram} target="_blank" rel="noreferrer"><Instagram aria-hidden="true" /> {contact.instagram}</a>
          <span>Facebook: {contact.facebook}</span>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Pizza do Gaúcho</span>
        <span>Trindade, Goiás</span>
      </div>
    </footer>
  )
}

export default Footer
