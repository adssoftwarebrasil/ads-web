import { useState } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { categories, products } from "../data/catalog.js";
import { whatsappUrl } from "../data/site.js";
import ProductCard from "../components/ProductCard.jsx";

export default function Catalog({ category, onCategoryChange, onProductOpen }) {
  const [showAll, setShowAll] = useState(false);
  const filtered =
    category === "Todos"
      ? products
      : products.filter((product) => product.category === category);
  const visible = showAll ? filtered : filtered.slice(0, 6);
  return (
    <section
      className="catalog section-space"
      id="catalogo"
      aria-labelledby="catalog-title"
    >
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">NOSSO CATÁLOGO</span>
            <h2 id="catalog-title">
              Seu novo lugar
              <br />
              <em>favorito começa aqui.</em>
            </h2>
          </div>
          <p>
            Das linhas clássicas às formas orgânicas, encontre uma inspiração
            para chamar de sua.
          </p>
        </div>
        <div className="catalog-toolbar">
          <div
            className="catalog-filters"
            role="group"
            aria-label="Filtrar catálogo por categoria"
          >
            {categories.map((item) => (
              <button
                key={item}
                aria-pressed={category === item}
                className={category === item ? "active" : ""}
                onClick={() => {
                  onCategoryChange(item);
                  setShowAll(false);
                }}
              >
                {item}
                {item === "Todos" && <span>{products.length}</span>}
              </button>
            ))}
          </div>
          <span className="catalog-count" aria-live="polite">
            {filtered.length}{" "}
            {filtered.length === 1 ? "inspiração" : "inspirações"} para a sua
            casa
          </span>
        </div>
        <div className="product-grid">
          {visible.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onOpen={onProductOpen}
            />
          ))}
        </div>
        {filtered.length > 6 && (
          <div className="catalog-more">
            <button
              className="button button-outline"
              onClick={() => {
                setShowAll(!showAll);
                if (showAll)
                  document
                    .getElementById("catalogo")
                    ?.scrollIntoView({ behavior: "instant" });
              }}
            >
              {showAll
                ? "Mostrar menos modelos"
                : `Ver todos os ${filtered.length} modelos`}
              <ArrowDown size={17} className={showAll ? "rotate-arrow" : ""} />
            </button>
          </div>
        )}
        <div className="catalog-note">
          <p>Imaginou algo diferente? Vamos criar com você.</p>
          <a
            className="text-link"
            href={whatsappUrl(
              "Olá, Wilson Estofados! Tenho uma ideia de estofado sob medida e gostaria de conversar.",
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            Conte a sua ideia <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
