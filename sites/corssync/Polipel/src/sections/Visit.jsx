import { ArrowUpRight, Clock3, Instagram, MapPin, MessageCircle, Navigation, Phone } from 'lucide-react'
import storefrontImage from '../assets/fachada-polipel-nova.png'
import { INSTAGRAM_LINK, MAP_LINK, PHONE_DISPLAY, PHONE_LINK, WHATSAPP_LINK } from '../data.js'

export function Visit() {
  return (
    <section className="visit section" id="loja">
      <div className="container">
        <div className="visit__header" data-reveal>
          <p className="eyebrow"><span /> Pertinho de você</p>
          <h2>Venha encontrar sua solução na Polipel.</h2>
        </div>

        <div className="visit__grid">
          <div className="visit__photo" data-reveal>
            <img src={storefrontImage} alt="Loja física da Polipel em uma esquina do Setor Centro-Oeste" width="1280" height="720" loading="lazy" />
            <a href={MAP_LINK} target="_blank" rel="noreferrer">
              <Navigation aria-hidden="true" /> Como chegar <ArrowUpRight aria-hidden="true" />
            </a>
          </div>

          <div className="visit__details" data-reveal>
            <div className="detail-row">
              <MapPin aria-hidden="true" />
              <div>
                <span>Endereço</span>
                <p>Rua Senador Jaime, Qd. 09, Lt. 05, nº 1198<br />Setor Centro-Oeste · Goiânia – GO<br />CEP 74550-185</p>
              </div>
            </div>
            <div className="detail-row">
              <Clock3 aria-hidden="true" />
              <div>
                <span>Horário de funcionamento</span>
                <p>Segunda a sexta, das 8h às 18h<br />Sábado, das 8h às 13h</p>
              </div>
            </div>
            <div className="detail-row">
              <Phone aria-hidden="true" />
              <div>
                <span>Telefone e WhatsApp</span>
                <p><a href={PHONE_LINK}>{PHONE_DISPLAY}</a></p>
              </div>
            </div>
            <div className="visit__actions">
              <a className="button button--blue" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                <MessageCircle aria-hidden="true" /> Falar com a Polipel
              </a>
              <a className="social-link" href={INSTAGRAM_LINK} target="_blank" rel="noreferrer">
                <Instagram aria-hidden="true" /> @polipelpapelariaeembalagens
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

