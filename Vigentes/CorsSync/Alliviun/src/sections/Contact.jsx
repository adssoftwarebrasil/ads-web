import { Camera, Clock3, Mail, MessageCircle, Users } from 'lucide-react'

const whatsappUrl =
  'https://wa.me/5562993342454?text=Ol%C3%A1%2C%20Alliviun!%20Gostaria%20de%20agendar%20uma%20sess%C3%A3o.'

function Contact() {
  return (
    <section className="section contact" id="contato" aria-labelledby="contact-title">
      <div className="contact-glow" aria-hidden="true" />
      <div className="container contact-grid">
        <div className="contact-copy" data-reveal>
          <span className="eyebrow eyebrow--light">Dê o primeiro passo</span>
          <h2 id="contact-title">Seu corpo não precisa esperar pelo alívio.</h2>
          <p>
            Conte para a Alliviun o que você está sentindo e combine o melhor horário para o seu atendimento.
          </p>
          <a className="button button--white" href={whatsappUrl} target="_blank" rel="noreferrer">
            <MessageCircle aria-hidden="true" />
            Conversar no WhatsApp
          </a>
        </div>

        <div className="contact-card" data-reveal>
          <span className="contact-card__eyebrow">Canais de atendimento</span>

          <a className="contact-row" href="https://wa.me/5562993342454" target="_blank" rel="noreferrer">
            <span className="contact-icon">
              <MessageCircle aria-hidden="true" />
            </span>
            <span>
              <small>WhatsApp Business</small>
              <strong>(62) 99334-2454</strong>
            </span>
          </a>

          <a className="contact-row" href="mailto:Massoterapiaaliviun@gmail.com">
            <span className="contact-icon">
              <Mail aria-hidden="true" />
            </span>
            <span>
              <small>E-mail</small>
              <strong>Massoterapiaaliviun@gmail.com</strong>
            </span>
          </a>

          <div className="contact-row">
            <span className="contact-icon">
              <Clock3 aria-hidden="true" />
            </span>
            <span>
              <small>Horário de atendimento</small>
              <strong>Segunda a sexta, das 8h às 18h</strong>
            </span>
          </div>

          <div className="social-links" aria-label="Redes sociais">
            <a
              href="https://www.instagram.com/alliviunmassoterapia?igsh=MWxrM3d5YWlvZmV5bA%3D%3D&utm_source=qr"
              target="_blank"
              rel="noreferrer"
            >
              <Camera aria-hidden="true" /> Instagram
            </a>
            <a href="https://www.facebook.com/aliviunmassoterapia/" target="_blank" rel="noreferrer">
              <Users aria-hidden="true" /> Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
