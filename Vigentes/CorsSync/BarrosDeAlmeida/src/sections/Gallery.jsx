import { Camera } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { contact, gallery } from '../data/siteData.js'

function Gallery() {
  return (
    <section className="gallery-section section" id="galeria">
      <div className="container">
        <Reveal>
          <div className="gallery-section__header">
            <SectionHeading
              eyebrow="Direto da vitrine"
              title="Bonito de ver. Melhor ainda de provar."
            />
            <a
              className="instagram-link"
              href={contact.instagramHref}
              target="_blank"
              rel="noreferrer"
            >
              <Camera size={20} aria-hidden="true" />
              {contact.instagramLabel}
            </a>
          </div>
        </Reveal>

        <div className="gallery-grid">
          {gallery.map((image, index) => (
            <Reveal
              key={image.src}
              className={`gallery-card gallery-card--${image.shape} gallery-card--${index + 1}`}
              delay={(index % 3) * 80}
            >
              <img src={image.src} alt={image.alt} loading="lazy" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
