import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export function GalleryLightbox({ items, activeIndex, onClose, onChange }) {
  const closeButtonRef = useRef(null);
  const item = items[activeIndex];

  useEffect(() => {
    if (!item) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") {
        onChange((activeIndex - 1 + items.length) % items.length);
      }
      if (event.key === "ArrowRight") {
        onChange((activeIndex + 1) % items.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, item, items.length, onChange, onClose]);

  if (!item) return null;

  const previous = () =>
    onChange((activeIndex - 1 + items.length) % items.length);
  const next = () => onChange((activeIndex + 1) % items.length);

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`Visualização: ${item.title}`}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="lightbox__toolbar">
        <span>
          {String(activeIndex + 1).padStart(2, "0")} /{" "}
          {String(items.length).padStart(2, "0")}
        </span>
        <button
          ref={closeButtonRef}
          className="icon-button lightbox__close"
          type="button"
          onClick={onClose}
          aria-label="Fechar visualização"
        >
          <X size={26} />
        </button>
      </div>

      <button
        className="lightbox__nav lightbox__nav--previous"
        type="button"
        onClick={previous}
        aria-label="Item anterior"
      >
        <ChevronLeft size={30} />
      </button>

      <div className="lightbox__content">
        {item.type === "video" ? (
          <video
            key={item.src}
            src={item.src}
            poster={item.poster}
            controls
            playsInline
          >
            Seu navegador não oferece suporte a vídeo HTML5.
          </video>
        ) : (
          <img src={item.src} alt={item.alt} />
        )}
        <div className="lightbox__caption">
          <span>{item.type === "video" ? "Vídeo real" : "Projeto real"}</span>
          <h3>{item.title}</h3>
        </div>
      </div>

      <button
        className="lightbox__nav lightbox__nav--next"
        type="button"
        onClick={next}
        aria-label="Próximo item"
      >
        <ChevronRight size={30} />
      </button>
    </div>
  );
}
