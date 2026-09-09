import { ArrowDownRight, Clock3, MapPin, MessageCircle } from 'lucide-react'
import logo from '../assets/logo-rei-das-pickups.png'
import motorHero from '../assets/motor-hilux-3-0.jpeg'
import { whatsappUrl } from '../data/siteData.js'

const highlights = ['Motores novos e usados', 'Transmissões automáticas', 'Mecânica em pick-ups']

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__noise" aria-hidden="true" />
      <div className="container hero__grid">
        <div className="hero__content" data-reveal>
          <div className="hero__eyebrow">
            <span className="eyebrow-line" />
            Auto peças &amp; oficina mecânica
          </div>
          <h1>
            Sua pickup pronta para <span>ir mais longe.</span>
          </h1>
          <p className="hero__lead">
            Soluções em motores, transmissões e mecânica com atendimento personalizado, agilidade e compromisso com a qualidade.
          </p>

          <div className="hero__actions">
            <a className="button button--primary" href={whatsappUrl} target="_blank" rel="noreferrer">
              <MessageCircle size={20} aria-hidden="true" />
              Falar com um especialista
            </a>
            <a className="button button--text" href="#servicos">
              Conhecer serviços
              <ArrowDownRight size={19} aria-hidden="true" />
            </a>
          </div>

          <ul className="hero__highlights" aria-label="Principais especialidades">
            {highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </div>

        <div className="hero__visual" data-reveal>
          <div className="hero__logo-card">
            <img src={logo} alt="Rei das Pickups Auto Center" />
          </div>
          <div className="hero__image-wrap">
            <img
              src={motorHero}
              alt="Material da Rei das Pickups apresentando motor Hilux 3.0 diesel"
            />
          </div>
          <div className="hero__location-card">
            <MapPin aria-hidden="true" />
            <span><small>Área de atendimento</small>Goiás</span>
          </div>
          <div className="hero__hours-card">
            <Clock3 aria-hidden="true" />
            <span><small>Horário de atendimento</small>08h às 18h</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
