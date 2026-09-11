import { ArrowDown, Clock3, MapPin, MessageCircle, Truck } from 'lucide-react'
import logo from '../assets/brand/logo-domingao-farma.png'
import facade from '../assets/photos/fachada-domingao-farma.jpg'
import { contact, highlights } from '../data/siteData'

const highlightIcons = [Clock3, Truck, MapPin]

export function Hero() {
  return (
    <main id="inicio">
      <section className="hero">
        <div className="hero-shape hero-shape--one" aria-hidden="true" />
        <div className="hero-shape hero-shape--two" aria-hidden="true" />

        <div className="container hero-grid">
          <div className="hero-copy" data-reveal>
            <span className="eyebrow eyebrow--pill">No Bairro Brasil • desde 2009</span>
            <h1>
              Cuidado de verdade, <em>preço que cabe</em> no seu dia.
            </h1>
            <p>
              Medicamentos, perfumaria, fraldas, leites e suplementos com atendimento próximo e entrega sem taxa.
            </p>
            <div className="hero-actions">
              <a className="button button--primary" href={contact.whatsappUrl} target="_blank" rel="noreferrer">
                <MessageCircle size={20} aria-hidden="true" />
                Pedir pelo WhatsApp
              </a>
              <a className="button button--secondary" href="#produtos">
                Ver produtos
                <ArrowDown size={18} aria-hidden="true" />
              </a>
            </div>
            <p className="hero-note">Atendimento de segunda a domingo.</p>
          </div>

          <div className="hero-visual" data-reveal>
            <div className="hero-photo-wrap">
              <img className="hero-photo" src={facade} alt="Fachada vermelha e branca da Domingão Farma" />
              <div className="hero-logo-card">
                <img src={logo} alt="" />
              </div>
              <div className="hero-open-card">
                <span className="status-dot" aria-hidden="true" />
                <div>
                  <strong>Aberta aos domingos</strong>
                  <span>das 7h às 12h</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container hero-highlights" aria-label="Diferenciais da Domingão Farma">
          {highlights.map((item, index) => {
            const Icon = highlightIcons[index]
            return (
              <div className="highlight-item" key={item.value} data-reveal>
                <span className="highlight-icon"><Icon size={22} aria-hidden="true" /></span>
                <span>
                  <small>{item.kicker}</small>
                  <strong>{item.value}</strong>
                  <em>{item.description}</em>
                </span>
              </div>
            )
          })}
        </div>
      </section>
    </main>
  )
}
