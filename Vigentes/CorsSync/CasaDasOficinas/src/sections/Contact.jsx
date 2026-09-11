import { ArrowUpRight, Clock3, MapPin, MessageCircle, Phone } from 'lucide-react'
import Reveal from '../components/Reveal'
import facadeImage from '../assets/fachada-rua.jpg'
import { whatsappUrl } from '../data/siteData'

export default function Contact() {
  return (
    <section className="contact section" id="contato">
      <div className="container">
        <Reveal className="contact__panel">
          <div className="contact__content">
            <p className="eyebrow eyebrow--yellow"><span /> Vamos resolver?</p>
            <h2>Conte o que seu carro ou sua oficina precisa.</h2>
            <p>
              Chame pelo WhatsApp, ligue ou venha até a loja. Nossa equipe está pronta
              para orientar seu atendimento.
            </p>
            <div className="contact__actions">
              <a className="button button--yellow" href={whatsappUrl} target="_blank" rel="noreferrer">
                <MessageCircle aria-hidden="true" /> Chamar no WhatsApp
              </a>
              <a className="button button--outline-light" href="tel:+557536148613">
                <Phone aria-hidden="true" /> (75) 3614-8613
              </a>
            </div>

            <dl className="contact__details">
              <div>
                <dt><MapPin aria-hidden="true" /> Endereço</dt>
                <dd>Rua Carlos Valadares, 110, Centro<br />Feira de Santana/BA</dd>
              </div>
              <div>
                <dt><Clock3 aria-hidden="true" /> Horários</dt>
                <dd>Seg a sex, 7h30 às 18h<br />Sábado, 7h30 às 13h</dd>
              </div>
            </dl>
          </div>

          <div className="contact__photo">
            <img src={facadeImage} alt="Fachada da Casa das Oficinas na Rua Carlos Valadares" loading="lazy" />
            <a
              href="https://www.google.com/maps/search/?api=1&query=Rua%20Carlos%20Valadares%2C%20110%2C%20Centro%2C%20Feira%20de%20Santana%2FBA"
              target="_blank"
              rel="noreferrer"
            >
              Abrir no mapa <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
