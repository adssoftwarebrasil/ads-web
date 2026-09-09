import { Focus, Heart, MoveRight, Zap } from 'lucide-react'
import SectionHeading from '../components/SectionHeading.jsx'

const feedbackPoints = [
  {
    icon: Heart,
    title: 'Atenção de verdade',
    text: 'Escuta cuidadosa para entender a necessidade por trás do desconforto.',
  },
  {
    icon: Focus,
    title: 'Leitura objetiva',
    text: 'Agilidade para localizar o que precisa de atenção e conduzir a sessão.',
  },
  {
    icon: Zap,
    title: 'Sem enrolação',
    text: 'Um atendimento prático, claro e focado em buscar alívio e mobilidade.',
  },
]

function Proof() {
  return (
    <section className="section proof" aria-labelledby="proof-title">
      <div className="container">
        <div className="proof-heading-row">
          <SectionHeading
            eyebrow="O que faz diferença"
            title="O cuidado que os clientes reconhecem."
            description="Os pontos mais citados nos feedbacks recebidos pela Alliviun ao longo dos anos."
          />
          <span className="proof-line" aria-hidden="true" />
        </div>

        <div className="feedback-grid">
          {feedbackPoints.map(({ icon: Icon, ...item }) => (
            <article key={item.title} className="feedback-card" data-reveal>
              <Icon aria-hidden="true" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>

        <div className="case-panel" data-reveal>
          <div className="case-panel__label">
            <span>Histórias que importam</span>
            <MoveRight aria-hidden="true" />
          </div>
          <div className="case-panel__copy">
            <h3>Voltar a se mover também é voltar a viver a própria rotina.</h3>
            <p>
              Entre os casos que mais marcaram a Alliviun estão pessoas acima dos 60 anos, com mobilidade muito
              reduzida, que relataram alívio das dores e retomada dos movimentos após o atendimento.
            </p>
            <small>Cada caso é avaliado individualmente e os resultados podem variar.</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Proof

