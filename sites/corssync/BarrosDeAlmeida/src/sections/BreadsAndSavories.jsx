import { MessageCircle } from 'lucide-react'
import { useState } from 'react'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { breadSavoryGallery, contact } from '../data/siteData.js'

const filters = [
  { value: 'all', label: 'Todos' },
  { value: 'breads', label: 'Pães' },
  { value: 'breakfast', label: 'Café da manhã' },
  { value: 'savories', label: 'Salgados' },
]

function BreadsAndSavories() {
  const [activeFilter, setActiveFilter] = useState('all')
  const visibleItems =
    activeFilter === 'all'
      ? breadSavoryGallery
      : breadSavoryGallery.filter((item) => item.category === activeFilter)

  return (
    <section className="savory-showcase section" id="paes-salgados">
      <div className="savory-showcase__pattern" aria-hidden="true" />
      <div className="container savory-showcase__inner">
        <Reveal>
          <div className="savory-showcase__header">
            <SectionHeading
              eyebrow="Pães & salgados"
              title="O forno também fala salgado."
              description="Pães, opções para o café da manhã e salgados preparados para deixar a vitrine ainda mais completa."
            />
            <div className="savory-showcase__counter" aria-label="Treze fotos de pães e salgados">
              <strong>13</strong>
              <span>registros<br />da nossa produção</span>
            </div>
          </div>
        </Reveal>

        <div className="savory-filters" role="group" aria-label="Filtrar fotos por categoria">
          {filters.map((filter) => (
            <button
              key={filter.value}
              type="button"
              className={activeFilter === filter.value ? 'is-active' : ''}
              aria-pressed={activeFilter === filter.value}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="savory-grid" aria-live="polite">
          {visibleItems.map((item) => (
            <article key={item.title} className={`savory-card savory-card--${item.size}`}>
              <img src={item.image} alt={item.alt} loading="lazy" />
              <div className="savory-card__shade" aria-hidden="true" />
              <div className="savory-card__content">
                <span>{item.categoryLabel}</span>
                <h3>{item.title}</h3>
              </div>
            </article>
          ))}
        </div>

        <div className="savory-showcase__footer">
          <p>A disponibilidade pode variar ao longo do dia.</p>
          <a className="button button--savory" href={contact.whatsappHref} target="_blank" rel="noreferrer">
            <MessageCircle size={19} aria-hidden="true" />
            Perguntar o que tem hoje
          </a>
        </div>
      </div>
    </section>
  )
}

export default BreadsAndSavories
