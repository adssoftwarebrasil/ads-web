import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react'
import { useRef } from 'react'
import { careNetwork } from '../data/careNetwork.js'

function CareNetwork() {
  const trackRef = useRef(null)

  const moveTrack = (direction) => {
    const track = trackRef.current

    if (!track) return

    track.scrollBy({
      left: direction * Math.min(track.clientWidth * 0.88, 760),
      behavior: 'smooth',
    })
  }

  return (
    <section className="section care-network" id="rede-atendimento">
      <div className="container">
        <div className="care-network__header">
          <div className="care-network__heading" data-reveal>
            <span className="care-network__eyebrow">Rede de atendimento Hapvida</span>
            <h2>
              Estrutura completa <span>à sua disposição</span>
            </h2>
            <p>
              Conheça hospitais, clínicas e unidades de atendimento que fazem parte da rede apresentada pela Hapvida.
            </p>
          </div>

          <div className="care-network__controls" aria-label="Navegação da rede de atendimento" data-reveal>
            <button type="button" onClick={() => moveTrack(-1)} aria-label="Ver unidades anteriores">
              <ChevronLeft aria-hidden="true" />
            </button>
            <button type="button" onClick={() => moveTrack(1)} aria-label="Ver próximas unidades">
              <ChevronRight aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="care-network__track" ref={trackRef} tabIndex="0" aria-label="Unidades da rede de atendimento Hapvida">
          {careNetwork.map((unit, index) => (
            <article className="network-card" key={unit.name} data-reveal style={{ '--delay': `${(index % 4) * 70}ms` }}>
              <div className="network-card__image">
                <img
                  src={unit.image}
                  alt={`Fachada da unidade ${unit.name}`}
                  loading="lazy"
                  style={{ objectPosition: unit.imagePosition }}
                />
                <span className="network-card__index" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <div className="network-card__body">
                <span className="network-card__city">
                  <MapPin size={15} aria-hidden="true" />
                  {unit.city}
                </span>
                <h3>{unit.name}</h3>
                <address>{unit.address}</address>
              </div>
            </article>
          ))}
        </div>

        <p className="care-network__note">
          A disponibilidade da rede pode variar conforme o plano contratado. Consulte nossa equipe para confirmar as opções do seu perfil.
        </p>
      </div>
    </section>
  )
}

export default CareNetwork
