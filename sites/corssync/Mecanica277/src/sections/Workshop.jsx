import { useState } from 'react'
import { ArrowUpRight, Images } from 'lucide-react'
import Lightbox from '../components/Lightbox'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { gallery } from '../data/siteData'

function Workshop() {
  const [expanded, setExpanded] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(null)
  const visibleItems = expanded ? gallery : gallery.slice(0, 7)

  return (
    <section className="workshop section" id="estrutura">
      <div className="container">
        <div className="workshop__heading">
          <Reveal>
            <SectionHeading
              eyebrow="Estrutura real"
              title={<>Espaço para trabalhar bem. <em>Cuidado para entregar melhor.</em></>}
              description="Boxes amplos, equipamentos de diagnóstico e uma equipe preparada para atender diferentes tipos de veículo."
            />
          </Reveal>
          <Reveal className="workshop__count" delay={90}>
            <Images aria-hidden="true" /><strong>18</strong><span>registros reais<br />da Mecânica 277</span>
          </Reveal>
        </div>

        <div className={`gallery ${expanded ? 'gallery--expanded' : ''}`}>
          {visibleItems.map((item, index) => (
            <button
              className={`gallery__item gallery__item--${(index % 7) + 1}`}
              type="button"
              key={item.src}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Ampliar foto: ${item.label}`}
            >
              <img src={item.src} alt={item.alt} loading="lazy" />
              <span><b>{item.label}</b><ArrowUpRight aria-hidden="true" /></span>
            </button>
          ))}
        </div>

        {!expanded && (
          <button className="button button--dark workshop__more" type="button" onClick={() => setExpanded(true)}>
            Ver mais fotos <Images aria-hidden="true" />
          </button>
        )}
      </div>
      {currentIndex !== null && (
        <Lightbox items={gallery} currentIndex={currentIndex} onClose={() => setCurrentIndex(null)} onChange={setCurrentIndex} />
      )}
    </section>
  )
}

export default Workshop
