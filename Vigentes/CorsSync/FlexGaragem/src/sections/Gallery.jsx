import { useEffect, useState } from 'react'
import { Expand, Play, X } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import facadeImage from '../assets/media/fachada-flex-garagem.webp'
import motorImage from '../assets/media/motor-detalhado.webp'
import interiorImage from '../assets/media/interior-higienizado.webp'
import seatsImage from '../assets/media/bancos-higienizacao.webp'
import undersideImage from '../assets/media/detalhamento-inferior.webp'
import protectionImage from '../assets/media/pelicula-ultravision.webp'
import process01 from '../assets/media/processo-01.mp4'
import process02 from '../assets/media/processo-02.mp4'
import process03 from '../assets/media/processo-03.mp4'
import process04 from '../assets/media/processo-04.mp4'
import process05 from '../assets/media/processo-05.mp4'
import process06 from '../assets/media/processo-06.mp4'

const photos = [
  { src: facadeImage, alt: 'Fachada da Flex Garagem', caption: 'Nossa casa', location: 'Barra Funda' },
  { src: motorImage, alt: 'Motor após detalhamento técnico', caption: 'Detalhamento técnico', location: 'Acabamento' },
  { src: interiorImage, alt: 'Interior de veículo após higienização', caption: 'Interior renovado', location: 'Higienização' },
  { src: seatsImage, alt: 'Bancos durante processo de higienização', caption: 'Cuidado profundo', location: 'Tecidos' },
  { src: undersideImage, alt: 'Parte inferior de veículo durante detalhamento', caption: 'Atenção por inteiro', location: 'Precisão' },
  { src: protectionImage, alt: 'Materiais profissionais para cuidado automotivo', caption: 'Tecnologia profissional', location: 'Proteção' },
]

const videos = [
  { src: process01, title: 'Processo Flex 01' },
  { src: process02, title: 'Processo Flex 02' },
  { src: process03, title: 'Processo Flex 03' },
  { src: process04, title: 'Processo Flex 04' },
  { src: process05, title: 'Processo Flex 05' },
  { src: process06, title: 'Processo Flex 06' },
]

function Gallery() {
  const [lightboxPhoto, setLightboxPhoto] = useState(null)

  useEffect(() => {
    if (!lightboxPhoto) return undefined

    document.body.classList.add('lightbox-open')
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setLightboxPhoto(null)
    }
    window.addEventListener('keydown', closeOnEscape)

    return () => {
      document.body.classList.remove('lightbox-open')
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [lightboxPhoto])

  return (
    <section className="gallery section" id="resultados">
      <div className="container">
        <Reveal className="section-intro section-intro--split">
          <div>
            <p className="eyebrow"><span /> Na prática</p>
            <h2>O padrão aparece nos detalhes.</h2>
          </div>
          <p>
            Um olhar de perto sobre a estrutura, os processos e o cuidado aplicado em cada trabalho.
          </p>
        </Reveal>

        <div className="gallery__photo-grid">
          {photos.map((photo, index) => (
            <Reveal className={`gallery-card gallery-card--${index + 1}`} key={photo.src} delay={(index % 3) * 60}>
              <button type="button" onClick={() => setLightboxPhoto(photo)} aria-label={`Ampliar: ${photo.caption}`}>
                <img src={photo.src} alt={photo.alt} loading="lazy" />
                <span className="gallery-card__shade" />
                <span className="gallery-card__copy">
                  <small>{photo.location}</small>
                  <strong>{photo.caption}</strong>
                </span>
                <span className="gallery-card__expand"><Expand aria-hidden="true" /></span>
              </button>
            </Reveal>
          ))}
        </div>

        <Reveal className="process-film" delay={80}>
          <div className="process-film__intro">
            <span className="process-film__icon"><Play aria-hidden="true" fill="currentColor" /></span>
            <div>
              <p className="eyebrow"><span /> Em movimento</p>
              <h3>Por dentro do cuidado Flex</h3>
            </div>
            <p>Use os controles para acompanhar os registros reais do trabalho.</p>
          </div>
          <div className="process-film__track" aria-label="Vídeos dos processos da Flex Garagem">
            {videos.map((video, index) => (
              <figure className="video-card" key={video.src}>
                <video controls muted playsInline preload="metadata" title={video.title}>
                  <source src={video.src} type="video/mp4" />
                  Seu navegador não suporta reprodução de vídeo.
                </video>
                <figcaption><span>0{index + 1}</span>{video.title}</figcaption>
              </figure>
            ))}
          </div>
        </Reveal>
      </div>

      {lightboxPhoto && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={lightboxPhoto.caption} onMouseDown={() => setLightboxPhoto(null)}>
          <button type="button" onClick={() => setLightboxPhoto(null)} aria-label="Fechar imagem ampliada">
            <X aria-hidden="true" />
          </button>
          <figure onMouseDown={(event) => event.stopPropagation()}>
            <img src={lightboxPhoto.src} alt={lightboxPhoto.alt} />
            <figcaption>{lightboxPhoto.caption}</figcaption>
          </figure>
        </div>
      )}
    </section>
  )
}

export default Gallery
