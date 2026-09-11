import { BadgeDollarSign, Boxes, Handshake, TimerReset } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'

const benefits = [
  {
    icon: Handshake,
    number: '01',
    title: 'Atendimento personalizado',
    text: 'A equipe ouve sua necessidade e ajuda a buscar o componente adequado.',
  },
  {
    icon: TimerReset,
    number: '02',
    title: 'Agilidade sem burocracia',
    text: 'Respostas diretas para resolver o que sua rotina precisa com mais rapidez.',
  },
  {
    icon: Boxes,
    number: '03',
    title: 'Pontualidade na entrega',
    text: 'Compromisso com prazos para sua operação seguir em movimento.',
  },
  {
    icon: BadgeDollarSign,
    number: '04',
    title: 'Preço justo e competitivo',
    text: 'Uma relação comercial transparente e coerente em cada orçamento.',
  },
]

export default function ServiceExperience() {
  return (
    <section className="service-experience section" id="atendimento" aria-labelledby="service-title">
      <div className="container">
        <Reveal className="service-experience__heading">
          <SectionHeading
            eyebrow="O jeito Feira de atender"
            title={<span id="service-title">Menos espera. Mais solução.</span>}
            text="Um atendimento simples, próximo e orientado para resolver — como precisa ser."
            light
          />
          <div className="service-experience__metric">
            <strong>60</strong>
            <span>anos aprendendo a servir melhor</span>
          </div>
        </Reveal>

        <div className="benefit-grid">
          {benefits.map(({ icon: Icon, number, title, text }, index) => (
            <Reveal className="benefit-card" delay={index * 80} key={title}>
              <article>
                <div className="benefit-card__top">
                  <Icon aria-hidden="true" />
                  <span>{number}</span>
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
