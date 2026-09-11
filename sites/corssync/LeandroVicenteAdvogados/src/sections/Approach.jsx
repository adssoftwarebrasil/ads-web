import { FileSearch, MessagesSquare, Route } from 'lucide-react'

const steps = [
  {
    icon: MessagesSquare,
    number: '01',
    title: 'Compreensão do contexto',
    text: 'Escuta atenta para entender a situação, as dúvidas e os objetivos apresentados.',
  },
  {
    icon: FileSearch,
    number: '02',
    title: 'Análise jurídica',
    text: 'Avaliação técnica das informações e dos documentos relacionados à demanda.',
  },
  {
    icon: Route,
    number: '03',
    title: 'Condução estratégica',
    text: 'Definição dos caminhos jurídicos adequados às particularidades do caso.',
  },
]

export default function Approach() {
  return (
    <section className="approach section">
      <div className="container">
        <div className="approach__heading" data-reveal>
          <span className="eyebrow">Forma de atuação</span>
          <h2>Um trabalho jurídico começa por entender o que realmente está em jogo.</h2>
        </div>

        <div className="approach__steps">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <article key={step.number} data-reveal style={{ '--delay': `${index * 90}ms` }}>
                <div className="approach__icon">
                  <Icon size={25} strokeWidth={1.5} />
                </div>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
