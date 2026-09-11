import Icon from "../components/Icon";
import { company } from "../data/siteData";

const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  company.mapQuery,
)}&output=embed`;

const mapDirectionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  company.mapQuery,
)}`;

function Location() {
  return (
    <section className="location section" id="localizacao">
      <div className="container">
        <div className="location__header reveal">
          <div>
            <span className="section-kicker">Endereço da loja</span>
            <h2>Leve seu equipamento até nossa unidade.</h2>
            <p className="location__service-note">
              Para manutenção de impressoras, notebooks e computadores, o
              atendimento técnico é realizado exclusivamente na loja.
            </p>
          </div>
          <div className="location__address">
            <Icon name="mapPin" size={24} />
            <div>
              <span>Nossa loja</span>
              <strong>{company.address}</strong>
            </div>
          </div>
        </div>

        <div className="location__map-wrap reveal reveal--delay-1">
          <iframe
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={mapUrl}
            title="Mapa da localização da Kadima Soluções em Informática"
          />
          <a
            className="location__map-link"
            href={mapDirectionsUrl}
            rel="noreferrer"
            target="_blank"
          >
            Abrir rota no Google Maps
            <Icon name="external" size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Location;
