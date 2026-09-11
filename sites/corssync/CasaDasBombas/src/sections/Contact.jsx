import { ArrowRight, MessageCircle, PhoneCall } from 'lucide-react'
import { site } from '../data/site'

function Contact() {
  return (
    <section className="contact" id="contato">
      <div className="contact-gears" aria-hidden="true">
        <span /><span /><span />
      </div>
      <div className="container contact-layout">
        <div className="contact-copy" data-reveal>
          <p className="eyebrow eyebrow-light">
            <span aria-hidden="true" />
            Fale com nossa equipe
          </p>
          <h2>Pressão certa, serviço perfeito.</h2>
          <p>
            Explique sua necessidade e encontre o equipamento, a peça ou o atendimento técnico para seguir em frente.
          </p>
        </div>

        <div className="contact-actions" data-reveal>
          <a className="button button-light" href={site.whatsappUrl} target="_blank" rel="noreferrer">
            <MessageCircle size={21} aria-hidden="true" />
            Chamar no WhatsApp
            <ArrowRight size={19} aria-hidden="true" />
          </a>
          <div className="contact-phone">
            <PhoneCall size={20} aria-hidden="true" />
            <div>
              <span>Telefone / WhatsApp</span>
              <strong>{site.whatsappDisplay}</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
