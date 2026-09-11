import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react'
import logo from '../assets/images/twa-logo.png'
import partnerBadge from '../assets/images/intelbras-parceiro-preto.png'
import { CONTACT } from '../data/siteData'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a href="#inicio" aria-label="TWA Tecnologia — voltar ao início">
            <img className="footer-logo" src={logo} alt="TWA Tecnologia" />
          </a>
          <p>
            Sistemas eletrônicos, automação e informática com projeto, instalação e suporte
            especializado.
          </p>
          <img
            className="footer-partner"
            src={partnerBadge}
            alt="Parceiro credenciado Intelbras"
            loading="lazy"
          />
        </div>

        <div className="footer-column">
          <h2>Navegue</h2>
          <a href="#servicos">Serviços</a>
          <a href="#produtos">Produtos</a>
          <a href="#diferenciais">Diferenciais</a>
          <a href="#quem-somos">Quem somos</a>
        </div>

        <div className="footer-column footer-contact">
          <h2>Contato</h2>
          <a href={CONTACT.phoneHref}>
            <Phone size={17} aria-hidden="true" /> {CONTACT.phoneDisplay}
          </a>
          <a href={`mailto:${CONTACT.email}`}>
            <Mail size={17} aria-hidden="true" /> {CONTACT.email}
          </a>
          <a href={CONTACT.mapsUrl} target="_blank" rel="noreferrer">
            <MapPin size={17} aria-hidden="true" /> {CONTACT.address}
          </a>
          <div className="footer-socials" aria-label="Redes sociais">
            <a href={CONTACT.instagram} target="_blank" rel="noreferrer" aria-label="Instagram da TWA">
              <Instagram aria-hidden="true" />
            </a>
            <a href={CONTACT.facebook} target="_blank" rel="noreferrer" aria-label="Facebook da TWA">
              <Facebook aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} TWA Tecnologia. Todos os direitos reservados.</p>
        <p>Balneário Camboriú e região.</p>
      </div>
    </footer>
  )
}

export default Footer
