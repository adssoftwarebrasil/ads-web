import { CheckCircle2, Hand, MessageCircle, Search } from 'lucide-react'
import SectionHeading from '../components/SectionHeading.jsx'

const steps = [
  {
    number: '01',
    title: 'Você conta',
    text: 'A sessão começa com atenção à sua queixa, à sua rotina e ao que tem limitado seus movimentos.',
    icon: MessageCircle,
  },
  {
    number: '02',
    title: 'A gente observa',
    text: 'O problema é localizado com objetividade para que o atendimento siga sem rodeios desnecessários.',
    icon: Search,
  },
  {
    number: '03',
    title: 'A técnica acontece',
    text: 'O cuidado manual é direcionado às regiões que realmente precisam de atenção.',
    icon: Hand,
  },
  {
    number: '04',
    title: 'Você sente a diferença',
    text: 'O foco é devolver conforto e liberdade de movimento para sua rotina, respeitando cada caso.',
    icon: CheckCircle2,
  },
]

function Method() {
  return (
    <section className="section method" id="como-funciona" aria-labelledby="method-title">
      <div className="method-angle" aria-hidden="true" />
      <div className="container method-grid">
        <div className="method-intro">
          <SectionHeading
            eyebrow="Como cuidamos"
            title="Clareza em cada etapa. Atenção em cada movimento."
            description="Sem uma sequência engessada: o atendimento acompanha o que o seu corpo apresenta no momento."
            light
          />
          <div className="method-statement" data-reveal>
            <span>Nosso compromisso</span>
            <p>Ouvir com calma, identificar com agilidade e agir com precisão.</p>
          </div>
        </div>

        <ol className="method-steps">
          {steps.map(({ icon: Icon, ...step }) => (
            <li key={step.number} data-reveal>
              <div className="step-marker">
                <Icon aria-hidden="true" />
              </div>
              <div className="step-copy">
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Method

