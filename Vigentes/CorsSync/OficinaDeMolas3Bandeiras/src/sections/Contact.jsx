import {
  ArrowUpRight,
  Clock3,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import { whatsappUrl } from '../constants.js'

const cities = [
  'Nova Olímpia',
  'Denise',
  'Barra do Bugres',
  'Tangará da Serra',
  'Campo Novo do Parecis',
  'Santo Afonso',
  'Arenápolis',
]

const mapUrl = 'https://www.google.com/maps/search/?api=1&query=Av.%20Andr%C3%A9%20Maggi%2C%20quadra%2001%20lote%2017%2C%20Jardim%20Comercial%2C%20Nova%20Ol%C3%ADmpia%20-%20MT'

function Contact() {
  return (
    <section className="contact section" id="atendimento">
      <div className="contact-background" aria-hidden="true" />
      <div className="container">
        <div className="coverage-grid">
          <Reveal className="coverage-copy">
            <p className="eyebrow"><span /> Atendimento regional</p>
            <h2>Seu veículo não pode ficar parado.</h2>
            <p>
              Estamos em Nova Olímpia e atendemos motoristas, frotas e empresas de toda a região.
              Fale com nossa equipe e consulte o serviço que você precisa.
            </p>
            <div className="city-list" aria-label="Cidades atendidas">
              {cities.map((city, index) => <span key={city}><b>{String(index + 1).padStart(2, '0')}</b>{city}</span>)}
            </div>
          </Reveal>

          <Reveal className="contact-card" delay={100}>
            <div className="contact-card-header" id="contato">
              <span>FALE COM A 3 BANDEIRAS</span>
              <h3>Vamos colocar seu veículo em movimento.</h3>
            </div>
            <a className="contact-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
              <span className="contact-icon"><MessageCircle aria-hidden="true" /></span>
              <span><small>WhatsApp</small><strong>(65) 99914-3416</strong></span>
              <ArrowUpRight aria-hidden="true" />
            </a>
            <a className="contact-row" href="tel:+5565999143416">
              <Phone aria-hidden="true" />
              <span><small>Telefone</small>(65) 99914-3416</span>
            </a>
            <a className="contact-row" href="mailto:postodemolas03bandeiras@gmail.com">
              <Mail aria-hidden="true" />
              <span><small>E-mail</small>postodemolas03bandeiras@gmail.com</span>
            </a>
            <a className="contact-row" href={mapUrl} target="_blank" rel="noreferrer">
              <MapPin aria-hidden="true" />
              <span><small>Endereço</small>Av. André Maggi, Qd. 01, Lt. 17 — Jardim Comercial, Nova Olímpia-MT</span>
            </a>
            <div className="contact-row hours-row">
              <Clock3 aria-hidden="true" />
              <span>
                <small>Horário</small>
                Seg. a sex.: 07h às 11h e 13h às 17h<br />
                Sábado: 07h às 11h30
              </span>
            </div>
            <div className="contact-socials" aria-label="Redes sociais">
              <a href="https://www.instagram.com/postodemolas3bandeiras?igsh=cjV2azUwZHo5Y296" target="_blank" rel="noreferrer">
                <Instagram aria-hidden="true" /> Instagram
              </a>
              <a href="https://www.facebook.com/share/1DxP6LMDYR/?mibextid=wwXIfr" target="_blank" rel="noreferrer">
                <Facebook aria-hidden="true" /> Facebook
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default Contact
