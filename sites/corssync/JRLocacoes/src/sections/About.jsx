import { BadgeCheck, CalendarClock, ShieldCheck } from 'lucide-react'
import SectionTitle from '../components/SectionTitle.jsx'
import handshakeImage from '../assets/atendimento-cliente.jpeg'
import facadeImage from '../assets/fachada-jr-locacoes.jpeg'

const values = [
  {
    icon: BadgeCheck,
    title: 'Qualidade',
    text: 'Cuidado com o serviço e atenção ao que o cliente realmente precisa.',
  },
  {
    icon: ShieldCheck,
    title: 'Responsabilidade',
    text: 'Compromisso com cada etapa e com a confiança de quem contrata.',
  },
  {
    icon: CalendarClock,
    title: 'Pontualidade',
    text: 'Organização para atender o combinado e respeitar a rotina da operação.',
  },
]

function About() {
  return (
    <section className="about section" id="empresa">
      <div className="container about-grid">
        <div className="about-images reveal">
          <figure className="about-image about-image--main">
            <img src={handshakeImage} alt="Atendimento da JR Locações a um cliente" loading="lazy" />
          </figure>
          <figure className="about-image about-image--detail">
            <img src={facadeImage} alt="Fachada da JR Locações em Trindade, Goiás" loading="lazy" />
          </figure>
          <div className="about-word" aria-hidden="true">
            JR
          </div>
        </div>

        <div className="about-copy reveal">
          <SectionTitle eyebrow="Jeito JR de atender" title="Compromisso que aparece no aperto de mão" />
          <p className="about-lead">
            A JR Locações trabalha para que cada serviço seja conduzido com qualidade,
            responsabilidade e pontualidade.
          </p>
          <p>
            Nosso foco é compreender a demanda, alinhar a operação e oferecer um atendimento
            próximo, do primeiro contato à conclusão do serviço.
          </p>

          <div className="values-list">
            {values.map(({ icon: Icon, title, text }) => (
              <article key={title}>
                <Icon aria-hidden="true" />
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
