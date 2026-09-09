import {
  BadgeCheck,
  Building2,
  CalendarCheck2,
  Headphones,
  PenTool,
  UsersRound,
} from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { differentiators } from '../data/siteData'

const icons = {
  project: PenTool,
  building: Building2,
  compliance: BadgeCheck,
  team: UsersRound,
  support: Headphones,
  schedule: CalendarCheck2,
}

function Differentials() {
  return (
    <section className="section differentials-section" id="diferenciais">
      <div className="container">
        <div className="differentials-heading" data-reveal>
          <SectionHeading
            eyebrow="Engenharia que inspira confiança"
            title="Do diagnóstico ao suporte, cada detalhe importa."
            text="A experiência técnica da TWA transforma sistemas complexos em soluções claras, confiáveis e prontas para o uso."
          />
          <div className="blueprint-note" aria-hidden="true">
            <span>Projeto</span>
            <i />
            <span>Instalação</span>
            <i />
            <span>Suporte</span>
          </div>
        </div>

        <div className="differentials-grid">
          {differentiators.map((item, index) => {
            const Icon = icons[item.icon]
            return (
              <article className="differential-card" key={item.title} data-reveal>
                <span className="differential-number">{String(index + 1).padStart(2, '0')}</span>
                <div className="differential-icon" aria-hidden="true">
                  <Icon />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Differentials
