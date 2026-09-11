import { useEffect, useMemo, useState } from 'react'
import Icon from '../components/Icon.jsx'
import facade from '../assets/hotel/facade-night.jpg'
import roomTriple from '../assets/hotel/room-triple.jpg'
import breakfast from '../assets/hotel/breakfast-top.jpg'
import reception from '../assets/hotel/reception-wide.jpg'
import courtyard from '../assets/hotel/courtyard.jpg'
import roomOlive from '../assets/hotel/room-olive-wide.jpg'
import flowers from '../assets/hotel/garden-flowers.jpg'
import bathroom from '../assets/hotel/bathroom.jpg'
import roomNavy from '../assets/hotel/room-navy.jpg'

const images = [
  { src: facade, alt: 'Fachada do Goiatuba Hotel ao anoitecer', category: 'Exterior' },
  { src: roomTriple, alt: 'Quarto com cama de casal e cama de solteiro', category: 'Acomodações' },
  { src: breakfast, alt: 'Café da manhã visto de cima', category: 'Ambientes' },
  { src: reception, alt: 'Recepção do Goiatuba Hotel', category: 'Ambientes' },
  { src: courtyard, alt: 'Área interna arborizada do hotel', category: 'Exterior' },
  { src: roomOlive, alt: 'Quarto com duas camas e enxoval verde', category: 'Acomodações' },
  { src: flowers, alt: 'Jardim florido na área externa', category: 'Exterior' },
  { src: bathroom, alt: 'Banheiro privativo de uma acomodação', category: 'Acomodações' },
  { src: roomNavy, alt: 'Quarto com três camas de solteiro', category: 'Acomodações' },
]

const filters = ['Todos', 'Acomodações', 'Ambientes', 'Exterior']

function Gallery() {
  const [filter, setFilter] = useState('Todos')
  const [selected, setSelected] = useState(null)
  const visibleImages = useMemo(() => filter === 'Todos' ? images : images.filter((image) => image.category === filter), [filter])

  useEffect(() => {
    if (!selected) return undefined
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setSelected(null)
    }
    document.body.classList.add('lightbox-open')
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.classList.remove('lightbox-open')
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [selected])

  return (
    <section className="section gallery" id="galeria">
      <div className="container">
        <div className="section-heading section-heading--split" data-reveal>
          <div><p className="eyebrow"><span /> Veja de perto</p><h2>Um hotel com histórias em cada canto.</h2></div>
          <p>Conheça alguns dos ambientes que fazem parte da experiência no Goiatuba Hotel.</p>
        </div>
        <div className="gallery__filters" role="group" aria-label="Filtrar galeria" data-reveal>
          {filters.map((item) => (
            <button className={filter === item ? 'is-active' : ''} type="button" key={item} onClick={() => setFilter(item)}>{item}</button>
          ))}
        </div>
        <div className="gallery__grid">
          {visibleImages.map((image, index) => (
            <button className="gallery__item" type="button" key={image.src} onClick={() => setSelected(image)} aria-label={`Ampliar: ${image.alt}`} data-reveal style={{ '--delay': `${(index % 4) * 60}ms` }}>
              <img src={image.src} alt={image.alt} loading="lazy" />
              <span><Icon name="external" size={19} /> Ver foto</span>
            </button>
          ))}
        </div>
      </div>

      {selected && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={selected.alt} onClick={() => setSelected(null)}>
          <button type="button" className="lightbox__close" onClick={() => setSelected(null)} aria-label="Fechar foto"><Icon name="close" /></button>
          <img src={selected.src} alt={selected.alt} onClick={(event) => event.stopPropagation()} />
          <p>{selected.alt}</p>
        </div>
      )}
    </section>
  )
}

export default Gallery
