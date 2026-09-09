import { ArrowUpRight, Plus } from "lucide-react";

export default function ProductCard({ product, onOpen }) {
  return (
    <article className="product-card">
      <button
        className={`product-image ${product.isolated ? "is-isolated" : ""}`}
        onClick={() => onOpen(product)}
        aria-label={`Ver detalhes: ${product.name}`}
      >
        <img
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
          width="640"
          height="480"
        />
        {product.tag && <span className="product-tag">{product.tag}</span>}
        <span className="product-expand" aria-hidden="true">
          <Plus size={19} />
        </span>
      </button>
      <div className="product-meta">
        <span>{product.category}</span>
        <span>Sob consulta</span>
      </div>
      <h3>
        <button className="product-title" onClick={() => onOpen(product)}>
          <span>{product.name}</span>
          <ArrowUpRight size={20} aria-hidden="true" />
        </button>
      </h3>
      <p className="product-detail">{product.detail}</p>
    </article>
  );
}
