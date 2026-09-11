import { ArrowUpRight } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { contact, delights } from '../data/siteData.js'

function Delights() {
  return (
    <section className="delights section" id="delicias">
      <div className="container">
        <Reveal>
          <div className="delights__intro">
            <SectionHeading
              eyebrow="O que sai por aqui"
              title="Vitrine cheia. Escolha difícil."
              description="A disponibilidade varia ao longo do dia — e essa é uma boa desculpa para voltar sempre."
            />
            <a className="button button--outline" href={contact.whatsappHref} target="_blank" rel="noreferrer">
              Consultar o que tem hoje
              <ArrowUpRight size={19} aria-hidden="true" />
            </a>
          </div>
        </Reveal>

        <div className="delights__grid">
          {delights.map((item, index) => (
            <Reveal key={item.title} className={`delight-card delight-card--${item.tone}`} delay={index * 80}>
              <div className="delight-card__image">
                <img src={item.image} alt={item.alt} />
                <span>{String(index + 1).padStart(2, '0')}</span>
              </div>
              <div className="delight-card__body">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Delights
