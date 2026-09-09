import { ArrowUpRight } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { complementaryService, solutions, whatsappUrl } from '../data/siteData'

function Solutions() {
  const ComplementaryIcon = complementaryService.icon

  return (
    <section className="section solutions" id="solucoes">
      <div className="container">
        <div data-reveal>
          <SectionHeading
            eyebrow="Soluções técnicas"
            title="A norma é o ponto de partida. O espaço precisa funcionar de verdade."
            text="Cada trabalho combina leitura arquitetônica, conhecimento técnico e viabilidade para orientar decisões consistentes."
          />
        </div>

        <div className="solutions-grid">
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            return (
              <article
                className={`solution-card ${solution.featured ? 'solution-card--featured' : ''}`}
                key={solution.title}
                data-reveal
                style={{ '--delay': `${index * 70}ms` }}
              >
                <div className="solution-card__top">
                  <span>{solution.number}</span>
                  <Icon aria-hidden="true" />
                </div>
                <h3>{solution.title}</h3>
                <p>{solution.description}</p>
              </article>
            )
          })}
        </div>

        <div className="complementary-service" data-reveal>
          <div className="complementary-service__icon"><ComplementaryIcon aria-hidden="true" /></div>
          <div>
            <span>Atividade complementar</span>
            <h3>{complementaryService.title}</h3>
            <p>{complementaryService.text}</p>
          </div>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Consultar produtos e instalações pelo WhatsApp">
            Consultar disponibilidade <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Solutions
