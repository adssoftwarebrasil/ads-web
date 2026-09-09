import { useEffect, useMemo, useState } from "react";
import { Expand, X } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { galleryItems } from "../data/siteData";

const filters = ["Todos", "Quartos", "Apartamentos", "Ambientes"];

function Gallery() {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [selected, setSelected] = useState(null);
  const filteredItems = useMemo(
    () =>
      activeFilter === "Todos"
        ? galleryItems.slice(0, 12)
        : galleryItems.filter((item) => item.category === activeFilter),
    [activeFilter],
  );

  useEffect(() => {
    if (!selected) return undefined;
    const onKeyDown = (event) => event.key === "Escape" && setSelected(null);
    document.body.classList.add("modal-open");
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selected]);

  return (
    <section className="section gallery-section" id="galeria">
      <div className="container">
        <Reveal className="gallery-heading-row">
          <SectionHeading
            eyebrow="Por dentro da pousada"
            title={<>Veja os espaços. <em>Sinta o clima.</em></>}
            text="Imagens reais das acomodações e ambientes da Pousada Luziânia."
          />
          <div className="gallery-filters" role="group" aria-label="Filtrar galeria">
            {filters.map((filter) => (
              <button
                type="button"
                key={filter}
                className={activeFilter === filter ? "is-active" : ""}
                onClick={() => setActiveFilter(filter)}
                aria-pressed={activeFilter === filter}
              >
                {filter}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="gallery-grid" aria-live="polite">
          {filteredItems.map((item, index) => (
            <button
              className={`gallery-card ${item.featured ? "is-featured" : ""}`}
              type="button"
              key={`${activeFilter}-${item.src}`}
              onClick={() => setSelected(item)}
              aria-label={`Ampliar imagem: ${item.alt}`}
              style={{ "--delay": `${Math.min(index * 35, 250)}ms` }}
            >
              <img src={item.src} alt={item.alt} loading="lazy" />
              <span className="gallery-card-label">{item.category}</span>
              <span className="gallery-expand" aria-hidden="true"><Expand /></span>
            </button>
          ))}
        </div>
      </div>

      {selected && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={selected.alt} onClick={() => setSelected(null)}>
          <button className="lightbox-close" type="button" onClick={() => setSelected(null)} aria-label="Fechar imagem">
            <X aria-hidden="true" />
          </button>
          <figure onClick={(event) => event.stopPropagation()}>
            <img src={selected.src} alt={selected.alt} />
            <figcaption>{selected.alt}</figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}

export default Gallery;
