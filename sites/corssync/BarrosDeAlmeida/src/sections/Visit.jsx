import { ArrowUpRight, AtSign, Clock3, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import { assets, contact } from '../data/siteData.js'

function Visit() {
  return (
    <section className="visit section" id="visite">
      <div className="container visit__card">
        <Reveal className="visit__brand-panel">
          <img src={assets.logoAModerna} alt="Logotipo da Padaria A Moderna com padeiro e cesta de pães" />
          <p>Tem sempre um sabor esperando por você.</p>
        </Reveal>

        <Reveal className="visit__content" delay={100}>
          <p className="eyebrow">Venha nos visitar</p>
          <h2>Seu próximo café começa aqui.</h2>
          <div className="visit__details">
            <a className="visit-detail" href={contact.mapsHref} target="_blank" rel="noreferrer">
              <MapPin aria-hidden="true" />
              <span>
                <small>Endereço</small>
                <strong>{contact.address}</strong>
                {contact.addressDetail}
              </span>
              <ArrowUpRight aria-hidden="true" />
            </a>
            <div className="visit-detail">
              <Clock3 aria-hidden="true" />
              <span>
                <small>Horário</small>
                <strong>Segunda a sexta</strong>
                Das 5h30 às 18h
              </span>
            </div>
          </div>
          <div className="visit__actions">
            <a className="button button--primary" href={contact.whatsappHref} target="_blank" rel="noreferrer">
              <MessageCircle size={20} aria-hidden="true" />
              Conversar no WhatsApp
            </a>
            <a className="button button--outline-dark" href={contact.phoneHref}>
              <Phone size={19} aria-hidden="true" />
              Ligar agora
            </a>
          </div>
          <div className="visit__socials" aria-label="Outros canais de contato">
            <a href={`mailto:${contact.email}`}>
              <Mail size={17} aria-hidden="true" />
              {contact.email}
            </a>
            <a href={contact.instagramHref} target="_blank" rel="noreferrer">
              <AtSign size={17} aria-hidden="true" />
              {contact.instagramLabel}
            </a>
            <span>Facebook: {contact.facebookLabel}</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Visit
