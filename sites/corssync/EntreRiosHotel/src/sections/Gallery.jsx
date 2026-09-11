import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Expand, X } from "lucide-react";
import { gallery } from "../data/hotel";

const categories = [
  "Todos os ambientes",
  "Acomodações",
  "Café da manhã",
  "O hotel",
];

export default function Gallery() {
  const [category, setCategory] = useState(categories[0]);
  const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState(null);
  const dialogRef = useRef(null);
  const filtered =
    category === categories[0]
      ? gallery
      : gallery.filter((photo) => photo.category === category);
  const visible = expanded ? filtered : filtered.slice(0, 6);
  const active = selected === null ? null : filtered[selected];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (selected === null) {
      if (dialog.open) dialog.close();
      return;
    }
    if (!dialog.open) dialog.showModal();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [selected]);

  function changePhoto(direction) {
    setSelected(
      (index) => (index + direction + filtered.length) % filtered.length,
    );
  }

  return (
    <section
      id="galeria"
      className="section gallery-section container"
      aria-labelledby="gallery-title"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">UM POUCO DO NOSSO HOTEL</p>
          <h2 id="gallery-title">
            Imagine-se <em>aqui.</em>
          </h2>
        </div>
        <p>
          Abra a porta, conheça os espaços
          <br />e comece a planejar a sua visita.
        </p>
      </div>
      <div className="gallery-toolbar">
        <div
          className="gallery-filters"
          role="group"
          aria-label="Filtrar fotos por ambiente"
        >
          {categories.map((item) => (
            <button
              key={item}
              aria-pressed={category === item}
              onClick={() => {
                setCategory(item);
                setExpanded(false);
              }}
              className={category === item ? "active" : ""}
            >
              {item}
            </button>
          ))}
        </div>
        <span className="gallery-count" aria-live="polite">
          {filtered.length} fotografias
        </span>
      </div>
      <div className="gallery-grid">
        {visible.map((photo, index) => (
          <button
            className="gallery-photo"
            key={photo.src}
            onClick={() => setSelected(index)}
            aria-label={`Ampliar foto: ${photo.alt}`}
            aria-haspopup="dialog"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              width="680"
              height="510"
            />
            <span className="gallery-photo-label">{photo.category}</span>
            <span className="gallery-expand">
              <Expand size={19} aria-hidden="true" />
            </span>
          </button>
        ))}
      </div>
      {filtered.length > 6 && (
        <div className="gallery-more">
          <button className="text-link" onClick={() => setExpanded(!expanded)}>
            {expanded ? "Ver menos fotos" : "Conheça mais espaços"}
            <ArrowUpRight size={17} aria-hidden="true" />
          </button>
        </div>
      )}
      <dialog
        ref={dialogRef}
        className="lightbox"
        aria-labelledby="lightbox-title"
        onCancel={() => setSelected(null)}
        onClose={() => setSelected(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) setSelected(null);
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") {
            event.preventDefault();
            changePhoto(1);
          }
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            changePhoto(-1);
          }
        }}
      >
        {active && (
          <div className="lightbox-content">
            <div className="lightbox-top">
              <span id="lightbox-title">
                {active.category}{" "}
                <span className="lightbox-counter">
                  {selected + 1} / {filtered.length}
                </span>
              </span>
              <button
                autoFocus
                className="icon-button"
                aria-label="Fechar galeria"
                onClick={() => setSelected(null)}
              >
                <X />
              </button>
            </div>
            <div className="lightbox-stage">
              <button
                className="icon-button lightbox-prev"
                aria-label="Foto anterior"
                onClick={() => changePhoto(-1)}
              >
                <ArrowLeft />
              </button>
              <img src={active.src} alt={active.alt} />
              <button
                className="icon-button lightbox-next"
                aria-label="Próxima foto"
                onClick={() => changePhoto(1)}
              >
                <ArrowRight />
              </button>
            </div>
            <p className="lightbox-caption">{active.alt}</p>
          </div>
        )}
      </dialog>
    </section>
  );
}
