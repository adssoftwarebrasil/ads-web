import { useEffect, useState } from 'react'
import { Maximize2, X } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { venueGallery } from '../data/siteData.js'

function SpaceGallery() {
  const [activeImage, setActiveImage] = useState(null)

  useEffect(() => {
    if (!activeImage) return undefined

    const previousOverflow = document.body.style.overflow
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setActiveImage(null)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', closeOnEscape)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [activeImage])

  return (
    <section className="space-section" id="espaco">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="Sinta-se à vontade"
            title="Salão amplo para uma pausa tranquila."
            text="Um espaço organizado e acolhedor para você aproveitar o almoço com conforto."
          />
        </Reveal>

        <div className="space-gallery">
          {venueGallery.map((image, index) => (
            <Reveal key={image.src} className={index === 0 ? 'space-card--wide' : ''} delay={index * 90}>
              <button
                className="space-card"
                type="button"
                onClick={() => setActiveImage(image)}
                aria-label={`Ampliar foto: ${image.title}`}
              >
                <img src={image.src} alt={image.alt} loading="lazy" />
                <span className="space-card__label">{image.title}</span>
                <span className="space-card__expand" aria-hidden="true">
                  <Maximize2 size={19} />
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {activeImage && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={activeImage.title}>
          <button className="lightbox__backdrop" type="button" onClick={() => setActiveImage(null)} aria-label="Fechar foto" />
          <figure className="lightbox__content">
            <img src={activeImage.src} alt={activeImage.alt} />
            <figcaption>{activeImage.title}</figcaption>
            <button className="lightbox__close" type="button" onClick={() => setActiveImage(null)} aria-label="Fechar foto ampliada">
              <X aria-hidden="true" />
            </button>
          </figure>
        </div>
      )}
    </section>
  )
}

export default SpaceGallery
