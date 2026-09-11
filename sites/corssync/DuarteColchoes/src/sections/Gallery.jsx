import { useState } from 'react'
import { Expand } from 'lucide-react'
import ImageModal from '../components/ImageModal'
import Reveal from '../components/Reveal'
import SectionIntro from '../components/SectionIntro'
import { galleryImages } from '../data/siteData'

const galleryFilters = ['Todas', 'Quartos', 'Sala', 'Produtos']

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [activeFilter, setActiveFilter] = useState('Todas')
  const filteredImages = activeFilter === 'Todas'
    ? galleryImages
    : galleryImages.filter((image) => image.category === activeFilter)

  return (
    <section className="section gallery-section" id="inspiracoes">
      <div className="container">
        <Reveal>
          <SectionIntro
            eyebrow="Inspirações"
            title="Ambientes que convidam você a ficar."
            copy="Texturas, proporções e combinações para imaginar o conforto da Duarte dentro da sua casa."
            align="center"
          />
        </Reveal>
        <Reveal className="gallery-toolbar" delay={80}>
          <div className="gallery-toolbar__filters" aria-label="Filtrar inspirações">
            {galleryFilters.map((filter) => (
              <button
                type="button"
                key={filter}
                className={activeFilter === filter ? 'is-active' : ''}
                aria-pressed={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
          <span className="gallery-toolbar__count">
            {String(filteredImages.length).padStart(2, '0')} imagens
          </span>
        </Reveal>
        <div className="gallery" key={activeFilter}>
          {filteredImages.map((image, index) => (
            <Reveal className="gallery__item" key={image.src} delay={(index % 3) * 60}>
              <button type="button" onClick={() => setSelectedImage(image)} aria-label={`Ampliar: ${image.label}`}>
                <img
                  className={image.fit === 'contain' ? 'gallery__image--contain' : ''}
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                />
                <span className="gallery__shade" aria-hidden="true" />
                <span className="gallery__caption">
                  <small>{image.category}</small>
                  <span>{image.label}</span>
                </span>
                <span className="gallery__expand" aria-hidden="true"><Expand size={19} /></span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
      <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />
    </section>
  )
}
