import { useCallback, useMemo, useState } from 'react'
import { ArrowUpRight, Plus } from 'lucide-react'
import { PromotionModal } from '../components/PromotionModal'
import { SectionHeading } from '../components/SectionHeading'
import { filters, promotions } from '../data/siteData'

export function PromoGallery() {
  const [activeFilter, setActiveFilter] = useState('todos')
  const [visibleCount, setVisibleCount] = useState(8)
  const [selectedIndex, setSelectedIndex] = useState(null)

  const filteredPromotions = useMemo(
    () => promotions.filter((item) => activeFilter === 'todos' || item.category === activeFilter),
    [activeFilter],
  )

  const selectedItem = selectedIndex === null ? null : filteredPromotions[selectedIndex]

  const changeFilter = (filter) => {
    setActiveFilter(filter)
    setVisibleCount(8)
    setSelectedIndex(null)
  }

  const closeModal = useCallback(() => setSelectedIndex(null), [])
  const showNext = useCallback(() => {
    setSelectedIndex((current) => (current === null ? 0 : (current + 1) % filteredPromotions.length))
  }, [filteredPromotions.length])
  const showPrevious = useCallback(() => {
    setSelectedIndex((current) =>
      current === null ? 0 : (current - 1 + filteredPromotions.length) % filteredPromotions.length,
    )
  }, [filteredPromotions.length])

  return (
    <section className="showcase section" id="vitrine">
      <div className="container">
        <div className="showcase-heading-row">
          <SectionHeading
            eyebrow="Vitrine de cuidados"
            title="Escolhas para a saúde e o bem-estar de toda a casa."
            description="Explore nossas principais categorias e consulte a equipe para confirmar produtos disponíveis."
            light
          />
          <span className="showcase-counter" data-reveal>
            <strong>21</strong>
            categorias em destaque
          </span>
        </div>

        <div className="filter-bar" role="group" aria-label="Filtrar vitrine por categoria" data-reveal>
          {filters.map((filter) => (
            <button
              className={activeFilter === filter.id ? 'is-active' : ''}
              key={filter.id}
              type="button"
              onClick={() => changeFilter(filter.id)}
              aria-pressed={activeFilter === filter.id}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="promotion-grid">
          {filteredPromotions.slice(0, visibleCount).map((item, index) => (
            <button className="promotion-card" type="button" key={item.title} onClick={() => setSelectedIndex(index)}>
              <span className="promotion-card__image" style={{ '--poster': 'url(' + item.image + ')' }}>
                <img src={item.image} alt={'Material sobre ' + item.title} loading="lazy" decoding="async" />
              </span>
              <span className="promotion-card__body">
                <span>
                  <small>{filters.find((filter) => filter.id === item.category)?.label}</small>
                  <strong>{item.title}</strong>
                </span>
                <span className="promotion-card__icon" aria-hidden="true">
                  <ArrowUpRight size={19} />
                </span>
              </span>
            </button>
          ))}
        </div>

        {visibleCount < filteredPromotions.length && (
          <button className="button button--load-more" type="button" onClick={() => setVisibleCount((count) => count + 8)}>
            <Plus size={19} aria-hidden="true" />
            Ver mais categorias
          </button>
        )}

        <div className="medicine-notice">
          <strong>Cuide-se com orientação.</strong>
          <span>Medicamentos sujeitos a prescrição exigem receita. Não se automedique.</span>
        </div>
      </div>

      <PromotionModal
        item={selectedItem}
        onClose={closeModal}
        onNext={showNext}
        onPrevious={showPrevious}
      />
    </section>
  )
}
