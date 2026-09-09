import { ArrowUpRight, MapPin, Mail, Phone, Clock3 } from "lucide-react";
import { hotel } from "../data/hotel";

export default function Location() {
  return (
    <section
      id="localizacao"
      className="section location-section container"
      aria-labelledby="location-title"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">NOS ENCONTRAMOS EM PARAÍSO</p>
          <h2 id="location-title">
            No centro da cidade.
            <br />
            <em>No caminho da sua viagem.</em>
          </h2>
        </div>
        <a
          className="text-link"
          href={hotel.maps}
          target="_blank"
          rel="noopener noreferrer"
        >
          Como chegar <ArrowUpRight size={18} aria-hidden="true" />
        </a>
      </div>
      <div className="location-grid">
        <div className="map-container">
          <iframe
            src={hotel.mapEmbed}
            title="Localização do Entre Rios Hotel no Google Maps"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
          <a
            className="map-badge"
            href={hotel.maps}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MapPin size={21} aria-hidden="true" />
            <span>
              Entre Rios Hotel<small>Seu ponto de chegada em Paraíso.</small>
            </span>
            <ArrowUpRight size={20} aria-hidden="true" />
          </a>
        </div>
        <div className="contact-card">
          <p className="eyebrow">ESTAMOS ESPERANDO POR VOCÊ</p>
          <h3>
            É sempre bom
            <br />
            receber você.
          </h3>
          <address>
            <div>
              <MapPin size={19} aria-hidden="true" />
              <span>
                {hotel.address}
                <br />
                {hotel.city}
                <br />
                CEP {hotel.postalCode}
              </span>
            </div>
            <a href={`tel:+${hotel.whatsapp}`}>
              <Phone size={19} aria-hidden="true" />
              <span>{hotel.phoneDisplay}</span>
            </a>
            <a href={`mailto:${hotel.email}`}>
              <Mail size={19} aria-hidden="true" />
              <span>{hotel.email}</span>
            </a>
            <div>
              <Clock3 size={19} aria-hidden="true" />
              <span>Atendimento 24 horas, todos os dias.</span>
            </div>
          </address>
          <a
            className="text-link"
            href={hotel.maps}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver no Google Maps <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
