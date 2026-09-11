import { Mail, MapPin, Phone } from 'lucide-react'
import Brand from './Brand.jsx'
import { contact } from '../data/siteData.js'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <a href="#inicio" aria-label="Voltar ao início">
            <Brand light />
          </a>
          <p>Qualidade, conforto e estilo para viver um novo amanhecer.</p>
        </div>

        <div>
          <h2>Fale com a gente</h2>
          <a href={'tel:' + contact.phone}>
            <Phone size={17} aria-hidden="true" />
            {contact.phoneDisplay}
          </a>
          <a href={'mailto:' + contact.email}>
            <Mail size={17} aria-hidden="true" />
            {contact.email}
          </a>
        </div>

        <div>
          <h2>Onde estamos</h2>
          <a href={contact.maps} target="_blank" rel="noreferrer">
            <MapPin size={17} aria-hidden="true" />
            <span>{contact.address}</span>
          </a>
        </div>

        <div>
          <h2>Acompanhe</h2>
          <div className="footer__socials">
            <a href={contact.instagram} target="_blank" rel="noreferrer" aria-label="Instagram da Óptica Renascer">
              <span aria-hidden="true">IG</span>
            </a>
            <a href={contact.facebook} target="_blank" rel="noreferrer" aria-label="Facebook da Óptica Renascer">
              <span aria-hidden="true">f</span>
            </a>
          </div>
        </div>
      </div>
      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} Óptica Renascer.</span>
        <span>Trindade · Goiás</span>
      </div>
    </footer>
  )
}

export default Footer
