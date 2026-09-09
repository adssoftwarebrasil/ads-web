import { ArrowUpRight } from 'lucide-react'
import { categoryCards } from '../data/siteData'
import { SectionHeading } from '../components/SectionHeading'

export function Categories() {
  return (
    <section className="categories section" id="produtos">
      <div className="container">
        <div className="categories-heading-row">
          <SectionHeading
            eyebrow="Tudo o que você precisa por perto"
            title="Uma farmácia para cada momento da família."
            description="Encontre opções para sua rotina, do cuidado diário aos itens essenciais para todas as fases da vida."
          />
          <p className="categories-side-note" data-reveal>
            Fale com a nossa equipe para consultar marcas, apresentações e disponibilidade.
          </p>
        </div>

        <div className="category-grid">
          {categoryCards.map((card) => (
            <a
              className={'category-card ' + card.className}
              href="#vitrine"
              key={card.title}
              style={{ '--card-image': 'url(' + card.image + ')' }}
              data-reveal
            >
              <img src={card.image} alt="" loading="lazy" aria-hidden="true" />
              <span className="category-card__scrim" aria-hidden="true" />
              <span className="category-card__content">
                <small>Consulte opções</small>
                <strong>{card.title}</strong>
                <span>{card.description}</span>
              </span>
              <span className="category-card__arrow" aria-hidden="true">
                <ArrowUpRight size={21} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
