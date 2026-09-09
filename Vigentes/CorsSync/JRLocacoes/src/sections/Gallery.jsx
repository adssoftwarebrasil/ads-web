import { useEffect, useState } from 'react'
import { ChevronRight, Expand, Play, X } from 'lucide-react'
import SectionTitle from '../components/SectionTitle.jsx'
import truckWork from '../assets/caminhao-munck-obra.jpeg'
import containerStorage from '../assets/container-almoxarifado.jpeg'
import containerLift from '../assets/icamento-container.jpeg'
import slabFront from '../assets/icamento-laje-frontal.jpeg'
import slabWide from '../assets/icamento-laje-horizontal.jpeg'
import slabVertical from '../assets/icamento-laje-vertical.jpeg'
import reservoir from '../assets/icamento-reservatorio.jpeg'
import silo from '../assets/icamento-silo.jpeg'
import tankFront from '../assets/icamento-tanque-frontal.jpeg'
import tankVertical from '../assets/icamento-tanque-vertical.jpeg'
import containerWide from '../assets/operacao-container-horizontal.jpeg'
import containerVertical from '../assets/operacao-container-vertical.jpeg'
import industry from '../assets/operacao-industrial.jpeg'
import transportWide from '../assets/transporte-tanque-horizontal.jpeg'
import videoOne from '../assets/operacao-munck-01.mp4'
import videoTwo from '../assets/operacao-munck-02.mp4'

const galleryItems = [
  { src: transportWide, alt: 'Operação de transporte e içamento de estrutura industrial', wide: true },
  { src: slabVertical, alt: 'Munck posicionando laje em uma construção' },
  { src: containerWide, alt: 'Caminhão munck em operação com contêiner', wide: true },
  { src: tankFront, alt: 'Içamento de tanque de grande porte' },
  { src: containerStorage, alt: 'Contêiner para uso como almoxarifado' },
  { src: industry, alt: 'Caminhão munck em ambiente industrial' },
  { src: slabWide, alt: 'Posicionamento de laje com caminhão munck', wide: true },
  { src: silo, alt: 'Içamento de silo vertical com braço hidráulico' },
  { src: containerLift, alt: 'Contêiner suspenso durante operação de movimentação' },
  { src: reservoir, alt: 'Caminhão munck posicionando reservatório' },
  { src: truckWork, alt: 'Caminhão munck estacionado em frente de obra', wide: true },
  { src: tankVertical, alt: 'Movimentação de tanque em área externa' },
  { src: containerVertical, alt: 'Operação de entrega e posicionamento de contêiner' },
  { src: slabFront, alt: 'Munck içando laje para pavimento superior' },
]

function Gallery() {
  const [expanded, setExpanded] = useState(false)
  const [activeImage, setActiveImage] = useState(null)

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setActiveImage(null)
    }

    document.addEventListener('keydown', closeOnEscape)
    document.body.classList.toggle('lightbox-open', Boolean(activeImage))
    return () => {
      document.removeEventListener('keydown', closeOnEscape)
      document.body.classList.remove('lightbox-open')
    }
  }, [activeImage])

  return (
    <section className="gallery section" aria-labelledby="gallery-title">
      <div className="container">
        <div className="gallery-heading-row">
          <SectionTitle
            eyebrow="Portfólio real"
            title="Trabalho em campo, sem atalhos"
            text="Registros de operações realizadas pela JR Locações em obras, áreas industriais e diferentes locais de atendimento."
          />
          <span className="gallery-index">01—14</span>
        </div>

        <div className="gallery-grid reveal" id="galeria-operacoes">
          {galleryItems.map((item, index) => (
            <button
              className={`gallery-item ${item.wide ? 'gallery-item--wide' : ''}`}
              type="button"
              key={`${item.src}-${index}`}
              onClick={() => setActiveImage(item)}
              aria-label={`Ampliar foto: ${item.alt}`}
              hidden={!expanded && index > 5}
            >
              <img src={item.src} alt={item.alt} loading="lazy" />
              <span className="gallery-item-number">{String(index + 1).padStart(2, '0')}</span>
              <span className="gallery-item-action">
                <Expand size={18} aria-hidden="true" />
              </span>
            </button>
          ))}
        </div>

        <button
          className="gallery-more"
          type="button"
          aria-expanded={expanded}
          aria-controls="galeria-operacoes"
          onClick={() => setExpanded((current) => !current)}
        >
          {expanded ? 'Mostrar menos' : 'Ver mais operações'}
          <ChevronRight size={20} aria-hidden="true" />
        </button>

        <div className="video-block reveal">
          <div className="video-block-copy">
            <span className="eyebrow">Em movimento</span>
            <h3>Veja a operação acontecendo</h3>
            <p>Registros reais da equipe e dos equipamentos em serviço.</p>
            <span className="video-label">
              <Play size={16} fill="currentColor" aria-hidden="true" />
              02 vídeos
            </span>
          </div>
          <div className="video-card">
            <video controls playsInline preload="metadata" poster={slabWide} aria-label="Vídeo de operação da JR Locações">
              <source src={videoOne} type="video/mp4" />
              Seu navegador não suporta vídeo HTML5.
            </video>
          </div>
          <div className="video-card">
            <video controls playsInline preload="metadata" poster={containerWide} aria-label="Vídeo de operação com caminhão munck">
              <source src={videoTwo} type="video/mp4" />
              Seu navegador não suporta vídeo HTML5.
            </video>
          </div>
        </div>
      </div>

      {activeImage ? (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Visualização ampliada da operação">
          <button className="lightbox-backdrop" type="button" onClick={() => setActiveImage(null)} aria-label="Fechar imagem" />
          <figure className="lightbox-content">
            <img src={activeImage.src} alt={activeImage.alt} />
            <figcaption>{activeImage.alt}</figcaption>
            <button className="lightbox-close" type="button" onClick={() => setActiveImage(null)} aria-label="Fechar imagem ampliada" autoFocus>
              <X aria-hidden="true" />
            </button>
          </figure>
        </div>
      ) : null}
    </section>
  )
}

export default Gallery
