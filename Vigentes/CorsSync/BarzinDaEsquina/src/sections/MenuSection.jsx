import { useState } from 'react'
import { ChevronRight, MessageCircle } from 'lucide-react'
import { contact, foodGallery, menuGroups } from '../data/siteData.js'

function MenuSection() {
  const [activeId, setActiveId] = useState(menuGroups[0].id)
  const activeGroup = menuGroups.find((group) => group.id === activeId)

  return (
    <section className="menu-section section" id="cardapio">
      <div className="container">
        <div className="section-heading section-heading--split" data-reveal>
          <div>
            <p className="eyebrow"><span /> Da nossa cozinha</p>
            <h2>Tem sabor de boteco.<br /><em>Tem jeito de casa.</em></h2>
          </div>
          <p>
            Do almoço do dia à porção no fim da tarde, aqui a comida chega à mesa para ser aproveitada junto.
          </p>
        </div>

        <div className="menu-tabs" role="tablist" aria-label="Categorias do cardápio" data-reveal>
          {menuGroups.map((group) => (
            <button
              key={group.id}
              type="button"
              role="tab"
              aria-selected={activeId === group.id}
              aria-controls={`panel-${group.id}`}
              id={`tab-${group.id}`}
              className={activeId === group.id ? 'is-active' : ''}
              onClick={() => setActiveId(group.id)}
            >
              {group.label}
            </button>
          ))}
        </div>

        <div
          className="menu-feature"
          role="tabpanel"
          id={`panel-${activeGroup.id}`}
          aria-labelledby={`tab-${activeGroup.id}`}
          key={activeGroup.id}
        >
          <div className="menu-feature__image">
            <img src={activeGroup.image} alt={activeGroup.alt} />
            <span>Feito para compartilhar</span>
          </div>
          <div className="menu-feature__copy">
            <p className="menu-feature__eyebrow">{activeGroup.eyebrow}</p>
            <h3>{activeGroup.title}</h3>
            <p>{activeGroup.description}</p>
            <a href={contact.whatsappUrl} target="_blank" rel="noreferrer">
              Consultar o cardápio <ChevronRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="food-strip" data-reveal>
          {foodGallery.map((item) => (
            <figure className="food-card" key={item.image}>
              <img src={item.image} alt={item.alt} loading="lazy" />
              <figcaption>{item.label}</figcaption>
            </figure>
          ))}
        </div>

        <div className="menu-note" data-reveal>
          <p><strong>Ficou com vontade?</strong> Chama a gente e confira as opções disponíveis no dia.</p>
          <a className="button button--dark" href={contact.whatsappUrl} target="_blank" rel="noreferrer">
            <MessageCircle size={19} aria-hidden="true" /> Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

export default MenuSection
