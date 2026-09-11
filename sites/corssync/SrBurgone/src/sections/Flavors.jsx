import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { categories, products, whatsappUrl } from '../data/site';
import Reveal from '../components/Reveal';

export default function Flavors() {
  const [category, setCategory] = useState('todos');
  const visibleProducts = products.filter(
    (product) => category === 'todos' || product.category === category,
  );
  return (
    <section className="flavors section-space" id="sabores" aria-labelledby="flavors-title">
      <div className="container">
        <Reveal className="section-heading">
          <div>
            <p className="eyebrow">PRA CADA FOME, UM SABOR.</p>
            <h2 id="flavors-title">
              HOJE A VONTADE
              <br />É DE <span className="text-red">QUÊ?</span>
            </h2>
          </div>
          <p>
            Do lanche caprichado ao último docinho.
            <br />
            Escolha sua vontade e vem com a gente.
          </p>
        </Reveal>
        <div className="category-filters" role="group" aria-label="Filtrar sabores">
          {categories.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`category-filter${category === item.id ? ' is-active' : ''}`}
              aria-pressed={category === item.id}
              aria-controls="product-list"
              onClick={() => setCategory(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <p className="sr-only" role="status">
          {visibleProducts.length} categorias de produtos exibidas.
        </p>
        <div className="product-grid" id="product-list">
          {visibleProducts.map((product) => (
            <article className="product-card" key={product.id}>
              <div className="product-card__image">
                <img
                  src={product.image}
                  alt={product.alt}
                  width={product.width}
                  height={product.height}
                  style={{ objectPosition: product.position ?? 'center' }}
                  loading="lazy"
                  decoding="async"
                />
                <span className="product-card__number" aria-hidden="true">
                  0{products.findIndex((item) => item.id === product.id) + 1}
                </span>
                {product.illustrative && <span className="photo-credit">Foto ilustrativa</span>}
              </div>
              <div className="product-card__body">
                <span className="product-card__eyebrow">{product.eyebrow}</span>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <a
                  className="product-card__link"
                  href={whatsappUrl(product.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Consultar ${product.title.toLowerCase()} no WhatsApp`}
                >
                  Quero conhecer <ArrowUpRight size={20} aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className="menu-note">
          Fotos dos nossos lanches e bebida. <span>Imagem de sobremesa ilustrativa.</span> Consulte
          opções, ingredientes e preços pelo WhatsApp.
        </div>
      </div>
    </section>
  );
}
