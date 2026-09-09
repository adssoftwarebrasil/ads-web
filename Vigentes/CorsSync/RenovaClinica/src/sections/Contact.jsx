import {
  ArrowUpRight,
  Clock3,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import facade from "../assets/fachada-renova.jpg";
import Reveal from "../components/Reveal";
import { contact, coverageCities, mapUrl, whatsappUrl } from "../data/content";

function Contact() {
  return (
    <section className="contact-section section" id="contato" aria-labelledby="contact-title">
      <div className="container contact-shell">
        <Reveal className="contact-visual">
          <img src={facade} alt="Fachada da Renova Clínica Integrada" loading="lazy" />
          <div className="contact-visual-copy">
            <p className="eyebrow eyebrow-light">Seu próximo cuidado começa aqui</p>
            <h2 id="contact-title">Vamos cuidar de você?</h2>
            <p>
              Fale com a equipe, tire suas dúvidas e consulte os horários disponíveis para sua
              avaliação.
            </p>
            <a
              className="button button-gold"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={18} aria-hidden="true" />
              Chamar no WhatsApp
            </a>
          </div>
        </Reveal>

        <Reveal className="contact-details" delay={100}>
          <div className="contact-detail">
            <div className="contact-icon">
              <MapPin aria-hidden="true" />
            </div>
            <div>
              <span>Endereço</span>
              <p>{contact.address}</p>
              <p>{contact.city}</p>
              <a href={mapUrl} target="_blank" rel="noreferrer">
                Ver rota no mapa <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="contact-detail">
            <div className="contact-icon">
              <Clock3 aria-hidden="true" />
            </div>
            <div>
              <span>Horário informado</span>
              <p>{contact.hours}</p>
              <small>Confirme a disponibilidade da especialidade pelo WhatsApp.</small>
            </div>
          </div>

          <div className="contact-detail contact-detail-compact">
            <div className="contact-icon">
              <Phone aria-hidden="true" />
            </div>
            <div>
              <span>Telefone e WhatsApp</span>
              <a className="contact-value" href={contact.phoneHref}>
                {contact.phoneDisplay}
              </a>
            </div>
          </div>

          <div className="contact-detail contact-detail-compact">
            <div className="contact-icon">
              <Mail aria-hidden="true" />
            </div>
            <div>
              <span>E-mail</span>
              <a className="contact-value" href={`mailto:${contact.email}`}>
                {contact.email}
              </a>
            </div>
          </div>

          <div className="social-reference">
            <span>Encontre a clínica nas redes</span>
            <div>
              <Instagram size={18} aria-hidden="true" />
              <Facebook size={18} aria-hidden="true" />
              <p>{contact.socialName}</p>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="container coverage-row">
        <span>Atendemos pacientes de</span>
        <div>
          {coverageCities.map((city) => (
            <span key={city}>{city}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
