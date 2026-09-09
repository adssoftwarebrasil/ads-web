import {
  ArrowUpRight,
  Instagram,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
} from "lucide-react";
import Reveal from "../components/Reveal";
import storefront from "../assets/fachada-tj-mix.png";
import {
  instagramDisplay,
  instagramHref,
  locationDistrict,
  locationPostalCode,
  locationShort,
  locationStreet,
  mapsHref,
  whatsappDisplay,
  whatsappHref,
} from "../siteData";

function StoreContact() {
  return (
    <section className="section store" id="loja">
      <div className="container store__shell">
        <Reveal className="store__image">
          <img
            src={storefront}
            alt="Fachada da loja TJ Mix em Goiânia"
            loading="lazy"
          />
          <div className="store__image-label">
            <MapPin aria-hidden="true" />
            <span>
              <small>Loja física</small>
              {locationShort}
            </span>
          </div>
        </Reveal>

        <Reveal className="store__content" delay={90}>
          <span className="eyebrow">Pode chegar</span>
          <h2>Atendimento que entende de obra.</h2>
          <p>
            Traga sua lista, explique o projeto e converse com a equipe para encontrar
            os materiais mais adequados para cada etapa.
          </p>

          <div className="store__contacts">
            <a href={mapsHref} target="_blank" rel="noreferrer">
              <span className="store__contact-icon">
                <Navigation aria-hidden="true" />
              </span>
              <span>
                <small>Onde estamos</small>
                <strong>{locationStreet}</strong>
                <span>{locationDistrict}</span>
                <span>{locationPostalCode}</span>
              </span>
              <ArrowUpRight aria-hidden="true" />
            </a>
            <a href={whatsappHref} target="_blank" rel="noreferrer">
              <span className="store__contact-icon">
                <Phone aria-hidden="true" />
              </span>
              <span>
                <small>WhatsApp</small>
                {whatsappDisplay}
              </span>
              <ArrowUpRight aria-hidden="true" />
            </a>
            <a href={instagramHref} target="_blank" rel="noreferrer">
              <span className="store__contact-icon">
                <Instagram aria-hidden="true" />
              </span>
              <span>
                <small>Acompanhe novidades</small>
                {instagramDisplay}
              </span>
              <ArrowUpRight aria-hidden="true" />
            </a>
          </div>

          <a
            className="button button--dark button--large"
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={20} aria-hidden="true" />
            Enviar sua lista pelo WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export default StoreContact;
