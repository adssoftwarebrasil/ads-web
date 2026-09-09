import { Activity, ArrowUpRight, Hand } from 'lucide-react'
import SectionHeading from '../components/SectionHeading.jsx'

const treatments = [
  {
    number: '01',
    title: 'Quiropraxia',
    description:
      'Técnicas manuais voltadas à mobilidade articular, aplicadas de acordo com a necessidade apresentada por cada pessoa.',
    outcome: 'Mais mobilidade e equilíbrio para o dia a dia.',
    icon: Activity,
  },
  {
    number: '02',
    title: 'Liberação Miofascial',
    description:
      'Pressões e movimentos precisos em regiões de tensão para favorecer o relaxamento muscular e movimentos mais livres.',
    outcome: 'Menos tensão, mais conforto para se movimentar.',
    icon: Hand,
  },
]

function Treatments() {
  return (
    <section className="section treatments" id="tratamentos" aria-labelledby="treatments-title">
      <div className="container">
        <div className="treatments-top">
          <SectionHeading
            eyebrow="Cuidado direto ao ponto"
            title="Duas técnicas. Um objetivo: fazer você se sentir melhor."
            description="O atendimento parte da sua necessidade real para escolher a técnica mais adequada e conduzir a sessão com clareza."
          />
          <p className="section-side-note" data-reveal>
            Cada corpo tem uma história. Por isso, o cuidado não começa pela técnica — começa por entender você.
          </p>
        </div>

        <div className="treatment-grid">
          {treatments.map(({ icon: Icon, ...treatment }) => (
            <article className="treatment-card" key={treatment.title} data-reveal>
              <div className="treatment-card__top">
                <span className="treatment-number">{treatment.number}</span>
                <span className="treatment-icon">
                  <Icon aria-hidden="true" />
                </span>
              </div>
              <h3>{treatment.title}</h3>
              <p>{treatment.description}</p>
              <div className="treatment-outcome">
                <span>{treatment.outcome}</span>
                <ArrowUpRight aria-hidden="true" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Treatments

