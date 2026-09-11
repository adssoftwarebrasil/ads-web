import { MapPinned, Navigation } from 'lucide-react'
import Reveal from '../components/Reveal'
import { coverageCities } from '../data/siteData'

export default function Coverage() {
  return (
    <section className="coverage section" aria-labelledby="coverage-title">
      <div className="coverage__mark" aria-hidden="true">BA</div>
      <div className="container coverage__grid">
        <Reveal className="coverage__intro">
          <span className="coverage__icon"><MapPinned aria-hidden="true" /></span>
          <p className="eyebrow"><span /> Feira e região</p>
          <h2 id="coverage-title">Perto de quem move a região.</h2>
          <p>
            Atendemos Feira de Santana e cidades vizinhas com venda presencial,
            telefone e WhatsApp.
          </p>
          <a
            className="inline-link"
            href="https://www.google.com/maps/search/?api=1&query=Rua%20Carlos%20Valadares%2C%20110%2C%20Centro%2C%20Feira%20de%20Santana%2FBA"
            target="_blank"
            rel="noreferrer"
          >
            <Navigation aria-hidden="true" /> Como chegar
          </a>
        </Reveal>

        <Reveal className="coverage__cities" delay={100}>
          {coverageCities.map((city, index) => (
            <span key={city}><b>{String(index + 1).padStart(2, '0')}</b>{city}</span>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
