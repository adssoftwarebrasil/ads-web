import { AtSign, Mail, MapPin, MessageCircle } from 'lucide-react'
import Brand from './Brand'
import { contact, defaultWhatsAppLink, mapLink, navigation } from '../data/siteData'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Brand light />
          <p>Atuação jurídica técnica e personalizada desde 2006.</p>
          <div className="footer__socials">
            <a
              href={`https://instagram.com/${contact.instagram}`}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram do escritório"
            >
              <AtSign size={19} />
            </a>
            <a href={`mailto:${contact.email}`} aria-label="Enviar e-mail">
              <Mail size={19} />
            </a>
            <a href={defaultWhatsAppLink} target="_blank" rel="noreferrer" aria-label="Abrir WhatsApp">
              <MessageCircle size={19} />
            </a>
          </div>
        </div>

        <div className="footer__column">
          <h2>Navegação</h2>
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>

        <div className="footer__column footer__contact">
          <h2>Contato</h2>
          <a href={mapLink} target="_blank" rel="noreferrer">
            <MapPin size={17} />
            <span>{contact.address}</span>
          </a>
          <a href={`mailto:${contact.email}`}>
            <Mail size={17} />
            <span>{contact.email}</span>
          </a>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>© {new Date().getFullYear()} Leandro Vicente Advocacia e Consultoria Jurídica.</p>
        <p>Conteúdo informativo. Cada situação requer análise individual.</p>
      </div>
    </footer>
  )
}
