import { ArrowUpRight, Clock3, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { contact, serviceAreas, visitImage, whatsappLink } from '../data/catalog.js'

function Visit() {
  return (
    <section className="visit section-space" id="visite" aria-labelledby="visit-title">
      <div className="shell visit-grid">
        <div className="visit-copy">
          <p className="eyebrow"><span /> Pertinho de você</p>
          <h2 id="visit-title">Passe na AgroHorse e encontre seu próximo favorito.</h2>
          <p>
            Venha conhecer a variedade da loja ou chame a gente pelo WhatsApp para consultar modelos e disponibilidade.
          </p>

          <div className="contact-cards">
            <a href={contact.maps} target="_blank" rel="noreferrer">
              <MapPin aria-hidden="true" />
              <span><small>Endereço</small><strong>{contact.address}</strong><em>Como chegar <ArrowUpRight size={15} /></em></span>
            </a>
            <div>
              <Clock3 aria-hidden="true" />
              <span><small>Horário</small><strong>Seg. a sex. — 08:30 às 18:30<br />Sábado — 09:00 às 15:00</strong></span>
            </div>
          </div>

          <div className="visit-actions">
            <a className="button button-rust" href={whatsappLink('Olá! Gostaria de consultar os produtos disponíveis na loja.')} target="_blank" rel="noreferrer">
              <MessageCircle size={18} aria-hidden="true" /> Chamar no WhatsApp
            </a>
            <a className="visit-phone" href={`tel:+${contact.whatsapp}`}><Phone size={18} aria-hidden="true" /> {contact.phoneDisplay}</a>
          </div>
          <a className="email-link" href={`mailto:${contact.emailPrimary}`}><Mail size={17} aria-hidden="true" /> {contact.emailPrimary}</a>
        </div>

        <div className="visit-visual">
          <img src={visitImage} alt="Expositor de bonés na AgroHorse Western" loading="lazy" />
          <div className="area-panel">
            <p>Atendimento para</p>
            <div className="area-chips">
              {serviceAreas.map((city) => <span key={city}>{city}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Visit
