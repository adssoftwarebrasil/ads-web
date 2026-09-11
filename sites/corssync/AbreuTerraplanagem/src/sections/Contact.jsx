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
import Reveal from "../components/Reveal";
import { contact, mapUrl, whatsappUrl } from "../data/siteData";

const coveragePlaces = ["Goiás", "Distrito Federal", "Cocalinho — MT", "Unaí — MG", "Barra do Garças — MT", "Triângulo Mineiro — MG", "Bonito — MS", "Inocência — MS"];

function Contact() {
  return (
    <section className="contact" id="atendimento">
      <div className="container">
        <Reveal className="coverage">
          <div className="coverage__heading">
            <p className="eyebrow eyebrow--yellow">Área de atendimento</p>
            <h2>Base em Goiânia. Trabalho que cruza divisas.</h2>
            <p>
              Atendimento em Goiás, Distrito Federal e cidades próximas às divisas, com consulta para demandas em outros estados.
            </p>
          </div>
          <div className="coverage__places" aria-label="Exemplos de regiões atendidas">
            {coveragePlaces.map((place, index) => (
              <span key={place}>
                <b>{String(index + 1).padStart(2, "0")}</b>
                {place}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="contact-card">
          <Reveal className="contact-card__cta">
            <p className="eyebrow">Sua obra começa na conversa certa</p>
            <h2>Conte onde está o terreno. A gente fala de máquina.</h2>
            <p>
              Envie a localização e a necessidade do serviço para consultar disponibilidade, atendimento e condições de locação.
            </p>
            <a className="button button--navy" href={whatsappUrl} target="_blank" rel="noreferrer">
              <MessageCircle size={20} aria-hidden="true" />
              Chamar no WhatsApp
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </Reveal>

          <Reveal className="contact-card__details" delay={100}>
            <a href={`tel:+${contact.phoneDigits}`}>
              <Phone size={22} aria-hidden="true" />
              <span>
                <small>Telefone e WhatsApp</small>
                <strong>{contact.phoneDisplay}</strong>
              </span>
            </a>
            <a href={`mailto:${contact.email}`}>
              <Mail size={22} aria-hidden="true" />
              <span>
                <small>E-mail</small>
                <strong>{contact.email}</strong>
              </span>
            </a>
            <a href={mapUrl} target="_blank" rel="noreferrer">
              <MapPin size={22} aria-hidden="true" />
              <span>
                <small>Endereço</small>
                <strong>{contact.address}</strong>
              </span>
            </a>
            <div className="contact-detail">
              <Clock3 size={22} aria-hidden="true" />
              <span>
                <small>Horário de funcionamento</small>
                <strong>{contact.hoursWeek}</strong>
                <strong>{contact.hoursSaturday}</strong>
              </span>
            </div>
            <div className="contact-socials">
              <a href={contact.instagramUrl} target="_blank" rel="noreferrer">
                <Instagram size={20} aria-hidden="true" />
                {contact.instagram}
              </a>
              <span>
                <Facebook size={20} aria-hidden="true" />
                {contact.facebook}
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Contact;
