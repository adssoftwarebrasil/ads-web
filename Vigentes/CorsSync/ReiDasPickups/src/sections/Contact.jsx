import { ArrowUpRight, Clock3, Instagram, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { instagramUrl, mapUrl, whatsappUrl } from '../data/siteData.js'

function Contact() {
  return (
    <section className="contact" id="contato">
      <div className="container contact__grid">
        <div className="contact__intro" data-reveal>
          <span className="section-kicker">Fale com a equipe</span>
          <h2>Seu veículo merece uma solução <span>à altura.</span></h2>
          <p>
            Explique o que seu veículo precisa e converse diretamente com a Rei das Pickups.
          </p>
          <a className="button button--dark" href={whatsappUrl} target="_blank" rel="noreferrer">
            <MessageCircle aria-hidden="true" />
            Chamar no WhatsApp
          </a>
        </div>

        <div className="contact__details" data-reveal>
          <a className="contact-card contact-card--wide" href={mapUrl} target="_blank" rel="noreferrer">
            <MapPin aria-hidden="true" />
            <span>
              <small>Endereço</small>
              <strong>Av. Onias José Borges, Q. 32, L. 4, N. 180 — Bairro Brasil</strong>
            </span>
            <ArrowUpRight aria-hidden="true" />
          </a>

          <div className="contact__details-grid">
            <a className="contact-card" href="tel:+5564999528270">
              <Phone aria-hidden="true" />
              <span><small>Telefone / WhatsApp</small><strong>(64) 99952-8270</strong></span>
            </a>
            <div className="contact-card">
              <Clock3 aria-hidden="true" />
              <span><small>Funcionamento</small><strong>08h às 18h</strong></span>
            </div>
            <a className="contact-card" href="mailto:reisdaspickups@gmail.com">
              <Mail aria-hidden="true" />
              <span><small>E-mail</small><strong>reisdaspickups@gmail.com</strong></span>
            </a>
            <a className="contact-card" href={instagramUrl} target="_blank" rel="noreferrer">
              <Instagram aria-hidden="true" />
              <span><small>Instagram</small><strong>@reidaspickupsautocenter</strong></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
