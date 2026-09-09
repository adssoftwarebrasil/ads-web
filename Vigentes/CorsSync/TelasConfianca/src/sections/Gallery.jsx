import { useEffect, useState } from 'react'
import { Maximize2, X } from 'lucide-react'
import fabricaEntrada from '../assets/fabrica-entrada.jpeg'
import empilhadeira from '../assets/empilhadeira.jpeg'
import fabricaCorredor from '../assets/fabrica-corredor.jpeg'
import gradil from '../assets/gradil-exposicao.jpeg'
import fabricaAmpla from '../assets/fabrica-ampla.jpeg'
import estoque from '../assets/estoque-telas.jpeg'

const gallery = [
  { src: fabricaEntrada, alt: 'Área interna da Telas Confiança com estoque e empilhadeira', className: 'gallery__item--tall' },
  { src: fabricaCorredor, alt: 'Corredor da fábrica com rolos de telas galvanizadas', className: 'gallery__item--wide' },
  { src: gradil, alt: 'Gradis em exposição na Telas Confiança', className: '' },
  { src: empilhadeira, alt: 'Empilhadeira e estoque de arames na fábrica', className: '' },
  { src: fabricaAmpla, alt: 'Vista ampla do interior da fábrica em Maringá', className: 'gallery__item--wide' },
  { src: estoque, alt: 'Estoque de telas e área de atendimento da empresa', className: '' },
]

export function Gallery() {
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    if (!selected) return undefined
    const close = (event) => event.key === 'Escape' && setSelected(null)
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [selected])

  return (
    <section className="gallery section" id="galeria">
      <div className="container">
        <div className="section-heading section-heading--split">
          <div>
            <p className="eyebrow eyebrow--blue"><span /> Por dentro da Confiança</p>
            <h2>Estrutura pronta para atender sua necessidade.</h2>
          </div>
          <p>Conheça parte da fábrica, do estoque e da variedade que fazem parte do dia a dia da empresa.</p>
        </div>

        <div className="gallery__grid">
          {gallery.map((image, index) => (
            <button
              className={`gallery__item ${image.className}`}
              type="button"
              key={image.src}
              onClick={() => setSelected(index)}
              aria-label={`Ampliar foto: ${image.alt}`}
            >
              <img src={image.src} alt={image.alt} loading="lazy" />
              <span><Maximize2 aria-hidden="true" /> Ampliar</span>
            </button>
          ))}
        </div>
      </div>

      {selected !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Foto ampliada" onClick={() => setSelected(null)}>
          <button type="button" aria-label="Fechar foto ampliada" onClick={() => setSelected(null)}><X aria-hidden="true" /></button>
          <img src={gallery[selected].src} alt={gallery[selected].alt} onClick={(event) => event.stopPropagation()} />
        </div>
      )}
    </section>
  )
}

