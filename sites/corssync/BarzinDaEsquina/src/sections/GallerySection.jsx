import { useRef } from 'react'
import { ArrowLeft, ArrowRight, Instagram } from 'lucide-react'
import { contact, galleryPhotos } from '../data/siteData.js'

function GallerySection() {
  const galleryRef = useRef(null)

  const scrollGallery = (direction) => {
    galleryRef.current?.scrollBy({ left: direction * 420, behavior: 'smooth' })
  }

  return (
    <section className="gallery-section section" id="galeria">
      <div className="container gallery-section__heading" data-reveal>
        <div>
          <p className="eyebrow"><span /> Por dentro da esquina</p>
          <h2>O clima você vê.<br /><em>O resto, só chegando.</em></h2>
        </div>
        <div className="gallery-controls">
          <button type="button" onClick={() => scrollGallery(-1)} aria-label="Fotos anteriores">
            <ArrowLeft aria-hidden="true" />
          </button>
          <button type="button" onClick={() => scrollGallery(1)} aria-label="Próximas fotos">
            <ArrowRight aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="gallery-track" ref={galleryRef} data-reveal>
        {galleryPhotos.map((photo, index) => (
          <figure className={`gallery-card gallery-card--${(index % 3) + 1}`} key={photo.image}>
            <img src={photo.image} alt={photo.alt} loading="lazy" />
            <figcaption><span>{String(index + 1).padStart(2, '0')}</span>{photo.caption}</figcaption>
          </figure>
        ))}
      </div>

      <div className="container gallery-section__footer" data-reveal>
        <p>Tem comida boa, futebol na parede, copo gelado e sempre cabe mais um.</p>
        <a className="button button--outline-dark" href={contact.instagramUrl} target="_blank" rel="noreferrer">
          <Instagram size={19} aria-hidden="true" /> Acompanhar no Instagram
        </a>
      </div>
    </section>
  )
}

export default GallerySection
