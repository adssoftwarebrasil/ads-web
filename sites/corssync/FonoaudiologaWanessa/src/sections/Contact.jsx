import {
  ArrowUpRight,
  Clock3,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
} from 'lucide-react'
import {
  email,
  instagramHandle,
  instagramUrl,
  mapsUrl,
  phoneDisplay,
  phoneHref,
  whatsappUrl,
} from '../data/contact.js'

function Contact() {
  return (
    <section className="contact section" id="contato" aria-labelledby="contact-title">
      <div className="container contact-shell">
        <div className="contact-copy">
          <span className="eyebrow eyebrow--light">Vamos conversar?</span>
          <h2 id="contact-title">O próximo passo pode começar com uma mensagem.</h2>
          <p>
            Conte brevemente o que você procura e tire suas dúvidas sobre avaliação e
            atendimento fonoaudiológico.
          </p>
          <a className="button button--light" href={whatsappUrl} target="_blank" rel="noreferrer">
            <MessageCircle aria-hidden="true" />
            Chamar no WhatsApp
          </a>
          <small>Atendimento para Goiânia, Aparecida de Goiânia e Trindade.</small>
        </div>

        <div className="contact-card">
          <div className="contact-card-row">
            <span className="contact-card-icon">
              <MapPin aria-hidden="true" />
            </span>
            <div>
              <strong>Endereço</strong>
              <p>
                Av. São Luiz, 597, Qd. 01, Lt. 29, Santa Rita, Goiânia–GO
                <br />
                CEP 74370-476 · ao lado do Moinho dos Ventos
              </p>
              <a href={mapsUrl} target="_blank" rel="noreferrer">
                <Navigation aria-hidden="true" />
                Abrir no mapa
              </a>
            </div>
          </div>

          <div className="contact-card-row contact-card-row--split">
            <span>
              <Clock3 aria-hidden="true" />
              <span>
                <strong>Horário</strong>
                <small>7h às 18h</small>
              </span>
            </span>
            <a href={phoneHref}>
              <Phone aria-hidden="true" />
              <span>
                <strong>Telefone</strong>
                <small>{phoneDisplay}</small>
              </span>
            </a>
          </div>

          <div className="contact-links">
            <a href={`mailto:${email}`}>
              <Mail aria-hidden="true" />
              <span>{email}</span>
              <ArrowUpRight aria-hidden="true" />
            </a>
            <a href={instagramUrl} target="_blank" rel="noreferrer">
              <Instagram aria-hidden="true" />
              <span>{instagramHandle}</span>
              <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
