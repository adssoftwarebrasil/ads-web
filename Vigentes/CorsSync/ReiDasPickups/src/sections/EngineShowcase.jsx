import { useState } from 'react'
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { engines, whatsappUrl } from '../data/siteData.js'

function EngineShowcase() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeEngine = engines[activeIndex]

  const changeEngine = (direction) => {
    setActiveIndex((current) => (current + direction + engines.length) % engines.length)
  }

  return (
    <section className="section engine-showcase" id="motores">
      <div className="engine-showcase__grid-pattern" aria-hidden="true" />
      <div className="container">
        <div className="section-heading section-heading--light" data-reveal>
          <div>
            <span className="section-kicker">Motores em destaque</span>
            <h2>Força para diferentes <span>caminhos.</span></h2>
          </div>
          <p>
            Confira alguns dos motores apresentados pela Rei das Pickups e fale com a equipe para consultar sua necessidade.
          </p>
        </div>

        <div className="engine-stage" data-reveal>
          <div
            className="engine-stage__media"
            id="engine-panel"
            role="tabpanel"
            aria-labelledby={`engine-tab-${activeIndex}`}
            aria-live="polite"
          >
            <img key={activeEngine.image} src={activeEngine.image} alt={activeEngine.alt} />
            <div className="engine-stage__counter">
              <span>{String(activeIndex + 1).padStart(2, '0')}</span>
              <i />
              <span>{String(engines.length).padStart(2, '0')}</span>
            </div>
            <div className="engine-stage__arrows">
              <button type="button" onClick={() => changeEngine(-1)} aria-label="Ver motor anterior">
                <ChevronLeft aria-hidden="true" />
              </button>
              <button type="button" onClick={() => changeEngine(1)} aria-label="Ver próximo motor">
                <ChevronRight aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="engine-stage__panel">
            <div className="engine-stage__active-title">
              <span>Motor</span>
              <h3>{activeEngine.model}</h3>
              <strong>{activeEngine.spec} <small>{activeEngine.fuel}</small></strong>
            </div>

            <div className="engine-tabs" role="tablist" aria-label="Selecionar motor">
              {engines.map((engine, index) => (
                <button
                  key={`${engine.model}-${engine.spec}`}
                  className={index === activeIndex ? 'is-active' : ''}
                  type="button"
                  role="tab"
                  id={`engine-tab-${index}`}
                  aria-controls="engine-panel"
                  aria-selected={index === activeIndex}
                  tabIndex={index === activeIndex ? 0 : -1}
                  onClick={() => setActiveIndex(index)}
                >
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong>{engine.model}</strong>
                  <small>{engine.spec} {engine.fuel}</small>
                </button>
              ))}
            </div>

            <a className="engine-stage__link" href={whatsappUrl} target="_blank" rel="noreferrer">
              Consultar este motor
              <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EngineShowcase
