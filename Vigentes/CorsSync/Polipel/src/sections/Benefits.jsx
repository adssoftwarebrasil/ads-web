import { benefits } from '../data.js'

export function Benefits() {
  return (
    <section className="benefits section" id="diferenciais">
      <div className="container benefits__inner">
        <div className="benefits__intro" data-reveal>
          <p className="eyebrow"><span /> Por que a Polipel</p>
          <h2>Comprar bem também é ser bem atendido.</h2>
          <p>
            A Polipel combina variedade, orientação e soluções práticas para tornar sua compra mais simples — seja para a empresa, para o comércio ou para casa.
          </p>
          <div className="benefits__seal" aria-hidden="true">
            <strong>P</strong><span>Qualidade<br />que acompanha</span>
          </div>
        </div>

        <div className="benefits-grid">
          {benefits.map(({ title, description, icon: Icon }, index) => (
            <article className={`benefit-card benefit-card--${index + 1}`} key={title} data-reveal>
              <Icon aria-hidden="true" />
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

