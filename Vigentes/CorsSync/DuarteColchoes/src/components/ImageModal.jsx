import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'

export default function ImageModal({ image, onClose }) {
  const closeRef = useRef(null)

  useEffect(() => {
    if (!image) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    function handleKeyDown(event) {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [image, onClose])

  if (!image) return null

  return (
    <div className="image-modal" role="dialog" aria-modal="true" aria-label={image.label} onMouseDown={onClose}>
      <div className="image-modal__panel" onMouseDown={(event) => event.stopPropagation()}>
        <button ref={closeRef} className="image-modal__close" type="button" onClick={onClose} aria-label="Fechar imagem">
          <X size={24} />
        </button>
        <img src={image.src} alt={image.alt} />
        <p>{image.label}</p>
      </div>
    </div>
  )
}

