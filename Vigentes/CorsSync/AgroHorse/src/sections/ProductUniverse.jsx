import { ArrowUpRight } from 'lucide-react'
import { categories, whatsappLink } from '../data/catalog.js'

function ProductUniverse() {
  return (
    <section className="collections section-space" id="colecoes" aria-labelledby="collections-title">
      <div className="shell">
        <div className="section-heading heading-split">
          <div>
            <p className="eyebrow"><span /> Da cabeça aos pés</p>
            <h2 id="collections-title">Seu estilo pede presença.</h2>
          </div>
          <p>
            Peças para o dia a dia, a lida, o rodeio e aquele encontro que pede um visual com personalidade.
          </p>
        </div>

        <div className="category-grid">
          {categories.map((category, index) => (
            <article className={`category-card category-card-${index + 1}`} key={category.title}>
              <img
                src={category.image}
                alt=""
                loading="lazy"
                style={{ objectPosition: category.position }}
              />
              <div className="category-overlay" />
              <div className="category-content">
                <p>{category.eyebrow}</p>
                <h3>{category.title}</h3>
                <span>{category.description}</span>
                <a
                  href={whatsappLink(`Olá! Gostaria de saber mais sobre ${category.title.toLowerCase()} disponíveis na AgroHorse.`)}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Consultar ${category.title} no WhatsApp`}
                >
                  Consultar modelos <ArrowUpRight aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductUniverse
