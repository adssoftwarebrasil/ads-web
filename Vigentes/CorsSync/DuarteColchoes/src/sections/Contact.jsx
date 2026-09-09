import { ArrowUpRight, Camera, Clock3, Mail, MessageCircle, Phone, UsersRound } from 'lucide-react'
import Reveal from '../components/Reveal'
import { contact, createWhatsAppLink } from '../data/siteData'

export default function Contact() {
  return (
    <section className="contact" id="contato">
      <div className="container contact__grid">
        <Reveal className="contact__intro">
          <p className="eyebrow">Vamos encontrar sua melhor escolha?</p>
          <h2>Conte o que você procura. A gente ajuda a comparar.</h2>
          <p>
            Fale diretamente com a equipe para consultar modelos, medidas, disponibilidade e entrega.
          </p>
          <a className="button button--red button--large" href={createWhatsAppLink()} target="_blank" rel="noreferrer">
            <MessageCircle size={21} aria-hidden="true" />
            Chamar no WhatsApp
            <ArrowUpRight size={19} aria-hidden="true" />
          </a>
        </Reveal>

        <Reveal className="contact__card" delay={80}>
          <div className="contact__card-top">
            <span>Atendimento Duarte</span>
            <div className="contact__status"><i aria-hidden="true" /> Resposta pelo WhatsApp</div>
          </div>
          <div className="contact__list">
            <a href={createWhatsAppLink()} target="_blank" rel="noreferrer">
              <span><Phone size={20} aria-hidden="true" /></span>
              <div><small>WhatsApp Business</small><strong>{contact.phoneDisplay}</strong></div>
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <a href={`mailto:${contact.email}`}>
              <span><Mail size={20} aria-hidden="true" /></span>
              <div><small>E-mail</small><strong>{contact.email}</strong></div>
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <div className="contact__hours">
              <span><Clock3 size={20} aria-hidden="true" /></span>
              <div>
                <small>Horário de atendimento</small>
                <strong>Segunda a sexta, 9h às 18h</strong>
                <p>Sábados, 9h às 13h</p>
              </div>
            </div>
          </div>
          <div className="contact__socials">
            <p>Acompanhe as novidades</p>
            <div>
              <a href={contact.instagram} target="_blank" rel="noreferrer" aria-label="Abrir Instagram da Duarte Colchões">
                <Camera size={20} /> Instagram
              </a>
              <a href={contact.facebook} target="_blank" rel="noreferrer" aria-label="Abrir Facebook da Duarte Colchões">
                <UsersRound size={20} /> Facebook
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
