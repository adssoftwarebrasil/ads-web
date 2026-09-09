import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Expand,
  Image as ImageIcon,
  Info,
  MessageCircle,
  X,
} from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { catalogCategories, catalogItems } from "../data/catalog";
import { locationShort, whatsappHref } from "../siteData";

function CatalogShowcase() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [selectedItem, setSelectedItem] = useState(null);
  const closeButtonRef = useRef(null);
  const lastTriggerRef = useRef(null);

  const filteredItems = useMemo(
    () =>
      activeCategory === "Todos"
        ? catalogItems
        : catalogItems.filter((item) => item.category === activeCategory),
    [activeCategory],
  );

  const selectedIndex = selectedItem
    ? filteredItems.findIndex((item) => item.id === selectedItem.id)
    : -1;

  const catalogColumns = filteredItems.length % 4 === 0 ? 4 : 3;

  const closeModal = () => {
    setSelectedItem(null);
    window.requestAnimationFrame(() => lastTriggerRef.current?.focus());
  };

  const moveSelection = (direction) => {
    if (selectedIndex < 0) return;
    const nextIndex =
      (selectedIndex + direction + filteredItems.length) % filteredItems.length;
    setSelectedItem(filteredItems[nextIndex]);
  };

  useEffect(() => {
    if (!selectedItem) return undefined;

    document.body.classList.add("catalog-modal-open");
    window.requestAnimationFrame(() => closeButtonRef.current?.focus());

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeModal();
      if (event.key === "ArrowLeft") moveSelection(-1);
      if (event.key === "ArrowRight") moveSelection(1);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.classList.remove("catalog-modal-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedItem, selectedIndex, filteredItems]);

  const selectCategory = (category) => {
    setActiveCategory(category);
    setSelectedItem(null);
  };

  const openItem = (item, trigger) => {
    lastTriggerRef.current = trigger;
    setSelectedItem(item);
  };

  return (
    <>
      <section className="section catalog" id="catalogo">
        <div className="container">
          <Reveal>
            <div className="catalog__intro">
              <SectionHeading
                eyebrow="Catálogo TJ Mix"
                title="Explore tudo o que faz a obra avançar."
                text="Use os filtros para encontrar produtos por categoria e toque em qualquer imagem para ver os detalhes em tamanho ampliado."
              />
              <div className="catalog__count" aria-live="polite">
                <ImageIcon aria-hidden="true" />
                <strong>{filteredItems.length}</strong>
                <span>{filteredItems.length === 1 ? "item em exposição" : "itens em exposição"}</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={60}>
            <div className="catalog__filters" aria-label="Filtrar catálogo por categoria">
              {catalogCategories.map((category) => {
                const count =
                  category === "Todos"
                    ? catalogItems.length
                    : catalogItems.filter((item) => item.category === category).length;

                return (
                  <button
                    key={category}
                    type="button"
                    className={activeCategory === category ? "is-active" : ""}
                    aria-pressed={activeCategory === category}
                    onClick={() => selectCategory(category)}
                  >
                    {category}
                    <span>{count}</span>
                  </button>
                );
              })}
            </div>
          </Reveal>

          <div className="catalog__notice">
            <Info size={18} aria-hidden="true" />
            <p>
              As imagens reúnem materiais de divulgação da TJ Mix. Consulte preços e
              disponibilidade atuais com a equipe. Para visitar a loja, considere o
              endereço atualizado: <strong>{locationShort}</strong>.
            </p>
          </div>

          <div
            className="catalog__grid"
            style={{ "--catalog-columns": catalogColumns }}
          >
            {filteredItems.map((item, index) => (
              <Reveal
                key={item.id}
                className={`catalog-card-wrap catalog-card-wrap--${item.format ?? "portrait"}`}
                delay={Math.min(index * 30, 240)}
              >
                <button
                  type="button"
                  className="catalog-card"
                  aria-label={`Ampliar ${item.title}`}
                  onClick={(event) => openItem(item, event.currentTarget)}
                >
                  <span className="catalog-card__media">
                    <img src={item.image} alt={item.title} loading="lazy" />
                    <span className="catalog-card__expand" aria-hidden="true">
                      <Expand />
                    </span>
                  </span>
                  <span className="catalog-card__body">
                    <span className="catalog-card__category">{item.category}</span>
                    <strong>{item.title}</strong>
                    <span>{item.description}</span>
                  </span>
                </button>
              </Reveal>
            ))}
          </div>

          <div className="catalog__cta">
            <div>
              <span className="eyebrow">Encontrou o que precisa?</span>
              <h3>Envie sua lista e consulte a disponibilidade.</h3>
            </div>
            <a
              className="button button--gold button--large"
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={20} aria-hidden="true" />
              Falar com a equipe
            </a>
          </div>
        </div>
      </section>

      {selectedItem && (
        <div className="catalog-modal">
          <button
            type="button"
            className="catalog-modal__backdrop"
            aria-label="Fechar visualização"
            onClick={closeModal}
          />
          <div
            className="catalog-modal__dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="catalog-modal-title"
          >
            <button
              ref={closeButtonRef}
              type="button"
              className="catalog-modal__close"
              aria-label="Fechar visualização"
              onClick={closeModal}
            >
              <X aria-hidden="true" />
            </button>

            <div className="catalog-modal__image">
              <img src={selectedItem.image} alt={selectedItem.title} />
            </div>

            <div className="catalog-modal__content">
              <span className="catalog-card__category">{selectedItem.category}</span>
              <h3 id="catalog-modal-title">{selectedItem.title}</h3>
              <p>{selectedItem.description}</p>
              <span className="catalog-modal__position">
                {selectedIndex + 1} de {filteredItems.length}
              </span>
              <div className="catalog-modal__actions">
                <button type="button" onClick={() => moveSelection(-1)}>
                  <ArrowLeft aria-hidden="true" />
                  Anterior
                </button>
                <button type="button" onClick={() => moveSelection(1)}>
                  Próximo
                  <ArrowRight aria-hidden="true" />
                </button>
              </div>
              <a
                className="button button--gold"
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={18} aria-hidden="true" />
                Consultar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CatalogShowcase;
