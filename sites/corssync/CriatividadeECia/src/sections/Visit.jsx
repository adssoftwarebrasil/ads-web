import {
  ArrowUpRight,
  Clock3,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Navigation,
} from 'lucide-react'
import visitImage from '../assets/products/brinquedos-jogo-imagem-e-acao.webp'
import Reveal from '../components/Reveal.jsx'
import { INSTAGRAM_URL, MAPS_URL, WHATSAPP_URL } from '../constants.js'

const serviceCities = [
  'Anicuns',
  'Adelândia',
  'Avelinópolis',
  'Americano do Brasil',
  'Nazário',
  'Santa Bárbara de Goiás',
]

function Visit() {
  return (
    <section className="section visit" id="contato">
      <div className="container">
        <Reveal className="visit-card">
          <div className="visit-card__content">
            <span className="eyebrow">Venha encontrar seu próximo achado</span>
            <h2>A variedade está na loja. O atendimento começa agora.</h2>
            <p>
              Passe na Criatividade & Cia ou chame pelo WhatsApp para consultar produtos,
              modelos e disponibilidade.
            </p>

            <div className="visit-card__actions">
              <a className="button button--light" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                <MessageCircle aria-hidden="true" /> Falar no WhatsApp
              </a>
              <a className="button button--red-ghost" href={MAPS_URL} target="_blank" rel="noreferrer">
                Como chegar <Navigation aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="visit-card__image">
            <img
              src={visitImage}
              alt="Jogo infantil em destaque na Criatividade & Cia"
              loading="lazy"
            />
            <span>Rua Arthur Bernardes, 1236</span>
          </div>
        </Reveal>

        <div className="contact-grid">
          <Reveal className="contact-panel">
            <span className="contact-panel__icon">
              <MapPin aria-hidden="true" />
            </span>
            <div>
              <span className="contact-panel__label">Nosso endereço</span>
              <h3>Rua Arthur Bernardes, 1236</h3>
              <p>Anicuns, Goiás</p>
              <a href={MAPS_URL} target="_blank" rel="noreferrer">
                Abrir no mapa <ArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </Reveal>

          <Reveal className="contact-panel" delay={70}>
            <span className="contact-panel__icon">
              <Clock3 aria-hidden="true" />
            </span>
            <div>
              <span className="contact-panel__label">Horários</span>
              <h3>Segunda a sexta</h3>
              <p>8h às 18h</p>
              <h3>Sábado</h3>
              <p>8h às 13h</p>
            </div>
          </Reveal>

          <Reveal className="contact-panel" delay={140}>
            <span className="contact-panel__icon">
              <MessageCircle aria-hidden="true" />
            </span>
            <div>
              <span className="contact-panel__label">Canais de atendimento</span>
              <a className="contact-panel__main-link" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                (64) 99925-7291
              </a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
                <Instagram aria-hidden="true" /> @criatividadecia.anicuns
              </a>
              <a href="mailto:criatividadeecia@outlook.com">
                <Mail aria-hidden="true" /> criatividadeecia@outlook.com
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal className="service-area">
          <div>
            <span>Também atendemos</span>
            <h2>Anicuns e região</h2>
          </div>
          <ul aria-label="Cidades atendidas">
            {serviceCities.map((city) => (
              <li key={city}>{city}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}

export default Visit
