import { useCallback, useState } from "react";
import { Maximize2 } from "lucide-react";
import Lightbox from "../components/Lightbox";
import { galleryCategories } from "../data/content";

function Gallery() {
  const [activeCategoryId, setActiveCategoryId] = useState("triplo");
  const [selected, setSelected] = useState(null);
  const close = useCallback(() => setSelected(null), []);
  const change = useCallback((index) => setSelected(index), []);
  const activeCategory = galleryCategories.find(({ id }) => id === activeCategoryId);
  const activeImages = activeCategory.images;

  const selectCategory = (categoryId) => {
    setActiveCategoryId(categoryId);
    setSelected(null);
  };

  return (
    <section id="galeria" className="section gallery-section">
      <div className="container">
        <div className="gallery-heading reveal" data-reveal>
          <p className="section-eyebrow">Nossas acomodações</p>
          <h2 className="section-title">Escolha a categoria e conheça os apartamentos.</h2>
          <p>Navegue pelas opções e veja fotos reais dos ambientes preparados para receber você.</p>
        </div>

        <div className="gallery-categories reveal" data-reveal role="tablist" aria-label="Categorias de apartamentos">
          {galleryCategories.map((category) => {
            const isActive = category.id === activeCategoryId;
            return (
              <button
                id={`gallery-tab-${category.id}`}
                className={`gallery-category${isActive ? " is-active" : ""}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`gallery-panel-${category.id}`}
                key={category.id}
                onClick={() => selectCategory(category.id)}
              >
                <span>{category.label}</span>
                <small>{category.images.length ? `${category.images.length} fotos` : "em breve"}</small>
              </button>
            );
          })}
        </div>

        <div
          id={`gallery-panel-${activeCategory.id}`}
          className="gallery-panel"
          role="tabpanel"
          aria-labelledby={`gallery-tab-${activeCategory.id}`}
        >
          {activeImages.length > 0 ? (
            <>
              {activeCategory.description && (
                <p className="gallery-category-description">{activeCategory.description}</p>
              )}
              <div className="gallery-mosaic gallery-mosaic--rooms">
                {activeImages.map((image, index) => (
                  <button
                    className="gallery-item"
                    type="button"
                    key={image.src}
                    onClick={() => setSelected(index)}
                    aria-label={`Ampliar foto: ${image.alt}`}
                  >
                    <img src={image.src} alt={image.alt} loading="lazy" />
                    <span><Maximize2 size={17} /> ampliar</span>
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div className="gallery-empty" role="status">
              <p>As fotos da categoria <strong>{activeCategory.label}</strong> serão adicionadas em breve.</p>
              <button type="button" onClick={() => selectCategory("triplo")}>Ver apartamento triplo</button>
            </div>
          )}
        </div>
      </div>

      {selected !== null && (
        <Lightbox images={activeImages} index={selected} onClose={close} onChange={change} />
      )}
    </section>
  );
}

export default Gallery;
