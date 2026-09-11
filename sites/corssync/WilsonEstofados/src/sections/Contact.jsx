import { ArrowUpRight, Clock3, Mail, MapPin, Phone } from "lucide-react";
import { business, mapsUrl } from "../data/site.js";
import WhatsAppLink from "../components/WhatsAppLink.jsx";

function Instagram() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section
      className="contact-section section-space"
      id="contato"
      aria-labelledby="contact-title"
    >
      <div className="container">
        <div className="contact-intro">
          <span className="eyebrow">PERTINHO DE VOCÊ</span>
          <h2 id="contact-title">
            O próximo passo é<br />
            <em>uma boa conversa.</em>
          </h2>
          <p>
            Gostou de um modelo ou quer renovar seu estofado?
            <br />A gente está aqui para ouvir a sua ideia.
          </p>
          <div className="contact-actions">
            <WhatsAppLink>Conversar pelo WhatsApp</WhatsAppLink>
            <a
              href={`tel:+${business.phone}`}
              className="button button-outline"
            >
              <Phone size={18} />
              {business.displayPhone}
            </a>
          </div>
        </div>
        <div className="contact-details">
          <div>
            <MapPin size={22} strokeWidth={1.4} />
            <h3>Venha nos encontrar</h3>
            <p>
              {business.address}
              <br />
              {business.location}
            </p>
            <a
              className="text-link"
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Abrir no mapa <ArrowUpRight size={16} />
            </a>
          </div>
          <div>
            <Clock3 size={22} strokeWidth={1.4} />
            <h3>Conte com a gente</h3>
            <p>
              Atendimento {business.hours.toLowerCase()}.<br />
              Anápolis, Pirenópolis e região.
            </p>
            <span className="contact-subtle">
              Consulte os dias de atendimento pelo WhatsApp.
            </span>
          </div>
          <div>
            <Instagram size={22} strokeWidth={1.4} />
            <h3>Vamos nos conectar</h3>
            <a
              className="contact-social"
              href={business.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              @wilsonestofados <ArrowUpRight size={15} />
            </a>
            <a className="contact-email" href={`mailto:${business.email}`}>
              <Mail size={14} />
              {business.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
