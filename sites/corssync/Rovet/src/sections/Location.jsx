import { ArrowUpRight, Clock3, Instagram, MapPin, Navigation, Phone } from 'lucide-react'
import facade from '../assets/fachada-frontal.jpg'

const mapsUrl =
  'https://www.google.com/maps/search/?api=1&query=Avenida+Bernardo+Sayao+416+Centro+Paraiso+do+Tocantins+TO'

function Location() {
  return (
    <section className="location-section" id="contato">
      <div className="container location-shell">
        <div className="location-content" data-reveal>
          <span className="eyebrow">Onde estamos</span>
          <h2>Perto de você. Prontos para receber seu pet.</h2>
          <p className="location-address">
            Avenida Bernardo Sayão, 416, Centro, esquina com a Rua 21 de Abril
            <span>Paraíso do Tocantins — TO · CEP 77600-000</span>
          </p>

          <div className="location-details">
            <div>
              <Clock3 aria-hidden="true" />
              <span>
                <small>Funcionamento</small>
                <strong>24 horas, todos os dias</strong>
              </span>
            </div>
            <a href="tel:+5563999466901">
              <Phone aria-hidden="true" />
              <span>
                <small>Telefone e WhatsApp</small>
                <strong>(63) 99946-6901</strong>
              </span>
            </a>
            <a
              href="https://www.instagram.com/rovethospital?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==&igsi=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noreferrer"
            >
              <Instagram aria-hidden="true" />
              <span>
                <small>Instagram</small>
                <strong>@rovethospital</strong>
              </span>
            </a>
          </div>

          <a className="button button--accent" href={mapsUrl} target="_blank" rel="noreferrer">
            <Navigation aria-hidden="true" />
            Abrir rota no mapa
          </a>
        </div>

        <a className="location-visual" href={mapsUrl} target="_blank" rel="noreferrer" data-reveal>
          <img src={facade} alt="Entrada principal do Hospital Veterinário Rovet" loading="lazy" />
          <span className="location-pin" aria-hidden="true">
            <MapPin />
          </span>
          <span className="location-visual__label">
            Ver no mapa
            <ArrowUpRight aria-hidden="true" />
          </span>
        </a>
      </div>
    </section>
  )
}

export default Location
