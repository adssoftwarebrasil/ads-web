import { useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export default function MediaDialog({ items, activeIndex, onClose, onChange }) {
  const dialogRef = useRef(null);
  const closeRef = useRef(null);
  const isOpen = activeIndex !== null;
  const item = isOpen ? items[activeIndex] : null;

  useEffect(() => {
    if (!isOpen) return;
    const dialog = dialogRef.current;
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialog.showModal();
    closeRef.current?.focus();
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, [isOpen]);

  return (
    <dialog
      ref={dialogRef}
      className="media-dialog"
      aria-labelledby="media-title"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      {item && (
        <div className="media-dialog-inner">
          <div className="dialog-header">
            <h2 id="media-title">{item.title}</h2>
            <button
              ref={closeRef}
              onClick={onClose}
              className="icon-button"
              aria-label="Fechar galeria"
            >
              <X aria-hidden="true" />
            </button>
          </div>
          <div className="dialog-content">
            {item.type === 'video' ? (
              <video
                key={item.src}
                src={item.src}
                poster={item.poster}
                controls
                playsInline
                preload="metadata"
                aria-label={item.label}
              >
                Seu navegador não suporta este vídeo.{' '}
                <a href={item.src}>Abrir vídeo</a>.
              </video>
            ) : (
              <img src={item.src} alt={item.label} />
            )}
          </div>
          <div className="dialog-footer">
            <button
              onClick={() =>
                onChange((activeIndex - 1 + items.length) % items.length)
              }
              className="icon-button"
              aria-label="Mídia anterior"
            >
              <ChevronLeft aria-hidden="true" />
            </button>
            <span>
              {activeIndex + 1} / {items.length}
            </span>
            <button
              onClick={() => onChange((activeIndex + 1) % items.length)}
              className="icon-button"
              aria-label="Próxima mídia"
            >
              <ChevronRight aria-hidden="true" />
            </button>
          </div>
        </div>
      )}
    </dialog>
  );
}
