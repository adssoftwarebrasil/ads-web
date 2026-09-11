import { ArrowRight } from 'lucide-react'
import { solutions, WHATSAPP_LINK } from '../data.js'

export function Solutions() {
  return (
    <section className="solutions section" id="produtos">
      <div className="container">
        <div className="section-heading section-heading--split" data-reveal>
          <div>
            <p className="eyebrow"><span /> Encontre o que precisa</p>
            <h2>Um balcão cheio de soluções.</h2>
          </div>
          <p>
            Da identidade da sua entrega ao material que mantém o escritório funcionando, a Polipel ajuda você a resolver tudo em um só lugar.
          </p>
        </div>

        <div className="solutions-grid">
          {solutions.map(({ title, description, icon: Icon, featured, label }, index) => (
            <article
              className={`solution-card ${featured ? 'solution-card--featured' : ''}`}
              key={title}
              data-reveal
            >
              <div className="solution-card__top">
                <span className="solution-card__number">0{index + 1}</span>
                <span className="solution-card__icon"><Icon aria-hidden="true" /></span>
              </div>
              <div className="solution-card__content">
                <span className="solution-card__label">{label}</span>
                <h3>{title}</h3>
                <p>{description}</p>
                {featured && (
                  <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                    Fale sobre o que você precisa <ArrowRight size={18} aria-hidden="true" />
                  </a>
                )}
              </div>
              {featured && <div className="package-shapes" aria-hidden="true"><i /><i /><i /></div>}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

