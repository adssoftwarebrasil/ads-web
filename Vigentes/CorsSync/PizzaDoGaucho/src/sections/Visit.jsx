import { ArrowUpRight, Clock3, Instagram, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import deliveryPoster from '../assets/poster-entrega.jpeg'
import { contact, links } from '../data/site'

function Visit() {
  return (
    <section className="visit section-pad" id="visite">
      <div className="container visit-shell">
        <div className="visit-poster" data-reveal>
          <img src={deliveryPoster} alt="Cartaz de entrega da Pizza do Gaúcho" loading="lazy" />
          <span>Entrega em Trindade</span>
        </div>

        <div className="visit-content" data-reveal>
          <p className="eyebrow">Peça ou venha visitar</p>
          <h2>Sua próxima noite de pizza começa aqui.</h2>
          <p className="visit-intro">
            Fale com a equipe, faça seu pedido ou venha aproveitar a Pizza do Gaúcho em Trindade.
          </p>

          <div className="contact-grid">
            <a href={links.maps} target="_blank" rel="noreferrer" className="contact-item contact-address">
              <MapPin aria-hidden="true" />
              <span>
                <small>Endereço</small>
                <strong>{contact.address}</strong>
              </span>
              <ArrowUpRight aria-hidden="true" />
            </a>
            <div className="contact-item">
              <Clock3 aria-hidden="true" />
              <span>
                <small>Funcionamento</small>
                <strong>{contact.hours}</strong>
              </span>
            </div>
            <a href={links.phone} className="contact-item">
              <Phone aria-hidden="true" />
              <span>
                <small>Telefone</small>
                <strong>{contact.phone}</strong>
              </span>
            </a>
            <a href={links.email} className="contact-item">
              <Mail aria-hidden="true" />
              <span>
                <small>E-mail</small>
                <strong>{contact.email}</strong>
              </span>
            </a>
          </div>

          <div className="visit-actions">
            <a className="button button-sun" href={links.whatsapp} target="_blank" rel="noreferrer">
              <MessageCircle size={19} aria-hidden="true" />
              Fazer pedido
            </a>
            <a className="social-link" href={links.instagram} target="_blank" rel="noreferrer">
              <Instagram size={20} aria-hidden="true" />
              {contact.instagram}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Visit

