import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Expand, X } from 'lucide-react';
import { galleryImages } from '../data/clientImages';
import Reveal from '../components/Reveal';

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null);
  const dialogRef = useRef(null);
  const isOpen = activeIndex !== null;
  const activeImage = isOpen ? galleryImages[activeIndex] : null;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
      if (dialog.open) dialog.close();
    };
  }, [isOpen]);

  function navigate(direction) {
    setActiveIndex((index) => (index + direction + galleryImages.length) % galleryImages.length);
  }

  return (
    <section className="gallery section-space" id="galeria" aria-labelledby="gallery-title">
      <div className="container">
        <Reveal className="section-heading">
          <div>
            <p className="eyebrow">OS SABORES. OS DETALHES. A NOSSA CASA.</p>
            <h2 id="gallery-title">
              DÁ UMA OLHADA
              <br />
              <span className="text-red">NO QUE TE ESPERA.</span>
            </h2>
          </div>
          <p>Tem lanche, tem capricho e tem lugar para bons momentos. Chega mais!</p>
        </Reveal>
        <div className="gallery__grid">
          {galleryImages.map((item, index) => (
            <button
              className="gallery-card"
              key={item.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Ampliar imagem: ${item.title}`}
            >
              <span className="gallery-card__image">
                <img
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  loading="lazy"
                  decoding="async"
                  style={{ objectPosition: item.position }}
                />
                <span className="gallery-card__expand" aria-hidden="true">
                  <Expand size={19} />
                </span>
              </span>
              <span className="gallery-card__caption">
                <span>{item.label}</span>
                <strong>{item.title}</strong>
              </span>
            </button>
          ))}
        </div>
      </div>
      <dialog
        className="photo-dialog"
        ref={dialogRef}
        aria-labelledby="photo-dialog-title"
        aria-describedby="photo-dialog-description"
        onClose={() => setActiveIndex(null)}
        onCancel={() => setActiveIndex(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) setActiveIndex(null);
        }}
        onKeyDown={(event) => {
          if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
            event.preventDefault();
            navigate(event.key === 'ArrowLeft' ? -1 : 1);
          }
        }}
      >
        {activeImage && (
          <div className="photo-dialog__content">
            <div className="photo-dialog__top">
              <span aria-live="polite">
                {activeIndex + 1} / {galleryImages.length}
              </span>
              <button
                className="photo-dialog__control"
                type="button"
                autoFocus
                aria-label="Fechar imagem ampliada"
                onClick={() => setActiveIndex(null)}
              >
                <X size={23} />
              </button>
            </div>
            <img
              className="photo-dialog__image"
              src={activeImage.src}
              alt={activeImage.alt}
              width={activeImage.width}
              height={activeImage.height}
            />
            <div className="photo-dialog__bottom">
              <button
                className="photo-dialog__control"
                type="button"
                aria-label="Imagem anterior"
                onClick={() => navigate(-1)}
              >
                <ArrowLeft size={22} />
              </button>
              <div className="photo-dialog__caption" aria-live="polite">
                <h3 id="photo-dialog-title">{activeImage.title}</h3>
                <p id="photo-dialog-description">{activeImage.note || activeImage.alt}</p>
              </div>
              <button
                className="photo-dialog__control"
                type="button"
                aria-label="Próxima imagem"
                onClick={() => navigate(1)}
              >
                <ArrowRight size={22} />
              </button>
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
