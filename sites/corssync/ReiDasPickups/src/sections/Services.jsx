import { Cog, MessageCircle, Settings, Wrench } from 'lucide-react'
import { services, whatsappUrl } from '../data/siteData.js'

const icons = {
  engine: Cog,
  settings: Settings,
  wrench: Wrench,
}

function Services() {
  return (
    <section className="section services" id="servicos">
      <div className="container">
        <div className="section-heading" data-reveal>
          <div>
            <span className="section-kicker">Central de soluções</span>
            <h2>Do motor à transmissão, <span>cuidado completo.</span></h2>
          </div>
          <p>
            Peças e serviços para manter seu veículo trabalhando com confiança, desempenho e segurança no dia a dia.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service) => {
            const Icon = icons[service.icon]
            return (
              <article className="service-card" key={service.title} data-reveal>
                <span className="service-card__index">{service.index}</span>
                <div className="service-card__icon"><Icon aria-hidden="true" /></div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <span className="service-card__detail">{service.detail}</span>
              </article>
            )
          })}
        </div>

        <div className="services__cta" data-reveal>
          <p>Não sabe qual serviço seu veículo precisa?</p>
          <a href={whatsappUrl} target="_blank" rel="noreferrer">
            <MessageCircle size={18} aria-hidden="true" />
            Conte o que está acontecendo
          </a>
        </div>
      </div>
    </section>
  )
}

export default Services
