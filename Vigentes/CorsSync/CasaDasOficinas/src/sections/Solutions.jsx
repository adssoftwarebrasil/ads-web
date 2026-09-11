import { useState } from 'react'
import { ArrowRight, MessageCircle } from 'lucide-react'
import Reveal from '../components/Reveal'
import { serviceTracks, whatsappUrl } from '../data/siteData'

export default function Solutions() {
  const [activeId, setActiveId] = useState(serviceTracks[0].id)
  const activeTrack = serviceTracks.find((track) => track.id === activeId)
  const ActiveIcon = activeTrack.Icon

  return (
    <section className="solutions section" id="solucoes">
      <div className="container">
        <Reveal className="section-heading section-heading--light">
          <p className="eyebrow eyebrow--yellow"><span /> Um endereço, três caminhos</p>
          <div className="section-heading__row">
            <h2>O atendimento certo para cada necessidade.</h2>
            <p>
              Seja para abastecer sua oficina, cuidar do seu carro ou comprar uma peça,
              comece por aqui.
            </p>
          </div>
        </Reveal>

        <div className="solution-switcher">
          <div className="solution-tabs" role="tablist" aria-label="Escolha o tipo de atendimento">
            {serviceTracks.map(({ id, eyebrow, Icon }, index) => (
              <button
                key={id}
                className={activeId === id ? 'is-active' : ''}
                type="button"
                role="tab"
                aria-selected={activeId === id}
                aria-controls="solution-panel"
                onClick={() => setActiveId(id)}
              >
                <span className="solution-tabs__number">0{index + 1}</span>
                <Icon aria-hidden="true" />
                <span>{eyebrow}</span>
                <ArrowRight className="solution-tabs__arrow" aria-hidden="true" />
              </button>
            ))}
          </div>

          <div className="solution-panel" id="solution-panel" role="tabpanel" key={activeTrack.id}>
            <span className="solution-panel__icon"><ActiveIcon aria-hidden="true" /></span>
            <p>{activeTrack.eyebrow}</p>
            <h3>{activeTrack.title}</h3>
            <p className="solution-panel__description">{activeTrack.description}</p>
            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              <MessageCircle aria-hidden="true" /> {activeTrack.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
