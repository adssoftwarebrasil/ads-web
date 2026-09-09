import { ArrowUpRight, Clock3, MapPin, MessageCircle } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import { images, site } from '../data/siteData.js'

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-pattern" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <Reveal>
            <p className="eyebrow eyebrow--red">Almoço em Caldas Novas</p>
            <h1>
              Comida caseira,
              <em> fresquinha de verdade.</em>
            </h1>
            <p className="hero-lead">
              Há 13 anos servindo sabor e qualidade para transformar a pausa do seu dia em um almoço gostoso e bem cuidado.
            </p>

            <div className="hero-actions">
              <a className="button button--primary" href={site.whatsapp} target="_blank" rel="noreferrer">
                <MessageCircle size={20} aria-hidden="true" />
                Chamar no WhatsApp
              </a>
              <a className="text-link" href={site.mapsLink} target="_blank" rel="noreferrer">
                Como chegar
                <ArrowUpRight size={19} aria-hidden="true" />
              </a>
            </div>

            <div className="hero-facts" aria-label="Informações rápidas">
              <span>
                <Clock3 size={19} aria-hidden="true" />
                <strong>{site.hours}</strong>
                Horário de atendimento
              </span>
              <span>
                <MapPin size={19} aria-hidden="true" />
                <strong>{site.city}</strong>
                Itanhangá I
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal className="hero-visual-wrap" delay={120}>
          <div className="hero-visual">
            <img
              className="hero-image"
              src={images.heroFood}
              alt="Buffet variado de comida caseira no Restaurante Rodoviária"
              fetchPriority="high"
            />
            <div className="hero-mini-image">
              <img src={images.heroSalad} alt="Seleção de saladas frescas do restaurante" />
            </div>
            <div className="hero-stamp" aria-label="13 anos de experiência">
              <strong>13</strong>
              <span>anos</span>
            </div>
            <p className="hero-image-note">Feito com cuidado. Servido fresquinho.</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Hero
