import { ArrowUpRight, Clock3, Mail, MapPin, Phone } from 'lucide-react';
import { business, mapsUrl } from '../data/business';
import WhatsAppLink from '../components/WhatsAppLink';

export default function Contact() {
  return (
    <section
      className="contact-section section-space"
      id="contato"
      aria-labelledby="contact-title"
    >
      <div className="container contact-grid">
        <div className="contact-content">
          <span className="eyebrow">ESTAMOS POR PERTO.</span>
          <h2 id="contact-title">
            Precisou?
            <br />
            Chama a Primavera.
          </h2>
          <p>
            Peça seu gás ou sua água, tire suas dúvidas e combine a entrega. Vai
            ser um prazer atender você.
          </p>
          <WhatsAppLink arrow />
          <a className="contact-phone" href={`tel:${business.phone}`}>
            <Phone size={20} aria-hidden="true" />
            {business.phoneDisplay}
          </a>
        </div>
        <div className="contact-details">
          <span className="contact-location-label">
            <span className="small-dot" /> PRIMAVERA GÁS · SINOP
          </span>
          <div className="contact-address">
            <MapPin size={25} aria-hidden="true" />
            <div>
              <h3>Venha nos visitar</h3>
              <address>
                {business.address}
                <br />
                {business.neighborhood} · {business.city}
              </address>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                Como chegar <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="contact-hours">
            <Clock3 size={23} aria-hidden="true" />
            <div>
              <h3>Horário de atendimento</h3>
              <p>
                Das <strong>{business.hours}</strong>
              </p>
            </div>
          </div>
          <div className="contact-email">
            <Mail size={23} aria-hidden="true" />
            <div>
              <h3>Prefere enviar um e-mail?</h3>
              <a href={`mailto:${business.email}`}>{business.email}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
