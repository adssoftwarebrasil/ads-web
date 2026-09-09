import { ArrowUpRight } from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionIntro from '../components/SectionIntro'
import { createWhatsAppLink, showcaseProducts } from '../data/siteData'

export default function Showcase() {
  return (
    <section className="section showcase" id="vitrine">
      <div className="container">
        <Reveal className="showcase__heading">
          <SectionIntro
            eyebrow="Vitrine Duarte"
            title="Conforto que acompanha a casa inteira."
            copy="Uma seleção visual das categorias que você encontra por aqui. Consulte nossa equipe para ver as opções disponíveis."
          />
          <a className="button button--outline" href={createWhatsAppLink('Olá! Quero consultar os produtos disponíveis na Duarte Colchões.')} target="_blank" rel="noreferrer">
            Consultar disponibilidade
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </Reveal>
        <Reveal className="showcase__meta" delay={80}>
          <p>Escolha a categoria e fale com a nossa equipe para encontrar a opção ideal.</p>
          <span>{String(showcaseProducts.length).padStart(2, '0')} categorias</span>
        </Reveal>
        <div className="showcase__grid">
          {showcaseProducts.map((product, index) => (
            <Reveal className="product-card" key={product.title} delay={(index % 3) * 70}>
              <div className={`product-card__image${product.fit === 'contain' ? ' product-card__image--contain' : ''}`}>
                <img src={product.image} alt={product.alt} loading="lazy" />
                <span>{product.tag}</span>
                <strong className="product-card__number">{String(index + 1).padStart(2, '0')}</strong>
              </div>
              <div className="product-card__body">
                <div>
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                </div>
                <a
                  href={createWhatsAppLink(`Olá! Gostaria de saber mais sobre ${product.title.toLowerCase()} disponíveis na Duarte Colchões.`)}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Consultar ${product.title} no WhatsApp`}
                >
                  <ArrowUpRight size={20} />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
