import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react'
import logo from '../assets/logo-agrohorse.jpg'
import { contact } from '../data/catalog.js'

function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <img src={logo} alt="" />
          <div>
            <strong>AgroHorse Western</strong>
            <p>Moda country feita por quem vive essa tradição.</p>
          </div>
        </div>

        <div className="footer-links">
          <h2>Encontre a gente</h2>
          <a href={`tel:+${contact.whatsapp}`}><Phone size={17} aria-hidden="true" /> {contact.phoneDisplay}</a>
          <a href={`mailto:${contact.emailPrimary}`}><Mail size={17} aria-hidden="true" /> {contact.emailPrimary}</a>
          <a href={contact.maps} target="_blank" rel="noreferrer"><MapPin size={17} aria-hidden="true" /> Jardim Anhanguera, Caldas Novas</a>
        </div>

        <div className="footer-links">
          <h2>Acompanhe</h2>
          <a href={contact.instagram} target="_blank" rel="noreferrer"><Instagram size={17} aria-hidden="true" /> @agrohorsewestern</a>
          <a href={contact.facebook} target="_blank" rel="noreferrer"><Facebook size={17} aria-hidden="true" /> AgroHorse Western</a>
        </div>
      </div>
      <div className="shell footer-bottom">
        <p>© {new Date().getFullYear()} AgroHorse Western. Todos os direitos reservados.</p>
        <a href="#inicio">Voltar ao topo ↑</a>
      </div>
    </footer>
  )
}

export default Footer
