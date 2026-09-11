import SectionHeading from '../components/SectionHeading'
import { galleryItems } from '../data/siteData'

function Gallery() {
  return (
    <section className="section gallery-section" id="aplicacoes">
      <div className="container">
        <div data-reveal>
          <SectionHeading
            eyebrow="Acessibilidade aplicada"
            title="Soluções que orientam, conectam e dão autonomia."
            text="Projetos, sinalização e adequações precisam formar um sistema legível e contínuo — não elementos isolados."
          />
        </div>

        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <figure
              className={`gallery-card ${item.className ?? ''}`}
              key={`${item.label}-${index}`}
              data-reveal
              style={{ '--delay': `${(index % 4) * 60}ms` }}
            >
              {item.images ? (
                <div className="gallery-card__images">
                  {item.images.map((image) => (
                    <img key={image.src} src={image.src} alt={image.alt} loading="lazy" />
                  ))}
                </div>
              ) : (
                <img src={item.image} alt={item.alt} loading="lazy" />
              )}
              <figcaption><span>{String(index + 1).padStart(2, '0')}</span>{item.label}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
