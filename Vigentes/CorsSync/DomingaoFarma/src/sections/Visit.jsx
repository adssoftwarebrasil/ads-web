import { AtSign, Clock3, Mail, MapPin, MessageCircle, Navigation, Phone } from 'lucide-react'
import { contact, openingHours } from '../data/siteData'
import { SectionHeading } from '../components/SectionHeading'

export function Visit() {
  return (
    <section className="visit section" id="contato">
      <div className="container">
        <SectionHeading
          eyebrow="Estamos por perto"
          title="Passe na Domingão ou fale com a gente."
          description="Escolha o canal mais fácil para consultar produtos, fazer seu pedido ou chegar até a farmácia."
        />

        <div className="visit-grid">
          <article className="visit-card visit-card--address" data-reveal>
            <span className="visit-card__icon"><MapPin size={24} aria-hidden="true" /></span>
            <span className="eyebrow">Nossa loja</span>
            <h3>Bairro Brasil</h3>
            <p>{contact.address}</p>
            <a href={contact.mapsUrl} target="_blank" rel="noreferrer">
              Abrir no mapa <Navigation size={17} aria-hidden="true" />
            </a>
          </article>

          <article className="visit-card visit-card--hours" data-reveal>
            <span className="visit-card__icon"><Clock3 size={24} aria-hidden="true" /></span>
            <span className="eyebrow">Horários</span>
            <h3>Aberta todos os dias</h3>
            <dl>
              {openingHours.map((item) => (
                <div key={item.days}>
                  <dt>{item.days}</dt>
                  <dd>{item.hours}</dd>
                </div>
              ))}
            </dl>
          </article>

          <article className="visit-card visit-card--contact" data-reveal>
            <span className="visit-card__icon"><MessageCircle size={24} aria-hidden="true" /></span>
            <span className="eyebrow">Contato direto</span>
            <h3>Como podemos ajudar?</h3>
            <div className="contact-links">
              <a href={contact.whatsappUrl} target="_blank" rel="noreferrer">
                <Phone size={18} aria-hidden="true" /> {contact.whatsappDisplay}
              </a>
              <a href={'mailto:' + contact.email}>
                <Mail size={18} aria-hidden="true" /> {contact.email}
              </a>
              <a href={contact.instagramUrl} target="_blank" rel="noreferrer">
                <AtSign size={18} aria-hidden="true" /> {contact.instagramLabel}
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
