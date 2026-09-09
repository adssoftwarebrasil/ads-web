import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Images, X } from 'lucide-react'
import { galleryImages } from '../data/storeData.js'

const previewIndexes = [0, 1, 3, 4, 6, 7, 33, 36]

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null)
  const closeButtonRef = useRef(null)

  useEffect(() => {
    if (activeIndex === null) return undefined

    document.body.classList.add('lightbox-open')
    closeButtonRef.current?.focus()

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setActiveIndex(null)
      if (event.key === 'ArrowRight') {
        setActiveIndex((current) => (current + 1) % galleryImages.length)
      }
      if (event.key === 'ArrowLeft') {
        setActiveIndex((current) => (current - 1 + galleryImages.length) % galleryImages.length)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.classList.remove('lightbox-open')
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeIndex])

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + galleryImages.length) % galleryImages.length)
  }

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % galleryImages.length)
  }

  return (
    <section className="section gallery" id="galeria">
      <div className="container">
        <div className="section-heading section-heading--split reveal">
          <div>
            <span className="eyebrow eyebrow--light">Por dentro da Fera</span>
            <h2>Variedade que se vê.</h2>
          </div>
          <div className="gallery__intro">
            <p>Conheça um pouco da loja e dos produtos que esperam por você.</p>
            <button className="text-button" type="button" onClick={() => setActiveIndex(0)}>
              <Images size={19} aria-hidden="true" />
              Ver as {galleryImages.length} fotos
            </button>
          </div>
        </div>

        <div className="gallery-grid reveal">
          {previewIndexes.map((imageIndex) => {
            const image = galleryImages[imageIndex]
            return (
              <button
                key={image.src}
                className="gallery-grid__item"
                type="button"
                onClick={() => setActiveIndex(imageIndex)}
                aria-label={`Ampliar: ${image.alt}`}
              >
                <img src={image.src} alt={image.alt} loading="lazy" />
                <span aria-hidden="true">Ampliar +</span>
              </button>
            )
          })}
        </div>
      </div>

      {activeIndex !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Galeria de fotos da loja"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setActiveIndex(null)
          }}
        >
          <button
            ref={closeButtonRef}
            className="lightbox__close"
            type="button"
            aria-label="Fechar galeria"
            onClick={() => setActiveIndex(null)}
          >
            <X aria-hidden="true" />
          </button>
          <button className="lightbox__nav lightbox__nav--prev" type="button" aria-label="Foto anterior" onClick={showPrevious}>
            <ChevronLeft aria-hidden="true" />
          </button>
          <figure>
            <img src={galleryImages[activeIndex].src} alt={galleryImages[activeIndex].alt} />
            <figcaption>
              <span>{galleryImages[activeIndex].alt}</span>
              <strong>
                {activeIndex + 1} / {galleryImages.length}
              </strong>
            </figcaption>
          </figure>
          <button className="lightbox__nav lightbox__nav--next" type="button" aria-label="Próxima foto" onClick={showNext}>
            <ChevronRight aria-hidden="true" />
          </button>
        </div>
      )}
    </section>
  )
}
