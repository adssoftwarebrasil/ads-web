import { Clock3, Headphones, ShieldCheck, Truck } from 'lucide-react'
import Reveal from '../components/Reveal'

const facts = [
  { icon: Truck, title: 'Do compacto à linha pesada', copy: 'Leves, SUVs, pick-ups, importados, vans e veículos pesados.' },
  { icon: ShieldCheck, title: 'Garantia de 90 dias', copy: 'Mais tranquilidade nas peças e nos serviços realizados.' },
  { icon: Clock3, title: 'Agilidade com critério', copy: 'Execução eficiente, com diagnóstico antes da intervenção.' },
  { icon: Headphones, title: 'Suporte de verdade', copy: 'Atendimento personalizado, emergencial e focado no cliente.' },
]

function QuickFacts() {
  return (
    <section className="quick-facts" id="diferenciais" aria-label="Diferenciais da Mecânica 277">
      <div className="container quick-facts__grid">
        {facts.map((fact, index) => {
          const Icon = fact.icon
          return (
            <Reveal className="fact-card" delay={index * 55} key={fact.title}>
              <span className="fact-card__number">0{index + 1}</span>
              <Icon aria-hidden="true" />
              <div><h2>{fact.title}</h2><p>{fact.copy}</p></div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}

export default QuickFacts
