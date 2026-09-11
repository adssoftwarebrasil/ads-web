import { useMemo, useState } from 'react'
import {
  Activity,
  ArrowUpRight,
  CircleStop,
  Cpu,
  Droplets,
  Gauge,
  Paintbrush,
  ScanLine,
  Settings,
  Snowflake,
  Wrench,
} from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { contact, serviceFilters, services } from '../data/siteData'

const icons = {
  activity: Activity,
  circleStop: CircleStop,
  cpu: Cpu,
  droplets: Droplets,
  gauge: Gauge,
  paintbrush: Paintbrush,
  scanLine: ScanLine,
  settings: Settings,
  snowflake: Snowflake,
  wrench: Wrench,
}

function Services() {
  const [filter, setFilter] = useState('todos')
  const visibleServices = useMemo(
    () => services.filter((service) => filter === 'todos' || service.category === filter),
    [filter],
  )

  return (
    <section className="services section" id="servicos">
      <div className="container">
        <div className="services__intro">
          <Reveal>
            <SectionHeading
              eyebrow="Serviços automotivos"
              title={<>A solução certa para cada <em>sinal do seu veículo.</em></>}
              description="Da prevenção ao reparo especializado, nossa equipe cuida dos principais sistemas do seu veículo em um só lugar."
            />
          </Reveal>
          <Reveal className="services__direct" delay={90}>
            <p>Não sabe qual serviço precisa?</p>
            <a href={contact.whatsapp} target="_blank" rel="noreferrer">Conte o que está acontecendo <ArrowUpRight /></a>
          </Reveal>
        </div>

        <Reveal className="filter-bar" delay={80}>
          {serviceFilters.map((item) => (
            <button
              type="button"
              key={item.id}
              className={filter === item.id ? 'is-active' : ''}
              onClick={() => setFilter(item.id)}
              aria-pressed={filter === item.id}
            >
              {item.label}
            </button>
          ))}
        </Reveal>

        <div className="services__grid" aria-live="polite">
          {visibleServices.map((service, index) => {
            const Icon = icons[service.icon]
            return (
              <article className="service-card" key={service.title}>
                <div className="service-card__top">
                  <span className="service-card__icon"><Icon aria-hidden="true" /></span>
                  <span className="service-card__index">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href={contact.whatsapp} target="_blank" rel="noreferrer" aria-label={`Solicitar atendimento para ${service.title}`}>
                  Solicitar atendimento <ArrowUpRight aria-hidden="true" />
                </a>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
