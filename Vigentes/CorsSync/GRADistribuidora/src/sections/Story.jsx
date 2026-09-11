import { BadgeCheck, CircleGauge, Wrench } from 'lucide-react'

const commitments = [
  {
    icon: BadgeCheck,
    title: 'Qualidade no serviço',
    text: 'Cuidado em cada etapa para entregar um atendimento confiável.',
  },
  {
    icon: CircleGauge,
    title: 'Experiência automotiva',
    text: 'Atuação que começou na mecânica e cresceu para a distribuição de peças.',
  },
  {
    icon: Wrench,
    title: 'Solução completa',
    text: 'Peças e mão de obra para diferentes categorias de veículos.',
  },
]

function Story() {
  return (
    <section className="story section" id="historia">
      <div className="container story-layout">
        <div className="story-year" data-reveal>
          <span>Desde</span>
          <strong>2017</strong>
          <i aria-hidden="true" />
        </div>

        <div className="story-copy" data-reveal>
          <p className="eyebrow dark"><span /> Nossa trajetória</p>
          <h2>Uma história construída para manter operações em movimento.</h2>
          <p>
            A GRA nasceu com foco no atendimento mecânico ao setor público. Logo depois, ampliou sua atuação e também se tornou distribuidora de peças.
          </p>
          <p>
            Hoje, reúne peças e mão de obra para categorias automotivas que vão da linha leve à pesada, com compromisso contínuo com a qualidade do serviço e a satisfação de quem confia na empresa.
          </p>
        </div>

        <div className="commitment-list">
          {commitments.map(({ icon: Icon, title, text }) => (
            <article key={title} data-reveal>
              <Icon aria-hidden="true" />
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Story
