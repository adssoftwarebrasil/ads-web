import { ArrowRight, Clock3, MapPin, ShieldCheck } from 'lucide-react'
import facade from '../assets/fachada-banner.jpg'

const whatsappUrl =
  'https://wa.me/5563999466901?text=Ol%C3%A1%2C%20preciso%20de%20atendimento%20veterin%C3%A1rio.'

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-orb hero-orb--one" aria-hidden="true" />
      <div className="hero-orb hero-orb--two" aria-hidden="true" />

      <div className="container hero-grid">
        <div className="hero-content" data-reveal>
          <div className="hero-kicker">
            <Clock3 aria-hidden="true" />
            Hospital veterinário aberto 24 horas
          </div>
          <h1>
            Cuidado veterinário que <em>não olha o relógio.</em>
          </h1>
          <p className="hero-lead">
            Em Paraíso do Tocantins, seu pet encontra equipe presente, estrutura completa e cuidado
            clínico e cirúrgico a qualquer hora.
          </p>
          <div className="hero-actions">
            <a className="button button--accent" href={whatsappUrl} target="_blank" rel="noreferrer">
              Preciso de atendimento
              <ArrowRight aria-hidden="true" />
            </a>
            <a
              className="button button--ghost-light"
              href="https://www.google.com/maps/search/?api=1&query=Avenida+Bernardo+Sayao+416+Centro+Paraiso+do+Tocantins+TO"
              target="_blank"
              rel="noreferrer"
            >
              <MapPin aria-hidden="true" />
              Como chegar
            </a>
          </div>
          <div className="hero-trust">
            <ShieldCheck aria-hidden="true" />
            <span>
              <strong>Plantão presencial permanente.</strong> Sempre há profissionais no RoVet Hospital
              Veterinário.
            </span>
          </div>
        </div>

        <div className="hero-visual" data-reveal>
          <div className="hero-image-wrap">
            <img
              src={facade}
              alt="Fachada do Hospital Veterinário Rovet em Paraíso do Tocantins"
              fetchpriority="high"
            />
          </div>
          <div className="hero-status">
            <span className="status-dot" aria-hidden="true" />
            <div>
              <strong>Estamos abertos</strong>
              <small>24h · todos os dias</small>
            </div>
          </div>
          <div className="hero-location-card">
            <MapPin aria-hidden="true" />
            <span>Centro de Paraíso do Tocantins</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
