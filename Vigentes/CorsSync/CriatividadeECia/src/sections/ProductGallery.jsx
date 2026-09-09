import { useEffect, useMemo, useState } from 'react'
import { MessageCircle, Plus, ShoppingBag } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import SectionIntro from '../components/SectionIntro.jsx'
import { STORE_PHONE } from '../constants.js'
import { catalog, categoryLabels } from '../data/catalog.js'

const filters = [
  { value: 'todos', label: 'Tudo' },
  { value: 'papelaria', label: 'Papelaria' },
  { value: 'informatica', label: 'Informática' },
  { value: 'presentes', label: 'Presentes' },
  { value: 'utilidades', label: 'Utilidades' },
  { value: 'brinquedos', label: 'Brinquedos' },
]

function ProductGallery() {
  const [activeFilter, setActiveFilter] = useState('todos')
  const [visibleCount, setVisibleCount] = useState(8)

  const filteredProducts = useMemo(
    () =>
      activeFilter === 'todos'
        ? catalog
        : catalog.filter((product) => product.category === activeFilter),
    [activeFilter],
  )

  useEffect(() => {
    setVisibleCount(8)
  }, [activeFilter])

  const visibleProducts = filteredProducts.slice(0, visibleCount)

  const selectFilter = (filter) => {
    setActiveFilter(filter)
  }

  return (
    <section className="section product-showcase" id="vitrine">
      <div className="container">
        <div className="showcase-heading">
          <Reveal>
            <SectionIntro
              eyebrow="Um giro pela loja"
              title="Tem sempre algo novo para descobrir."
              text="Explore alguns dos produtos que passam pelas nossas prateleiras e fale com a equipe para consultar a disponibilidade."
            />
          </Reveal>
          <Reveal className="showcase-heading__note" delay={100}>
            <ShoppingBag aria-hidden="true" />
            <span>
              <strong>Gostou de algo?</strong>
              Tire sua dúvida pelo WhatsApp.
            </span>
          </Reveal>
        </div>

        <Reveal className="filters" delay={80}>
          <div className="filters__scroll" role="group" aria-label="Filtrar vitrine por departamento">
            {filters.map((filter) => (
              <button
                key={filter.value}
                type="button"
                className={activeFilter === filter.value ? 'is-active' : ''}
                aria-pressed={activeFilter === filter.value}
                onClick={() => selectFilter(filter.value)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="product-grid" aria-live="polite">
          {visibleProducts.map((product, index) => {
            const message = encodeURIComponent(
              `Olá! Vi ${product.title} no site da Criatividade & Cia e gostaria de consultar a disponibilidade.`,
            )

            return (
              <article
                className={`product-card ${product.featured && activeFilter === 'todos' ? 'product-card--featured' : ''}`}
                key={product.id}
                style={{ '--card-index': index }}
              >
                <div className="product-card__image">
                  <img src={product.image} alt={product.alt} loading="lazy" />
                  <span>{categoryLabels[product.category]}</span>
                </div>
                <div className="product-card__body">
                  <h3>{product.title}</h3>
                  <a
                    href={`https://wa.me/${STORE_PHONE}?text=${message}`}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Consultar disponibilidade de ${product.title} pelo WhatsApp`}
                  >
                    Consultar <MessageCircle aria-hidden="true" />
                  </a>
                </div>
              </article>
            )
          })}
        </div>

        {visibleCount < filteredProducts.length && (
          <div className="show-more">
            <button
              type="button"
              className="button button--outline"
              onClick={() => setVisibleCount((count) => count + 8)}
            >
              <Plus aria-hidden="true" /> Ver mais novidades
            </button>
            <span>
              Mostrando {Math.min(visibleCount, filteredProducts.length)} de {filteredProducts.length}
            </span>
          </div>
        )}

        <p className="availability-note">
          As imagens apresentam itens que passaram pela loja. Modelos, cores e disponibilidade podem variar.
        </p>
      </div>
    </section>
  )
}

export default ProductGallery
