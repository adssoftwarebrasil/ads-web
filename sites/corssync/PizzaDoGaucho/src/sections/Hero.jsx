import { ArrowUpRight, Clock3, MapPin } from 'lucide-react'
import heroPizza from '../assets/pizza-queijo.jpeg'
import { links } from '../data/site'

const marqueeItems = [
  'Bordas recheadas',
  'Desde 2021',
  'Brinquedoteca',
  'Terça a domingo',
]

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-grain" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow">
            <MapPin size={16} aria-hidden="true" />
            Pizzaria em Trindade-GO
          </p>
          <h1>
            Qualidade que dá gosto{' '}
            <span>em cada fatia.</span>
          </h1>
          <p className="hero-text">
            Pizzas preparadas com ingredientes escolhidos, cuidado em cada detalhe e bordas recheadas que viraram a nossa marca.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href={links.whatsapp} target="_blank" rel="noreferrer">
              Quero pedir a minha
              <ArrowUpRight size={19} aria-hidden="true" />
            </a>
            <a className="text-link" href="#especialidade">
              Ver nossa especialidade
            </a>
          </div>
          <div className="hero-details" aria-label="Informações rápidas">
            <span>
              <Clock3 size={18} aria-hidden="true" />
              Ter–Dom • 18h–23h30
            </span>
            <span>Desde 2021</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Pizza portuguesa com borda escama de muçarela">
          <div className="hero-image-wrap">
            <img src={heroPizza} alt="Pizza portuguesa com borda escama de muçarela" fetchPriority="high" />
          </div>
          <div className="hero-sticker">
            <span>Borda</span>
            <strong>escama</strong>
          </div>
          <div className="hero-flavor-card">
            <span>Pizza da capa</span>
            <strong>Portuguesa com borda escama muçarela</strong>
          </div>
          <div className="hero-sun" aria-hidden="true" />
        </div>
      </div>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span key={`${item}-${index}`}>
              {item}
              <i>✦</i>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
