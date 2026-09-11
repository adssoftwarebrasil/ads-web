import { Cog, Droplets, Fan, Gauge, Waves, Wind, Zap } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { productGroups } from '../data/site'

const iconById = {
  bombas: Droplets,
  compressores: Gauge,
  motores: Zap,
  'lava-jatos': Waves,
  complementares: Fan,
}

function Solutions() {
  return (
    <section className="section solutions" id="solucoes">
      <div className="container">
        <div className="solutions-intro">
          <SectionHeading
            eyebrow="Linha de soluções"
            title="O equipamento certo para cada necessidade."
            description="Da escolha da peça à manutenção do conjunto, encontre soluções para aplicações residenciais, comerciais e industriais."
          />
          <div className="solutions-orbit" aria-hidden="true" data-reveal>
            <div><Cog size={31} /></div>
            <span>força</span>
            <span>fluxo</span>
            <span>pressão</span>
          </div>
        </div>

        <div className="solutions-grid">
          {productGroups.map((group, itemIndex) => {
            const Icon = iconById[group.id]
            return (
              <article
                className={`solution-card solution-card-${group.id}`}
                key={group.id}
                data-reveal
                style={{ '--reveal-delay': `${itemIndex * 70}ms` }}
              >
                <div className="solution-card-top">
                  <span className="solution-icon" aria-hidden="true"><Icon size={26} /></span>
                  <span className="solution-index">{group.index}</span>
                </div>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
              </article>
            )
          })}
        </div>

        <div className="solutions-band" data-reveal>
          <div className="solutions-band-icon" aria-hidden="true">
            <Wind size={30} />
          </div>
          <p>
            <strong>Não encontrou o equipamento na lista?</strong>
            Conte o que você precisa e receba orientação para identificar a peça, o equipamento ou o serviço adequado.
          </p>
          <a href="#contato">Consultar atendimento</a>
        </div>
      </div>
    </section>
  )
}

export default Solutions
