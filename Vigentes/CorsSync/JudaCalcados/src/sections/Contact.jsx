import { Clock3, Mail, MapPin, MessageCircle, Navigation } from 'lucide-react'

const whatsappUrl =
  'https://wa.me/556492674193?text=Ol%C3%A1%2C%20Jud%C3%A1%20Cal%C3%A7ados!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es.'
const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=Rua%20Fadua%20Farah%20Q.%2047%20L.%2002%20Professor%20Jamil%20GO'

export default function Contact() {
  return (
    <section className="section contact" id="contato">
      <div className="container contact__shell" data-reveal>
        <div className="contact__intro">
          <p className="eyebrow">Venha nos visitar</p>
          <h2>Seu próximo favorito pode estar esperando por você.</h2>
          <p>Conheça os modelos de perto ou fale com a nossa equipe para consultar novidades e disponibilidade.</p>
          <div className="contact__actions">
            <a className="button button--gold" href={whatsappUrl} target="_blank" rel="noreferrer">
              <MessageCircle size={19} aria-hidden="true" /> Conversar no WhatsApp
            </a>
            <a className="button button--light-line" href={mapsUrl} target="_blank" rel="noreferrer">
              <Navigation size={18} aria-hidden="true" /> Como chegar
            </a>
          </div>
        </div>

        <div className="contact__details">
          <a href={mapsUrl} target="_blank" rel="noreferrer" className="contact-item">
            <MapPin aria-hidden="true" />
            <span><small>Endereço</small>Rua Fadua Farah, Qd. 47, Lt. 02<br />Professor Jamil - GO</span>
          </a>
          <div className="contact-item">
            <Clock3 aria-hidden="true" />
            <span><small>Horário de atendimento</small>08:00 às 19:00</span>
          </div>
          <a href="mailto:calcadosjuda@gmail.com" className="contact-item">
            <Mail aria-hidden="true" />
            <span><small>E-mail</small>calcadosjuda@gmail.com</span>
          </a>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="contact-item">
            <MessageCircle aria-hidden="true" />
            <span><small>Telefone / WhatsApp</small>(64) 9267-4193</span>
          </a>
        </div>
      </div>
    </section>
  )
}
