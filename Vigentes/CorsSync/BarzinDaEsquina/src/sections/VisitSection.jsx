import { Clock3, Instagram, Mail, MapPin, MessageCircle } from 'lucide-react'
import { contact } from '../data/siteData.js'

function VisitSection() {
  return (
    <section className="visit section" id="visite">
      <div className="visit__pattern" aria-hidden="true" />
      <div className="container visit__grid">
        <div className="visit__intro" data-reveal>
          <p className="eyebrow eyebrow--light"><span /> Seu lugar tá guardado</p>
          <h2>Chega mais.<br /><em>A esquina é nossa.</em></h2>
          <p>Para almoçar, tomar uma depois do trabalho ou reunir a turma. A gente te espera em Trindade.</p>
          <a className="button button--cream" href={contact.mapsUrl} target="_blank" rel="noreferrer">
            <MapPin size={19} aria-hidden="true" /> Abrir no mapa
          </a>
        </div>

        <div className="visit__details" data-reveal>
          <article>
            <MapPin aria-hidden="true" />
            <div><span>Endereço</span><p>{contact.address}</p></div>
          </article>
          <article>
            <Clock3 aria-hidden="true" />
            <div><span>Horário</span><p>{contact.hours}</p></div>
          </article>
          <article>
            <MessageCircle aria-hidden="true" />
            <div><span>WhatsApp</span><a href={contact.whatsappUrl} target="_blank" rel="noreferrer">{contact.whatsappLabel}</a></div>
          </article>
          <article>
            <Instagram aria-hidden="true" />
            <div><span>Instagram</span><a href={contact.instagramUrl} target="_blank" rel="noreferrer">{contact.instagramLabel}</a></div>
          </article>
          <article className="visit__email">
            <Mail aria-hidden="true" />
            <div><span>E-mail</span><a href={`mailto:${contact.email}`}>{contact.email}</a></div>
          </article>
        </div>
      </div>
      <div className="visit__marquee" aria-hidden="true">VAI VER SE EU TÔ NA ESQUINA · VAI VER SE EU TÔ NA ESQUINA ·</div>
    </section>
  )
}

export default VisitSection
