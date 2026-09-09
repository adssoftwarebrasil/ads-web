import { ArrowDownRight } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { foodGallery } from '../data/siteData.js'

function FoodShowcase() {
  return (
    <section className="food-section" id="sabores">
      <div className="container">
        <div className="food-intro">
          <Reveal>
            <SectionHeading
              eyebrow="Comida de verdade"
              title="O almoço como ele deve ser."
              text="Preparações caseiras, saladas frescas e variedade para você montar um prato do seu jeito."
              light
            />
          </Reveal>
          <Reveal className="food-intro-note" delay={80}>
            <ArrowDownRight aria-hidden="true" />
            <p>
              <strong>Chegue com fome.</strong>
              A gente cuida do resto.
            </p>
          </Reveal>
        </div>

        <div className="food-grid">
          {foodGallery.map((item, index) => (
            <Reveal key={item.src} className={item.className || ''} delay={index * 55}>
              <figure className="food-card">
                <img src={item.src} alt={item.alt} loading={index === 0 ? 'eager' : 'lazy'} />
                <figcaption>{item.label}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FoodShowcase
