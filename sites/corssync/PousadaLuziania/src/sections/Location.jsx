import { ArrowUpRight, Camera, Clock3, Mail, MapPin, MessageCircle, UsersRound } from "lucide-react";
import Reveal from "../components/Reveal";
import { contact } from "../data/siteData";
import fachada from "../assets/images/fachada.webp";

function Location() {
  return (
    <section className="section location-section" id="localizacao">
      <div className="container location-card">
        <Reveal className="location-image">
          <img src={fachada} alt="Fachada da Pousada Luziânia" loading="lazy" />
          <div className="location-image-label">
            <MapPin aria-hidden="true" />
            <span>Centro<br /><strong>Luziânia — GO</strong></span>
          </div>
        </Reveal>

        <Reveal className="location-content">
          <span className="eyebrow">Chegue e sinta-se em casa</span>
          <h2>No centro de Luziânia, pronta para receber você.</h2>
          <div className="contact-list">
            <div>
              <MapPin aria-hidden="true" />
              <span><small>Endereço</small>{contact.address}</span>
            </div>
            <div>
              <Clock3 aria-hidden="true" />
              <span><small>Funcionamento</small>Atendimento 24 horas</span>
            </div>
            <div>
              <Mail aria-hidden="true" />
              <span><small>E-mail</small><a href={`mailto:${contact.email}`}>{contact.email}</a></span>
            </div>
            <div>
              <MessageCircle aria-hidden="true" />
              <span>
                <small>WhatsApp</small>
                <a href={contact.whatsappHref} target="_blank" rel="noreferrer">{contact.phone}</a>
              </span>
            </div>
          </div>
          <div className="location-actions">
            <a className="button button-light" href={contact.whatsappHref} target="_blank" rel="noreferrer">
              Falar no WhatsApp <ArrowUpRight aria-hidden="true" />
            </a>
            <a className="location-map-link" href={contact.mapsHref} target="_blank" rel="noreferrer">
              Ver no mapa
            </a>
            <div className="social-links" aria-label="Redes sociais">
              <a href={contact.instagram} target="_blank" rel="noreferrer" aria-label="Instagram da Pousada Luziânia">
                <Camera aria-hidden="true" />
              </a>
              <a href={contact.facebook} target="_blank" rel="noreferrer" aria-label="Facebook da Pousada Luziânia">
                <UsersRound aria-hidden="true" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Location;
