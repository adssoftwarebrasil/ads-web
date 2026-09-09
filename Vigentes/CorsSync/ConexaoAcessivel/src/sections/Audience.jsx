import { ArrowRight } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { audiences, whatsappUrl } from '../data/siteData'

function Audience() {
  return (
    <section className="section audience">
      <div className="container audience-layout">
        <div className="audience-intro" data-reveal>
          <SectionHeading
            eyebrow="Para quem projetamos"
            title="Acessibilidade é uma responsabilidade compartilhada."
            text="Apoiamos profissionais, empresas e instituições a planejar espaços mais inclusivos com segurança técnica."
          />
          <a className="button button--secondary" href={whatsappUrl} target="_blank" rel="noreferrer">
            Falar sobre meu projeto <ArrowRight aria-hidden="true" />
          </a>
        </div>

        <div className="audience-grid" data-reveal>
          {audiences.map((audience) => {
            const Icon = audience.icon
            return (
              <div className="audience-card" key={audience.title}>
                <Icon aria-hidden="true" />
                <h3>{audience.title}</h3>
              </div>
            )
          })}
        </div>
      </div>

      <div className="container coverage" data-reveal>
        <span>Área de atendimento</span>
        <p>Goiânia · Anápolis · Rio Verde · Brasília · Catalão · Aparecida de Goiânia · Senador Canedo · Mato Grosso do Sul · Curitiba · todo o Brasil</p>
      </div>
    </section>
  )
}

export default Audience
