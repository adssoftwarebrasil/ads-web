import { BookOpenCheck, Factory, Mic2, Scale, ShieldCheck, UsersRound } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { appliedStandards, knowledgeHighlights } from '../data/portfolioData'

const knowledgeIcons = [Mic2, BookOpenCheck, UsersRound, Factory]

function Authority() {
  return (
    <section className="section authority-section" id="conhecimento">
      <div className="container authority-layout">
        <div className="authority-knowledge" data-reveal>
          <SectionHeading
            eyebrow="Conhecimento compartilhado"
            title="Experiência técnica que também forma profissionais."
            text="Palestras, publicações e participação em comunidades profissionais ampliam a discussão sobre inclusão para além de cada projeto."
            light
          />

          <div className="authority-cards">
            {knowledgeHighlights.map((item, index) => {
              const Icon = knowledgeIcons[index]
              return (
                <article key={item.title}>
                  <Icon aria-hidden="true" />
                  <span>{item.type}</span>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </article>
              )
            })}
          </div>
        </div>

        <aside className="standards-panel" data-reveal>
          <div className="standards-panel__heading">
            <div><Scale aria-hidden="true" /></div>
            <span>Base técnica</span>
            <h3>Normas e legislações aplicadas aos projetos.</h3>
            <p>A definição dos requisitos considera o uso, o escopo e as normas aplicáveis a cada espaço.</p>
          </div>

          <div className="standards-list">
            {appliedStandards.map((standard) => (
              <div key={standard.title}>
                <ShieldCheck aria-hidden="true" />
                <span><strong>{standard.title}</strong><small>{standard.text}</small></span>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  )
}

export default Authority
