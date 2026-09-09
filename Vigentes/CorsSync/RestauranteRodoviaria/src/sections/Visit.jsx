import { ArrowUpRight, Clock3, Instagram, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import { images, site } from '../data/siteData.js'

function Visit() {
  return (
    <section className="visit-section" id="visite">
      <div className="container visit-shell">
        <Reveal className="visit-photo">
          <img src={images.facade} alt="Fachada do Restaurante Rodoviária em Caldas Novas" loading="lazy" />
          <span className="visit-photo__tag">
            <MapPin size={18} aria-hidden="true" />
            Caldas Novas
          </span>
        </Reveal>

        <div className="visit-content">
          <Reveal>
            <p className="eyebrow">Venha almoçar</p>
            <h2>Sua mesa está esperando.</h2>
            <p className="visit-lead">Passe pelo Restaurante Rodoviária e aproveite uma comida caseira, fresquinha e cheia de sabor.</p>
          </Reveal>

          <div className="visit-details">
            <Reveal className="visit-detail" delay={50}>
              <Clock3 aria-hidden="true" />
              <div>
                <span>Horário</span>
                <strong>{site.hours}</strong>
              </div>
            </Reveal>
            <Reveal className="visit-detail" delay={90}>
              <MapPin aria-hidden="true" />
              <div>
                <span>Endereço</span>
                <strong>{site.address}</strong>
              </div>
            </Reveal>
          </div>

          <Reveal className="visit-actions" delay={130}>
            <a className="button button--light" href={site.mapsLink} target="_blank" rel="noreferrer">
              Abrir no mapa
              <ArrowUpRight size={19} aria-hidden="true" />
            </a>
            <a className="button button--outline-light" href={site.whatsapp} target="_blank" rel="noreferrer">
              <MessageCircle size={19} aria-hidden="true" />
              WhatsApp
            </a>
          </Reveal>

          <Reveal className="visit-contact-list" delay={160}>
            <a href={site.phoneLink}>
              <Phone size={17} aria-hidden="true" />
              {site.phoneDisplay}
            </a>
            <a href={`mailto:${site.email}`}>
              <Mail size={17} aria-hidden="true" />
              {site.email}
            </a>
            <a href={site.instagramLink} target="_blank" rel="noreferrer">
              <Instagram size={17} aria-hidden="true" />
              {site.instagram}
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default Visit
