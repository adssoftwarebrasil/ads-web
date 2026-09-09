import { ArrowUpRight, AtSign, Clock3, Mail, MapPin, Phone, ThumbsUp } from "lucide-react";
import { contact } from "../data/siteData";
import Reveal from "../components/Reveal";

function Contact() {
  return (
    <section className="contact section" id="contato">
      <div className="container">
        <Reveal className="contact__panel">
          <div className="contact__intro">
            <span className="eyebrow">Venha até a Rebouças</span>
            <h2>Sua próxima compra começa com uma boa conversa.</h2>
            <p>Atendemos Feira de Santana e cidades vizinhas. Fale com a equipe ou visite nossa loja no Centro.</p>
            <div className="contact__actions">
              <a className="button button--light" href={contact.whatsapp} target="_blank" rel="noreferrer">
                Chamar no WhatsApp
                <ArrowUpRight size={19} aria-hidden="true" />
              </a>
              <a className="button button--outline-light" href={contact.phoneHref}>
                <Phone size={18} aria-hidden="true" />
                Ligar agora
              </a>
            </div>
          </div>

          <div className="contact__details">
            <a href={contact.maps} target="_blank" rel="noreferrer">
              <span><MapPin aria-hidden="true" /></span>
              <div>
                <small>Endereço</small>
                <strong>{contact.address}</strong>
                <em>Ver no mapa <ArrowUpRight size={15} aria-hidden="true" /></em>
              </div>
            </a>
            <div>
              <span><Clock3 aria-hidden="true" /></span>
              <div>
                <small>Horário</small>
                <strong>Segunda a sexta, 08h às 17h</strong>
                <strong>Sábado, 08h às 12h</strong>
              </div>
            </div>
            <a href={contact.phoneHref}>
              <span><Phone aria-hidden="true" /></span>
              <div>
                <small>Telefone e WhatsApp</small>
                <strong>{contact.phoneDisplay}</strong>
              </div>
            </a>
            <a href={`mailto:${contact.email}`}>
              <span><Mail aria-hidden="true" /></span>
              <div>
                <small>E-mail</small>
                <strong>{contact.email}</strong>
              </div>
            </a>
          </div>
        </Reveal>

        <Reveal className="contact__social" delay={80}>
          <p>Acompanhe a Rebouças</p>
          <div>
            <a href={contact.instagram} target="_blank" rel="noreferrer">
              <AtSign aria-hidden="true" />
              @reboucasembalagens
            </a>
            <a href={contact.facebook} target="_blank" rel="noreferrer">
              <ThumbsUp aria-hidden="true" />
              reboucasembalagens
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Contact;
