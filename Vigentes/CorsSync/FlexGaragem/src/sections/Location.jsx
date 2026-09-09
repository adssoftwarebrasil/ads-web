import { ArrowUpRight, Clock3, MapPin, MessageCircle, Navigation } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'

const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=Flex+Garagem+Rua+do+Bosque+660+Barra+Funda+S%C3%A3o+Paulo'
const embedUrl = 'https://www.google.com/maps?q=Flex%20Garagem%2C%20Rua%20do%20Bosque%2C%20660%2C%20Barra%20Funda%2C%20S%C3%A3o%20Paulo%2C%20SP%2C%2001136-000&output=embed'

function Location() {
  return (
    <section className="location section" id="localizacao">
      <div className="container">
        <Reveal className="location__heading">
          <div>
            <p className="eyebrow"><span /> Onde estamos</p>
            <h2>Seu próximo cuidado começa aqui.</h2>
          </div>
          <p>Na Barra Funda, com estrutura preparada para receber seu veículo e cuidar de cada detalhe.</p>
        </Reveal>

        <div className="location__frame">
          <Reveal className="location__map">
            <iframe
              src={embedUrl}
              title="Mapa da Flex Garagem na Rua do Bosque, Barra Funda"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </Reveal>

          <Reveal as="aside" className="location-card" delay={100}>
            <span className="location-card__pin"><MapPin aria-hidden="true" /></span>
            <p className="eyebrow eyebrow--lime"><span /> Flex Garagem</p>
            <h3>Rua do Bosque, 660</h3>
            <p className="location-card__address">Barra Funda · São Paulo · SP<br />CEP 01136-000</p>
            <div className="location-card__hours">
              <Clock3 aria-hidden="true" />
              <span><small>Horário de atendimento</small><strong>Seg–Sex · 08:30–18:00</strong></span>
            </div>
            <a className="button button--lime button--featured" href={mapsUrl} target="_blank" rel="noreferrer">
              <Navigation aria-hidden="true" /> Traçar rota <ArrowUpRight aria-hidden="true" />
            </a>
            <a
              className="location-card__whatsapp"
              href="https://wa.me/5511911396107?text=Ol%C3%A1%2C%20gostaria%20de%20visitar%20a%20Flex%20Garagem."
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle aria-hidden="true" /> Falar antes de ir
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default Location
