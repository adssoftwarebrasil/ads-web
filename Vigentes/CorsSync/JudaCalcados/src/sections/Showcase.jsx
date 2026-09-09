import { useMemo, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import ProductCard from '../components/ProductCard.jsx'
import { categories, products } from '../data/products.js'

export default function Showcase() {
  const [activeCategory, setActiveCategory] = useState('Todos')

  const filteredProducts = useMemo(
    () => products.filter((product) => activeCategory === 'Todos' || product.category === activeCategory),
    [activeCategory],
  )

  const scrollShowcase = (direction) => {
    const track = document.querySelector('.showcase__grid')
    if (track) track.scrollBy({ left: direction * Math.min(track.clientWidth * 0.82, 520), behavior: 'smooth' })
  }

  return (
    <section className="section showcase" id="novidades">
      <div className="container">
        <div className="showcase__top" data-reveal>
          <div>
            <p className="eyebrow">Vitrine Judá</p>
            <h2>Modelos em destaque</h2>
          </div>
          <div className="showcase__arrows" aria-label="Navegar pela vitrine">
            <button type="button" onClick={() => scrollShowcase(-1)} aria-label="Ver modelos anteriores">
              <ChevronLeft aria-hidden="true" />
            </button>
            <button type="button" onClick={() => scrollShowcase(1)} aria-label="Ver próximos modelos">
              <ChevronRight aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="filters" aria-label="Filtrar modelos por categoria" data-reveal>
          {categories.map((category) => (
            <button
              type="button"
              key={category}
              className={activeCategory === category ? 'is-active' : ''}
              aria-pressed={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="showcase__grid" aria-live="polite">
          {filteredProducts.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>

        <p className="showcase__note">
          Consulte preços, numerações e disponibilidade pelo WhatsApp. Nossa equipe ajuda você a encontrar o modelo ideal.
        </p>
      </div>
    </section>
  )
}
