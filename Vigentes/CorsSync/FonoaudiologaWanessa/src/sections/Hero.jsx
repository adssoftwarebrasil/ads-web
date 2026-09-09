import { ArrowRight, CheckCircle2, Clock3, MapPin, Sparkles } from 'lucide-react'
import heroImage from '../assets/images/atendimento-ludico.jpg'
import { mapsUrl, whatsappUrl } from '../data/contact.js'

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-bubble hero-bubble--one" aria-hidden="true" />
      <div className="hero-bubble hero-bubble--two" aria-hidden="true" />

      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow hero-eyebrow">
            <Sparkles aria-hidden="true" />
            Fonoaudiologia em Goiânia
          </span>
          <h1>
            Comunicação se desenvolve com <em>cuidado</em>, técnica e afeto.
          </h1>
          <p className="hero-lead">
            Existem várias causas que podem afetar a fala, linguagem e aprendizagem, inclusive
            alterações neurológicas importantes, não espere, busque um fonoaudiólogo especialista
            em fala e linguagem e faça uma avaliação completa. Aqui você encontra atendimento
            especializado! Agende agora.
          </p>

          <div className="hero-actions">
            <a className="button" href={whatsappUrl} target="_blank" rel="noreferrer">
              Falar com a Wanessa
              <ArrowRight aria-hidden="true" />
            </a>
            <a className="button button--ghost" href="#atendimentos">
              Conhecer atendimentos
            </a>
          </div>

          <div className="hero-details" aria-label="Informações rápidas">
            <span>
              <CheckCircle2 aria-hidden="true" />
              Especialista em fala e linguagem
            </span>
            <a href={mapsUrl} target="_blank" rel="noreferrer">
              <MapPin aria-hidden="true" />
              Santa Rita, Goiânia
            </a>
            <span>
              <Clock3 aria-hidden="true" />
              7h às 18h
            </span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-wrap">
            <img
              src={heroImage}
              alt="Wanessa em uma sessão de fonoterapia infantil com recursos lúdicos"
            />
          </div>
          <div className="hero-card hero-card--top">
            <strong>CRFa 5-12824</strong>
            <span>Atendimento profissional</span>
          </div>
          <div className="hero-card hero-card--bottom">
            <span className="hero-card-icon" aria-hidden="true">
              ♥
            </span>
            <div>
              <strong>Acolher para evoluir</strong>
              <span>Cada conquista importa</span>
            </div>
          </div>
          <span className="butterfly butterfly--one" aria-hidden="true">
            ✦
          </span>
          <span className="butterfly butterfly--two" aria-hidden="true">
            ✦
          </span>
        </div>
      </div>
    </section>
  )
}

export default Hero
