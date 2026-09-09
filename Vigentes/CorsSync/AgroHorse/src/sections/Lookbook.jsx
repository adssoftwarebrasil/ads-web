import { useMemo, useState } from 'react'
import { ArrowRight, Instagram } from 'lucide-react'
import { contact, galleryItems } from '../data/catalog.js'

const filters = [
  { id: 'todos', label: 'Tudo' },
  { id: 'botas', label: 'Botas' },
  { id: 'chapeus', label: 'Chapéus & bonés' },
  { id: 'moda', label: 'Moda country' },
  { id: 'acessorios', label: 'Acessórios' },
  { id: 'infantil', label: 'Infantil' },
]

function Lookbook() {
  const [activeFilter, setActiveFilter] = useState('todos')
  const [showAll, setShowAll] = useState(false)

  const filteredItems = useMemo(
    () => activeFilter === 'todos'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter),
    [activeFilter],
  )

  const visibleItems = activeFilter === 'todos' && !showAll
    ? filteredItems.slice(0, 10)
    : filteredItems

  const chooseFilter = (id) => {
    setActiveFilter(id)
    setShowAll(false)
  }

  return (
    <section className="lookbook section-space" id="novidades" aria-labelledby="lookbook-title">
      <div className="shell">
        <div className="section-heading heading-split">
          <div>
            <p className="eyebrow"><span /> Um pouco da loja</p>
            <h2 id="lookbook-title">Escolha o que combina com a sua história.</h2>
          </div>
          <a className="instagram-link" href={contact.instagram} target="_blank" rel="noreferrer">
            <Instagram aria-hidden="true" /> Acompanhar novidades
          </a>
        </div>

        <div className="filter-list" role="group" aria-label="Filtrar produtos">
          {filters.map((filter) => (
            <button
              type="button"
              key={filter.id}
              className={activeFilter === filter.id ? 'is-active' : ''}
              aria-pressed={activeFilter === filter.id}
              onClick={() => chooseFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="lookbook-grid" aria-live="polite">
          {visibleItems.map((item, index) => (
            <article className={`lookbook-card card-shape-${(index % 5) + 1}`} key={`${item.title}-${item.image}`}>
              <img src={item.image} alt={item.alt} loading="lazy" />
              <div className="lookbook-label"><span>{item.title}</span></div>
            </article>
          ))}
        </div>

        {activeFilter === 'todos' && (
          <button className="button button-outline gallery-more" type="button" onClick={() => setShowAll((value) => !value)}>
            {showAll ? 'Mostrar seleção' : `Ver toda a galeria (${galleryItems.length})`}
            <ArrowRight size={18} aria-hidden="true" />
          </button>
        )}
      </div>
    </section>
  )
}

export default Lookbook
