import {
  ArrowUpRight,
  AudioLines,
  Bot,
  Cable,
  CarFront,
  Construction,
  Flame,
  ShieldCheck,
  Wrench,
} from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { createWhatsAppUrl, services } from '../data/siteData'

const icons = {
  automation: Bot,
  security: ShieldCheck,
  fire: Flame,
  audio: AudioLines,
  network: Cable,
  maintenance: Wrench,
  construction: Construction,
  charger: CarFront,
}

function Services() {
  return (
    <section className="section services-section" id="servicos">
      <div className="container">
        <div data-reveal>
          <SectionHeading
            eyebrow="Soluções integradas"
            title="Um único parceiro para toda a infraestrutura tecnológica."
            text="Projetos inteligentes, instalação precisa e suporte especializado para obras, empresas e condomínios."
          />
        </div>

        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = icons[service.icon]
            return (
              <article
                className={`service-card service-card--${index + 1}`}
                key={service.title}
                data-reveal
              >
                <img src={service.image} alt={service.alt} loading="lazy" />
                <div className="service-card-shade" aria-hidden="true" />
                <div className="service-card-content">
                  <div className="service-icon" aria-hidden="true">
                    <Icon />
                  </div>
                  <span className="service-index">0{index + 1}</span>
                  <h3>{service.title}</h3>
                  <p className="service-short">{service.short}</p>
                  <div className="service-details">
                    <p>{service.description}</p>
                    <a
                      href={createWhatsAppUrl(
                        `Olá! Gostaria de saber mais sobre ${service.title.toLowerCase()} com a TWA Tecnologia.`,
                      )}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Conversar sobre esta solução
                      <ArrowUpRight size={17} aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
