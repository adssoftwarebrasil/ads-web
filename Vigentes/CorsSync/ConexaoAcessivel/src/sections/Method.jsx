import SectionHeading from '../components/SectionHeading'
import guideImage from '../assets/guia-acessibilidade-empresas.png'
import { methodSteps } from '../data/siteData'

function Method() {
  return (
    <section className="section method" id="metodo">
      <div className="container">
        <div data-reveal>
          <SectionHeading
            eyebrow="Como atuamos"
            title="Um caminho técnico, claro e conectado."
            text="A acessibilidade é analisada como percurso: cada decisão precisa conversar com a próxima."
            light
          />
        </div>

        <div className="method-layout">
          <div className="method-steps">
            {methodSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <article className="method-step" key={step.title} data-reveal style={{ '--delay': `${index * 80}ms` }}>
                  <span className="method-step__number">0{index + 1}</span>
                  <div className="method-step__icon"><Icon aria-hidden="true" /></div>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </article>
              )
            })}
          </div>

          <aside className="method-insight" data-reveal>
            <img src={guideImage} alt="Material educativo sobre acessibilidade nas empresas" />
            <div className="method-insight__content">
              <span>Conhecimento compartilhado</span>
              <h3>Acessibilidade também se constrói com informação.</h3>
              <p>Treinamentos e palestras ajudam equipes técnicas a reconhecer barreiras e tomar decisões melhores.</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default Method
