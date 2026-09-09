import {
  ArrowUpRight,
  Camera,
  Clock3,
  Mail,
  MessageCircle,
  Users,
} from "lucide-react";
import { contact } from "../data/siteData";

export function Contact() {
  return (
    <section className="contact" id="contato">
      <div className="contact__orb contact__orb--one" aria-hidden="true" />
      <div className="contact__orb contact__orb--two" aria-hidden="true" />
      <div className="container contact__inner">
        <div className="contact__headline" data-reveal>
          <span className="eyebrow">Vamos conversar</span>
          <h2>
            O próximo mergulho começa com uma <em>boa avaliação.</em>
          </h2>
          <p>
            Conte o que sua piscina precisa. A equipe da Oficina das Piscinas
            orienta você sobre o próximo passo.
          </p>
          <a
            className="button button--primary button--large"
            href={contact.whatsappUrl}
            target="_blank"
            rel="noreferrer"
          >
            Chamar no WhatsApp
            <ArrowUpRight size={19} />
          </a>
        </div>

        <div className="contact__cards" data-reveal>
          <a
            className="contact-card contact-card--featured"
            href={contact.whatsappUrl}
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-card__icon">
              <MessageCircle size={23} />
            </span>
            <small>WhatsApp Business</small>
            <strong>{contact.whatsappDisplay}</strong>
            <ArrowUpRight className="contact-card__arrow" size={20} />
          </a>

          <a
            className="contact-card"
            href={`mailto:${contact.email}`}
          >
            <span className="contact-card__icon">
              <Mail size={22} />
            </span>
            <small>E-mail</small>
            <strong>{contact.email}</strong>
            <ArrowUpRight className="contact-card__arrow" size={20} />
          </a>

          <div className="contact-card">
            <span className="contact-card__icon">
              <Clock3 size={22} />
            </span>
            <small>Atendimento</small>
            <strong>Segunda a sexta</strong>
            <span>Horário comercial</span>
          </div>

          <div className="contact-card contact-card--social">
            <small>Acompanhe os trabalhos</small>
            <div>
              <a
                href={contact.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label={`Instagram ${contact.instagramHandle}`}
              >
                <Camera size={21} />
                <span>{contact.instagramHandle}</span>
              </a>
              <a
                href={contact.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label={`Facebook ${contact.facebookHandle}`}
              >
                <Users size={21} />
                <span>{contact.facebookHandle}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
