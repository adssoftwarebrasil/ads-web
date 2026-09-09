import { ArrowUpRight, AtSign, Clock3, Mail, MapPin, MessageCircle } from 'lucide-react'
import { mapsUrl, photo, whatsappUrl } from '../data/storeData.js'

export default function Contact() {
  return (
    <section className="section contact" id="contato">
      <div className="container contact__layout">
        <div className="contact__copy reveal">
          <span className="eyebrow">Venha encontrar o que precisa</span>
          <h2>A Fera está logo ali.</h2>
          <p>
            Fale com a nossa equipe, consulte informações e venha conhecer a variedade da loja na
            região Noroeste de Goiânia.
          </p>

          <div className="contact-list">
            <a href={mapsUrl} target="_blank" rel="noreferrer">
              <MapPin aria-hidden="true" />
              <span>
                <small>Endereço</small>
                Av. São Domingos, Qd. 19, Lote 27
              </span>
              <ArrowUpRight aria-hidden="true" />
            </a>
            <div>
              <Clock3 aria-hidden="true" />
              <span>
                <small>Horário de atendimento</small>
                Das 08:00 às 19:00
              </span>
            </div>
            <a href="mailto:nobre.arte@hotmail.com">
              <Mail aria-hidden="true" />
              <span>
                <small>E-mail</small>
                nobre.arte@hotmail.com
              </span>
              <ArrowUpRight aria-hidden="true" />
            </a>
            <a href="https://www.instagram.com/feraemtudo.ferragista/" target="_blank" rel="noreferrer">
              <AtSign aria-hidden="true" />
              <span>
                <small>Instagram</small>
                @feraemtudo.ferragista
              </span>
              <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="visit-card reveal">
          <img src={photo('fachada-01.jpeg')} alt="Fachada da Ferragista Fera em Tudo" loading="lazy" />
          <div className="visit-card__overlay" aria-hidden="true" />
          <div className="visit-card__content">
            <span>Vila Mutirão e região</span>
            <h3>Seu próximo item pode estar aqui.</h3>
            <a className="button button--orange" href={whatsappUrl} target="_blank" rel="noreferrer">
              <MessageCircle size={20} aria-hidden="true" />
              Conversar agora
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
