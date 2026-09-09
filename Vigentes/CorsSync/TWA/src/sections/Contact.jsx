import {
  ArrowUpRight,
  Clock3,
  Facebook,
  Instagram,
  Mail,
  MapPinned,
  MessageCircle,
  Navigation,
  Phone,
} from 'lucide-react'
import { CONTACT, createWhatsAppUrl } from '../data/siteData'

function Contact() {
  return (
    <section className="contact-section" id="contato">
      <div className="contact-glow" aria-hidden="true" />
      <div className="container contact-layout">
        <div className="contact-main" data-reveal>
          <span className="eyebrow eyebrow--light">Vamos conversar?</span>
          <h2>Seu próximo projeto pode começar com uma boa decisão técnica.</h2>
          <p>
            Conte o que você precisa. A equipe TWA avalia o cenário e ajuda a encontrar uma solução
            segura, prática e adequada ao seu ambiente.
          </p>

          <div className="contact-actions">
            <a
              className="button button--accent button--large"
              href={createWhatsAppUrl('Olá! Gostaria de falar sobre um projeto com a TWA Tecnologia.')}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={19} aria-hidden="true" />
              Chamar no WhatsApp
            </a>
            <a className="button button--ghost button--large" href={CONTACT.phoneHref}>
              <Phone size={19} aria-hidden="true" />
              {CONTACT.phoneDisplay}
            </a>
          </div>

          <div className="contact-socials">
            <span>Acompanhe a TWA</span>
            <a href={CONTACT.instagram} target="_blank" rel="noreferrer" aria-label="Instagram da TWA">
              <Instagram aria-hidden="true" />
            </a>
            <a href={CONTACT.facebook} target="_blank" rel="noreferrer" aria-label="Facebook da TWA">
              <Facebook aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="contact-panel" data-reveal>
          <div className="contact-panel-top">
            <span>Atendimento local</span>
            <Navigation aria-hidden="true" />
          </div>

          <div className="contact-detail">
            <MapPinned aria-hidden="true" />
            <div>
              <span>Endereço</span>
              <strong>{CONTACT.address}</strong>
              <a href={CONTACT.mapsUrl} target="_blank" rel="noreferrer">
                Abrir no mapa <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="contact-detail">
            <Clock3 aria-hidden="true" />
            <div>
              <span>Horário de funcionamento</span>
              <strong>Segunda a sexta</strong>
              <p>07:30–12:00 · 14:00–18:00</p>
              <small>Sábados e domingos: fechado</small>
            </div>
          </div>

          <div className="contact-detail">
            <Mail aria-hidden="true" />
            <div>
              <span>E-mail</span>
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            </div>
          </div>

          <div className="coverage-strip">
            <span>Atendemos</span>
            <div>
              <strong>Balneário Camboriú</strong>
              <strong>Itajaí</strong>
              <strong>Itapema</strong>
              <strong>Camboriú</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
