import { BadgeCheck, Clock3, Headphones, Sparkles } from 'lucide-react'
import SectionHeading from '../components/SectionHeading.jsx'
import { benefits } from '../data/siteData.js'

const values = [
  { icon: BadgeCheck, label: 'Ética e transparência' },
  { icon: Headphones, label: 'Atendimento próximo' },
  { icon: Clock3, label: 'Agilidade no retorno' },
  { icon: Sparkles, label: 'Compromisso com excelência' },
]

function Benefits() {
  return (
    <section className="section benefits">
      <div className="container">
        <SectionHeading
          eyebrow="Por que escolher a CWB Saúde?"
          title="Mais que vender um plano: orientar sua decisão"
          text="Experiência de mercado, atendimento personalizado e compromisso para tornar sua escolha mais segura."
          align="center"
        />

        <div className="benefits__grid">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <article data-reveal style={{ '--delay': `${index * 80}ms` }} key={benefit.title}>
                <span><Icon aria-hidden="true" /></span>
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </article>
            )
          })}
        </div>

        <div className="values-strip" aria-label="Valores da CWB Saúde">
          {values.map((value) => {
            const Icon = value.icon
            return (
              <span key={value.label}><Icon aria-hidden="true" /> {value.label}</span>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Benefits
