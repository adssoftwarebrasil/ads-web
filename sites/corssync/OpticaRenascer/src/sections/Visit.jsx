import { ArrowUpRight, Clock3, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import storeFacade from '../assets/products/store-facade-new.jpg'
import { contact, links } from '../data/siteData.js'

function Visit() {
  return (
    <section className="visit section" id="visite">
      <div className="container visit__card">
        <div className="visit__image" data-reveal>
          <img src={storeFacade} alt="Fachada da Óptica Renascer em Trindade, Goiás" loading="lazy" />
          <span>Trindade · Goiás</span>
        </div>

        <div className="visit__content" data-reveal>
          <p className="eyebrow">Venha nos conhecer</p>
          <h2>Seu novo olhar está mais perto do que você imagina.</h2>

          <div className="visit__details">
            <div>
              <MapPin aria-hidden="true" />
              <span>
                <strong>Endereço</strong>
                {contact.address}
              </span>
            </div>
            <div>
              <Clock3 aria-hidden="true" />
              <span>
                <strong>Horários</strong>
                Segunda a sexta, das 8h às 18h<br />
                Sábado, das 8h às 12h
              </span>
            </div>
            <a href={'tel:' + contact.phone}>
              <Phone aria-hidden="true" />
              <span>
                <strong>Telefone e WhatsApp</strong>
                {contact.phoneDisplay}
              </span>
            </a>
            <a href={'mailto:' + contact.email}>
              <Mail aria-hidden="true" />
              <span>
                <strong>E-mail</strong>
                {contact.email}
              </span>
            </a>
          </div>

          <div className="visit__actions">
            <a className="button button--sun" href={contact.maps} target="_blank" rel="noreferrer">
              Traçar rota
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <a className="button button--ghost-light" href={links.whatsapp} target="_blank" rel="noreferrer">
              <MessageCircle size={18} aria-hidden="true" />
              Chamar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Visit
