import { useState } from 'react'
import { ArrowRight, BedDouble, PackageOpen, PanelsTopLeft, Sofa } from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionIntro from '../components/SectionIntro'
import { createWhatsAppLink, productExperiences } from '../data/siteData'

const tabIcons = {
  colchoes: BedDouble,
  box: PackageOpen,
  sofas: Sofa,
  cabeceiras: PanelsTopLeft,
}

export default function ProductExplorer() {
  const [activeId, setActiveId] = useState(productExperiences[0].id)
  const activeProduct = productExperiences.find((item) => item.id === activeId)

  return (
    <section className="section product-explorer" id="produtos">
      <div className="container">
        <Reveal>
          <SectionIntro
            eyebrow="Encontre o seu conforto"
            title="Para cada ambiente, um jeito de se sentir em casa."
            copy="Explore as categorias e fale com a nossa equipe para conferir modelos, medidas e disponibilidade."
          />
        </Reveal>

        <Reveal className="product-explorer__shell" delay={80}>
          <div className="product-explorer__tabs" role="tablist" aria-label="Categorias de produtos">
            {productExperiences.map((item) => {
              const Icon = tabIcons[item.id]
              const isActive = activeId === item.id
              return (
                <button
                  key={item.id}
                  id={`tab-${item.id}`}
                  className={isActive ? 'is-active' : ''}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${item.id}`}
                  onClick={() => setActiveId(item.id)}
                >
                  <Icon size={22} aria-hidden="true" />
                  <span>{item.detail}</span>
                </button>
              )
            })}
          </div>

          <div
            className="product-explorer__panel"
            id={`panel-${activeProduct.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeProduct.id}`}
            key={activeProduct.id}
          >
            <div className="product-explorer__image">
              <img src={activeProduct.image} alt={activeProduct.alt} />
              <span>{activeProduct.detail}</span>
            </div>
            <div className="product-explorer__content">
              <p className="eyebrow">{activeProduct.eyebrow}</p>
              <h3>{activeProduct.title}</h3>
              <p>{activeProduct.description}</p>
              <a
                className="text-link"
                href={createWhatsAppLink(`Olá! Vim pelo site e gostaria de conhecer as opções de ${activeProduct.detail.toLowerCase()}.`)}
                target="_blank"
                rel="noreferrer"
              >
                Consultar opções
                <ArrowRight size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

