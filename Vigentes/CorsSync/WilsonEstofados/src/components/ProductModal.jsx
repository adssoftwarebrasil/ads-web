import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import WhatsAppLink from "./WhatsAppLink.jsx";

export default function ProductModal({ product, onClose }) {
  const dialogRef = useRef(null);
  const [imageIndex, setImageIndex] = useState(0);
  useEffect(() => {
    const dialog = dialogRef.current;
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, []);
  const moveImage = (direction) =>
    setImageIndex(
      (index) =>
        (index + direction + product.images.length) % product.images.length,
    );

  return (
    <dialog
      ref={dialogRef}
      className="product-modal"
      aria-labelledby="product-modal-title"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") moveImage(-1);
        if (event.key === "ArrowRight") moveImage(1);
      }}
    >
      <div className="modal-inner">
        <button
          className="modal-close icon-button"
          onClick={onClose}
          aria-label="Fechar detalhes"
          autoFocus
        >
          <X size={23} />
        </button>
        <div className="modal-gallery">
          <img
            className={product.isolated ? "isolated-image" : ""}
            src={product.images[imageIndex]}
            alt={`${product.name} — foto ${imageIndex + 1}`}
            width="800"
            height="700"
          />
          {product.images.length > 1 && (
            <div className="gallery-controls">
              <button
                className="icon-button"
                aria-label="Foto anterior"
                onClick={() => moveImage(-1)}
              >
                <ChevronLeft size={20} />
              </button>
              <span aria-live="polite">
                {imageIndex + 1} / {product.images.length}
              </span>
              <button
                className="icon-button"
                aria-label="Próxima foto"
                onClick={() => moveImage(1)}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>
        <div className="modal-content">
          <span className="eyebrow">{product.category} · Wilson Estofados</span>
          <h2 id="product-modal-title">{product.name}</h2>
          <p>{product.description}</p>
          <div className="modal-note">
            <strong>Vamos pensar no seu ambiente?</strong>
            <p>
              Consulte medidas, revestimentos, cores, valores e possibilidades
              de fabricação pelo WhatsApp.
            </p>
          </div>
          <WhatsAppLink
            message={`Olá, Wilson Estofados! Vi o modelo "${product.name}" no catálogo e gostaria de saber mais e solicitar um orçamento.`}
          >
            Consultar este modelo
          </WhatsAppLink>
          <span className="modal-caption">
            Fotos de referência. Detalhes e condições são confirmados no
            atendimento.
          </span>
        </div>
      </div>
    </dialog>
  );
}
