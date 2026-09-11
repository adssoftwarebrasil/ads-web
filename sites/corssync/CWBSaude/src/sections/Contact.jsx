import { ArrowUpRight, Camera, Clock3, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import {
  contact,
  secondaryWhatsappUrl,
  whatsappUrl,
} from '../data/siteData.js'

const instagramUrl = `https://www.instagram.com/${contact.instagram}/`
const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.address)}`

function Contact() {
  return (
    <section className="contact" id="contato">
      <div className="container">
        <div className="contact__panel">
          <div className="contact__copy" data-reveal>
            <span className="eyebrow eyebrow--light">Sua cotação começa aqui</span>
            <h2>Vamos encontrar o plano que combina com você?</h2>
            <p>Fale com uma equipe especializada e solicite sua cotação sem compromisso.</p>
            <a className="button button--coral button--large" href={whatsappUrl} target="_blank" rel="noreferrer">
              <MessageCircle aria-hidden="true" />
              Conversar pelo WhatsApp
              <ArrowUpRight aria-hidden="true" />
            </a>
          </div>

          <div className="contact__details" data-reveal>
            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              <span><Phone aria-hidden="true" /></span>
              <div><small>WhatsApp principal</small><strong>{contact.whatsappDisplay}</strong></div>
            </a>
            <a href={secondaryWhatsappUrl} target="_blank" rel="noreferrer">
              <span><MessageCircle aria-hidden="true" /></span>
              <div><small>Outro contato</small><strong>{contact.secondaryWhatsappDisplay}</strong></div>
            </a>
            <a href={`mailto:${contact.email}`}>
              <span><Mail aria-hidden="true" /></span>
              <div><small>E-mail</small><strong>{contact.email}</strong></div>
            </a>
            <a href={instagramUrl} target="_blank" rel="noreferrer">
              <span><Camera aria-hidden="true" /></span>
              <div><small>Instagram</small><strong>@{contact.instagram}</strong></div>
            </a>
            <a href={mapsUrl} target="_blank" rel="noreferrer">
              <span><MapPin aria-hidden="true" /></span>
              <div><small>Endereço</small><strong>{contact.address}</strong></div>
            </a>
            <div className="contact__hours">
              <span><Clock3 aria-hidden="true" /></span>
              <div><small>Horário de atendimento</small><strong>{contact.hours}</strong></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
