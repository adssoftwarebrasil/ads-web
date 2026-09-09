import { ArrowUpRight, AtSign, Clock3, Mail, MapPin, MessageCircle } from 'lucide-react'
import { contact, defaultWhatsAppLink, mapLink } from '../data/siteData'

export default function Contact() {
  return (
    <section id="atendimento" className="contact section section--navy">
      <div className="contact__orb" aria-hidden="true" />
      <div className="container contact__grid">
        <div className="contact__content" data-reveal>
          <span className="eyebrow eyebrow--light">Atendimento</span>
          <h2>Converse sobre o seu caso com o escritório.</h2>
          <p>
            Para iniciar o atendimento, envie uma mensagem pelo WhatsApp ou utilize um dos canais abaixo.
          </p>
          <a className="button button--gold" href={defaultWhatsAppLink} target="_blank" rel="noreferrer">
            <MessageCircle size={19} />
            Chamar no WhatsApp
          </a>
        </div>

        <div className="contact__details" data-reveal>
          <a className="contact-item" href={mapLink} target="_blank" rel="noreferrer">
            <span className="contact-item__icon">
              <MapPin size={21} />
            </span>
            <span>
              <small>Endereço</small>
              <strong>{contact.address}</strong>
            </span>
            <ArrowUpRight size={18} />
          </a>

          <a className="contact-item" href={defaultWhatsAppLink} target="_blank" rel="noreferrer">
            <span className="contact-item__icon">
              <MessageCircle size={21} />
            </span>
            <span>
              <small>Telefone e WhatsApp</small>
              <strong>{contact.phoneDisplay}</strong>
            </span>
            <ArrowUpRight size={18} />
          </a>

          <a className="contact-item" href={`mailto:${contact.email}`}>
            <span className="contact-item__icon">
              <Mail size={21} />
            </span>
            <span>
              <small>E-mail</small>
              <strong>{contact.email}</strong>
            </span>
            <ArrowUpRight size={18} />
          </a>

          <a
            className="contact-item"
            href={`https://instagram.com/${contact.instagram}`}
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-item__icon">
              <AtSign size={21} />
            </span>
            <span>
              <small>Instagram</small>
              <strong>@{contact.instagram}</strong>
            </span>
            <ArrowUpRight size={18} />
          </a>

          <div className="contact-item contact-item--static">
            <span className="contact-item__icon">
              <Clock3 size={21} />
            </span>
            <span>
              <small>Horário de funcionamento</small>
              <strong>{contact.hours}</strong>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
