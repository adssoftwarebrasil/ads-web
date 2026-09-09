import { ArrowUpRight } from 'lucide-react'

export default function ProductCard({ product }) {
  const message = encodeURIComponent(
    `Olá, Judá Calçados! Gostaria de saber se o modelo “${product.name}” ainda está disponível.`,
  )

  return (
    <article className="product-card">
      <div className={`product-card__image-wrap${product.imageFit === 'contain' ? ' product-card__image-wrap--contain' : ''}`}>
        <img src={product.image} alt={product.alt} loading="lazy" />
        <span className={`product-card__tag${product.isNew ? ' product-card__tag--new' : ''}`}>
          {product.isNew ? 'Novidade' : product.category}
        </span>
      </div>
      <div className="product-card__body">
        <h3>{product.name}</h3>
        <a
          href={`https://wa.me/556492674193?text=${message}`}
          target="_blank"
          rel="noreferrer"
          aria-label={`Consultar ${product.name} pelo WhatsApp`}
        >
          Consultar modelo <ArrowUpRight size={17} aria-hidden="true" />
        </a>
      </div>
    </article>
  )
}
