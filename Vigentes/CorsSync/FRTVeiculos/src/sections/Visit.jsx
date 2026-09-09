import { ArrowUpRight, Camera, Clock3, Mail, MapPin, MessageCircle, Phone, UsersRound } from "lucide-react";
import Reveal from "../components/Reveal";
import { contact, whatsappUrl } from "../data/siteData";
import storefrontPhoto from "../assets/media/storefront-wide.webp";

function Visit() {
  return (
    <section className="visit section section--dark" id="visite">
      <div className="visit-road" aria-hidden="true" />
      <div className="container visit-layout">
        <Reveal className="visit-copy">
          <p className="eyebrow eyebrow--light">
            <span aria-hidden="true" />
            Venha conhecer de perto
          </p>
          <h2>O próximo passo pode começar hoje.</h2>
          <p>
            Passe na FRT Veículos, conheça as opções disponíveis e converse com a equipe sem compromisso.
          </p>
          <a className="button" href={whatsappUrl} target="_blank" rel="noreferrer">
            <MessageCircle size={19} aria-hidden="true" />
            Chamar no WhatsApp
          </a>
        </Reveal>

        <Reveal className="visit-card" delay={100}>
          <div className="visit-card__photo">
            <img src={storefrontPhoto} alt="Fachada da FRT Veículos no Centro de Trindade" width="1280" height="960" loading="lazy" />
            <a href={contact.directions} target="_blank" rel="noreferrer">
              Abrir no mapa <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
          <div className="visit-card__details">
            <div>
              <MapPin size={20} aria-hidden="true" />
              <p>
                <strong>{contact.city}</strong>
                {contact.address}
              </p>
            </div>
            <div>
              <Clock3 size={20} aria-hidden="true" />
              <p>
                <strong>Horário de atendimento</strong>
                {contact.hours}
              </p>
            </div>
            <a href={`tel:+${contact.phone}`}>
              <Phone size={20} aria-hidden="true" />
              <p>
                <strong>Telefone e WhatsApp</strong>
                {contact.phoneDisplay}
              </p>
            </a>
            <a href={`mailto:${contact.email}`}>
              <Mail size={20} aria-hidden="true" />
              <p>
                <strong>E-mail</strong>
                {contact.email}
              </p>
            </a>
          </div>
          <div className="visit-card__socials">
            <span>Acompanhe a FRT</span>
            <div>
              <a href={contact.instagram} target="_blank" rel="noreferrer" aria-label="Instagram da FRT Veículos">
                <Camera size={19} aria-hidden="true" /> @frt.veiculos
              </a>
              <a href={contact.facebook} target="_blank" rel="noreferrer" aria-label="Facebook da FRT Veículos">
                <UsersRound size={19} aria-hidden="true" /> Frt.veiculos
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Visit;
