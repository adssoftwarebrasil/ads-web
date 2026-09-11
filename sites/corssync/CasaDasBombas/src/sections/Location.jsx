import { ArrowUpRight, Clock3, Instagram, Mail, MapPin } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import facadeImage from '../assets/fachada-casa-das-bombas.jpeg'
import { site } from '../data/site'

function Location() {
  return (
    <section className="section location" id="localizacao">
      <div className="container location-layout">
        <div className="location-photo" data-reveal>
          <img
            src={facadeImage}
            alt="Fachada vermelha da Casa das Bombas e Compressores na Avenida Constantino Nery, em Manaus"
            width="1280"
            height="720"
            loading="lazy"
          />
          <span className="location-photo-label">Nossa loja em Manaus</span>
        </div>

        <div className="location-content">
          <SectionHeading
            eyebrow="Onde estamos"
            title="Assistência e equipamentos no coração de Manaus."
            description="Visite nossa loja ou fale com a equipe antes de sair de casa para confirmar o atendimento que você precisa."
          />

          <div className="location-details" data-reveal>
            <div className="location-detail location-detail-wide">
              <MapPin size={23} aria-hidden="true" />
              <div>
                <span>Endereço</span>
                <p>{site.address}</p>
                <a href={site.mapsUrl} target="_blank" rel="noreferrer">
                  Abrir no mapa <ArrowUpRight size={16} />
                </a>
              </div>
            </div>

            <div className="location-detail">
              <Clock3 size={23} aria-hidden="true" />
              <div>
                <span>Horários</span>
                <p>{site.hours.weekdays}<br />{site.hours.saturday}</p>
              </div>
            </div>

            <div className="location-detail">
              <Instagram size={23} aria-hidden="true" />
              <div>
                <span>Instagram</span>
                <a href={site.instagramUrl} target="_blank" rel="noreferrer">{site.instagramHandle}</a>
              </div>
            </div>

            <div className="location-detail location-detail-wide">
              <Mail size={23} aria-hidden="true" />
              <div>
                <span>E-mails</span>
                <div className="location-email-list">
                  {site.emails.map((email) => (
                    <a href={`mailto:${email}`} key={email}>{email}</a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Location
