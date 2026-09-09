import { ExternalLink, MapPin, MessageCircle } from 'lucide-react'
import { contact, navItems } from '../data'
import { Brand } from './Brand'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Brand inverted />
          <p>Soluções em telas, alambrados, arames e cercamentos para Maringá e região.</p>
          <small>Desde 2002.</small>
        </div>

        <div>
          <h2>Navegue</h2>
          <ul>
            {navItems.map((item) => (
              <li key={item.href}><a href={item.href}>{item.label}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer__contact">
          <h2>Fale conosco</h2>
          <a href={contact.whatsappUrl} target="_blank" rel="noreferrer">
            <MessageCircle size={18} aria-hidden="true" /> {contact.whatsappLabel}
          </a>
          <a href={contact.mapsUrl} target="_blank" rel="noreferrer">
            <MapPin size={18} aria-hidden="true" />
            <span>{contact.address}<br />{contact.postalCode}</span>
            <ExternalLink size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} Telas e Arames Confiança.</span>
        <span>Telas e Arames Confiança Ltda - EPP · CNPJ 04.927.011/0001-72</span>
      </div>
    </footer>
  )
}

