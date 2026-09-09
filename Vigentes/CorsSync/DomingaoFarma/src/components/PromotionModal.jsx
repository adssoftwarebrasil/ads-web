import { useEffect, useRef } from 'react'
import { ArrowLeft, ArrowRight, MessageCircle, X } from 'lucide-react'
import { contact } from '../data/siteData'

export function PromotionModal({ item, onClose, onNext, onPrevious }) {
  const closeButtonRef = useRef(null)

  useEffect(() => {
    if (!item) return undefined

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowRight') onNext()
      if (event.key === 'ArrowLeft') onPrevious()
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', closeOnEscape)
    closeButtonRef.current?.focus()

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [item, onClose, onNext, onPrevious])

  if (!item) return null

  return (
    <div className="promotion-modal" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <div className="promotion-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="promotion-modal-title">
        <button ref={closeButtonRef} className="promotion-modal__close" type="button" onClick={onClose} aria-label="Fechar imagem">
          <X size={24} aria-hidden="true" />
        </button>

        <div className="promotion-modal__image-shell">
          <img src={item.image} alt={'Material sobre ' + item.title} />
        </div>

        <div className="promotion-modal__content">
          <div>
            <span className="eyebrow">Consulte a disponibilidade</span>
            <h3 id="promotion-modal-title">{item.title}</h3>
            <p>Nossa equipe ajuda você a encontrar a opção certa para a sua necessidade.</p>
          </div>
          <a className="button button--primary" href={contact.whatsappUrl} target="_blank" rel="noreferrer">
            <MessageCircle size={19} aria-hidden="true" />
            Consultar no WhatsApp
          </a>
        </div>

        <button className="promotion-modal__nav promotion-modal__nav--previous" type="button" onClick={onPrevious} aria-label="Ver item anterior">
          <ArrowLeft size={22} aria-hidden="true" />
        </button>
        <button className="promotion-modal__nav promotion-modal__nav--next" type="button" onClick={onNext} aria-label="Ver próximo item">
          <ArrowRight size={22} aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}
