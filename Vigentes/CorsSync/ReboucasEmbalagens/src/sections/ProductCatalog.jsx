import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { categories, contact, filters } from "../data/siteData";

function ProductCatalog() {
  const [activeFilter, setActiveFilter] = useState("todos");

  const visibleCategories = useMemo(
    () => categories.filter((category) => activeFilter === "todos" || category.groups.includes(activeFilter)),
    [activeFilter],
  );

  return (
    <section className="catalog section" id="produtos">
      <div className="container">
        <div className="catalog__intro">
          <Reveal>
            <SectionHeading
              eyebrow="Um mix que acompanha sua rotina"
              title="De embalar a entregar, você encontra aqui."
              description="Navegue pelas categorias e consulte nossa equipe para encontrar tamanhos e opções adequados ao que você precisa."
            />
          </Reveal>
          <Reveal className="catalog__note" delay={120}>
            <span>01</span>
            <p>Escolha uma categoria para ver os produtos relacionados.</p>
          </Reveal>
        </div>

        <div className="filter-bar" role="group" aria-label="Filtrar categorias de produtos">
          {filters.map((filter) => (
            <button
              key={filter.value}
              className={activeFilter === filter.value ? "is-active" : ""}
              type="button"
              onClick={() => setActiveFilter(filter.value)}
              aria-pressed={activeFilter === filter.value}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="product-grid" aria-live="polite">
          {visibleCategories.map((category, index) => (
            <article className={`product-card product-card--${category.tone}`} key={category.title}>
              <div className="product-card__number">{String(index + 1).padStart(2, "0")}</div>
              <div className="product-card__image">
                <img src={category.image} alt={category.alt} loading="lazy" />
              </div>
              <div className="product-card__body">
                <h3>{category.title}</h3>
                <p>{category.description}</p>
                <a href={contact.whatsapp} target="_blank" rel="noreferrer" aria-label={`Consultar ${category.title} pelo WhatsApp`}>
                  Consultar
                  <ArrowRight size={18} aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <Reveal className="catalog__footer">
          <div className="catalog__footer-copy">
            <span>Mais opções</span>
            <p>
              Também trabalhamos com <strong>caixas de isopor</strong>, <strong>caixas para pizza</strong> e outras
              soluções para o seu dia a dia.
            </p>
          </div>
          <a className="button button--dark" href={contact.whatsapp} target="_blank" rel="noreferrer">
            Falar com a equipe
            <ArrowRight size={19} aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export default ProductCatalog;
