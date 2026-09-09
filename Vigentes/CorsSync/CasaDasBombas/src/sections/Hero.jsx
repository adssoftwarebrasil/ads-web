import { ArrowRight, Clock3, MapPin, Wrench } from 'lucide-react'
import heroImage from '../assets/compressor-chiaperini.png'
import { site } from '../data/site'

const quickFacts = [
  { icon: MapPin, label: 'Atendimento em Manaus' },
  { icon: Clock3, label: 'Seg. a sex. · 8h às 17h' },
  { icon: Wrench, label: 'Equipamentos, peças e assistência' },
]

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-grid-pattern" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-content" data-reveal>
          <p className="eyebrow">
            <span aria-hidden="true" />
            Assistência técnica em Manaus
          </p>
          <h1>
            Pressão certa.
            <span>Equipamento em movimento.</span>
          </h1>
          <p className="hero-description">
            Bombas, compressores, motores, lava-jatos e peças, com suporte técnico para instalação,
            manutenção e reparo.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href={site.whatsappUrl} target="_blank" rel="noreferrer">
              Falar com um técnico
              <ArrowRight size={19} aria-hidden="true" />
            </a>
            <a className="button button-secondary" href="#solucoes">
              Ver equipamentos e serviços
            </a>
          </div>

          <ul className="hero-facts" aria-label="Informações rápidas">
            {quickFacts.map(({ icon: Icon, label }) => (
              <li key={label}>
                <Icon size={18} aria-hidden="true" />
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-visual" data-reveal>
          <div className="hero-visual-frame">
            <div className="hero-visual-label">
              <span>Equipamentos</span>
              <span>Peças</span>
              <span>Assistência</span>
            </div>
            <img
              src={heroImage}
              alt="Compressor de ar profissional em material da Casa das Bombas e Compressores"
              width="1254"
              height="1254"
              fetchPriority="high"
            />
            <div className="hero-corner-mark" aria-hidden="true">Manaus · AM</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
