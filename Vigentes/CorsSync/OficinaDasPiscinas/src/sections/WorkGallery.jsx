import { useMemo, useState } from "react";
import { Images, Play, Plus } from "lucide-react";
import { GalleryLightbox } from "../components/GalleryLightbox";
import { SectionHeading } from "../components/SectionHeading";
import { galleryItems } from "../data/siteData";

const filters = [
  { id: "todos", label: "Todos" },
  { id: "piscinas", label: "Piscinas" },
  { id: "sistemas", label: "Sistemas" },
  { id: "obra", label: "Em obra" },
  { id: "videos", label: "Vídeos" },
];

export function WorkGallery() {
  const [filter, setFilter] = useState("todos");
  const [visibleCount, setVisibleCount] = useState(8);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredItems = useMemo(
    () =>
      filter === "todos"
        ? galleryItems
        : galleryItems.filter((item) => item.category === filter),
    [filter],
  );

  const visibleItems = filteredItems.slice(0, visibleCount);
  const hasMore = visibleCount < filteredItems.length;

  const changeFilter = (nextFilter) => {
    setFilter(nextFilter);
    setVisibleCount(8);
    setLightboxIndex(null);
  };

  return (
    <section className="section work-gallery" id="projetos">
      <div className="container">
        <div className="gallery__header" data-reveal>
          <SectionHeading
            eyebrow="Trabalho de verdade"
            title="Obras reais. Sistemas reais. Resultado visível."
            description="Uma seleção de piscinas, instalações e etapas executadas pela Oficina das Piscinas."
          />

          <div className="gallery__count" aria-hidden="true">
            <Images size={22} />
            <strong>{galleryItems.length}</strong>
            <span>registros enviados</span>
          </div>
        </div>

        <div
          className="gallery__filters"
          role="group"
          aria-label="Filtrar projetos"
          data-reveal
        >
          {filters.map((item) => (
            <button
              key={item.id}
              className={filter === item.id ? "is-active" : ""}
              type="button"
              onClick={() => changeFilter(item.id)}
              aria-pressed={filter === item.id}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="gallery__grid" data-reveal>
          {visibleItems.map((item, index) => (
            <button
              key={`${item.title}-${item.src}`}
              className={`gallery-card gallery-card--${
                index % 7 === 0 ? "wide" : index % 5 === 0 ? "tall" : "regular"
              }`}
              type="button"
              onClick={() => setLightboxIndex(index)}
              aria-label={`Abrir ${item.type === "video" ? "vídeo" : "foto"}: ${
                item.title
              }`}
            >
              <img src={item.poster || item.src} alt="" loading="lazy" />
              <span className="gallery-card__shade" />
              {item.type === "video" && (
                <span className="gallery-card__play" aria-hidden="true">
                  <Play size={22} fill="currentColor" />
                </span>
              )}
              <span className="gallery-card__label">
                <small>{item.type === "video" ? "Vídeo" : "Projeto"}</small>
                <strong>{item.title}</strong>
              </span>
            </button>
          ))}
        </div>

        {hasMore && (
          <button
            className="button button--outline gallery__more"
            type="button"
            onClick={() => setVisibleCount((count) => count + 8)}
          >
            Ver mais registros
            <Plus size={18} />
          </button>
        )}
      </div>

      {lightboxIndex !== null && (
        <GalleryLightbox
          items={filteredItems}
          activeIndex={lightboxIndex}
          onChange={setLightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </section>
  );
}
