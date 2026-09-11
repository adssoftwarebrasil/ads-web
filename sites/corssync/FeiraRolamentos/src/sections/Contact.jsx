import {
  ArrowUpRight,
  Camera,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  UsersRound,
} from 'lucide-react'
import Reveal from '../components/Reveal.jsx'

const whatsappUrl =
  'https://wa.me/557536250670?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.'

export default function Contact() {
  return (
    <section className="contact section" id="contato" aria-labelledby="contact-title">
      <div className="container contact__grid">
        <Reveal className="contact__pitch">
          <p className="eyebrow">Vamos resolver?</p>
          <h2 id="contact-title">Diga o que você precisa. A gente ajuda a encontrar.</h2>
          <p>
            Fale diretamente com a Feira Rolamentos para consultar produtos, medidas e
            disponibilidade.
          </p>
          <a
            className="button button--primary button--large"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle aria-hidden="true" /> Chamar no WhatsApp
          </a>
        </Reveal>

        <Reveal className="contact-panel" delay={100}>
          <h3>Canais de atendimento</h3>
          <ul className="contact-list">
            <li>
              <Phone aria-hidden="true" />
              <div>
                <span>Telefone e WhatsApp</span>
                <a href="tel:+557536250670">(75) 3625-0670</a>
              </div>
            </li>
            <li>
              <Mail aria-hidden="true" />
              <div>
                <span>E-mail</span>
                <a href="mailto:feirarolamentos@outlook.com">feirarolamentos@outlook.com</a>
              </div>
            </li>
            <li>
              <Clock3 aria-hidden="true" />
              <div>
                <span>Horário</span>
                <p>Segunda a sexta: 07:30–17:00</p>
                <p>Sábado: 07:30–11:30</p>
              </div>
            </li>
            <li>
              <MapPin aria-hidden="true" />
              <div>
                <span>Localização</span>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Feira+Rolamentos+Feira+de+Santana+BA"
                  target="_blank"
                  rel="noreferrer"
                >
                  Feira de Santana · BA <ArrowUpRight aria-hidden="true" size={16} />
                </a>
              </div>
            </li>
          </ul>

          <div className="social-links" aria-label="Redes sociais">
            <a
              href="https://www.instagram.com/feira_rolamentos/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram da Feira Rolamentos"
            >
              <Camera aria-hidden="true" /> Instagram
            </a>
            <a
              href="https://www.facebook.com/share/1Aj1Rhmbeq/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook da Feira Rolamentos"
            >
              <UsersRound aria-hidden="true" /> Facebook
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
