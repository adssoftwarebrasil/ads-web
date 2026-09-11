import { useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

function Lightbox({ images, index, onClose, onChange }) {
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onChange((index - 1 + images.length) % images.length);
      if (event.key === "ArrowRight") onChange((index + 1) % images.length);
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.classList.add("lightbox-open");
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.classList.remove("lightbox-open");
    };
  }, [images.length, index, onChange, onClose]);

  const image = images[index];

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label="Galeria de fotos">
      <button className="lightbox__close" type="button" onClick={onClose} aria-label="Fechar galeria">
        <X />
      </button>
      <button
        className="lightbox__nav lightbox__nav--prev"
        type="button"
        onClick={() => onChange((index - 1 + images.length) % images.length)}
        aria-label="Foto anterior"
      >
        <ChevronLeft />
      </button>
      <figure>
        <img src={image.src} alt={image.alt} />
        <figcaption>
          {image.alt} <span>{String(index + 1).padStart(2, "0")} / {images.length}</span>
        </figcaption>
      </figure>
      <button
        className="lightbox__nav lightbox__nav--next"
        type="button"
        onClick={() => onChange((index + 1) % images.length)}
        aria-label="Próxima foto"
      >
        <ChevronRight />
      </button>
    </div>
  );
}

export default Lightbox;
