import { useEffect } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

function Lightbox({ items, currentIndex, onClose, onChange }) {
  const item = items[currentIndex]

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowRight') onChange((currentIndex + 1) % items.length)
      if (event.key === 'ArrowLeft') onChange((currentIndex - 1 + items.length) % items.length)
    }
    document.body.classList.add('lightbox-open')
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.classList.remove('lightbox-open')
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [currentIndex, items.length, onChange, onClose])

  if (!item) return null

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label="Galeria ampliada" onMouseDown={onClose}>
      <button className="lightbox__close" type="button" onClick={onClose} aria-label="Fechar galeria"><X /></button>
      <button
        className="lightbox__nav lightbox__nav--prev"
        type="button"
        onClick={(event) => { event.stopPropagation(); onChange((currentIndex - 1 + items.length) % items.length) }}
        aria-label="Foto anterior"
      ><ChevronLeft /></button>
      <figure className="lightbox__figure" onMouseDown={(event) => event.stopPropagation()}>
        <img src={item.src} alt={item.alt} />
        <figcaption>{item.label}<span>{currentIndex + 1} / {items.length}</span></figcaption>
      </figure>
      <button
        className="lightbox__nav lightbox__nav--next"
        type="button"
        onClick={(event) => { event.stopPropagation(); onChange((currentIndex + 1) % items.length) }}
        aria-label="Próxima foto"
      ><ChevronRight /></button>
    </div>
  )
}

export default Lightbox
