import {
  ArrowUp,
  ArrowUpRight,
  Instagram,
  MapPin,
  MessageCircle,
} from "lucide-react";
import Brand from "../components/Brand";
import {
  instagramDisplay,
  instagramHref,
  locationDistrict,
  locationDisplay,
  locationPostalCode,
  locationStreet,
  mapsHref,
  whatsappDisplay,
  whatsappHref,
} from "../siteData";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__cta">
        <div>
          <span className="eyebrow">Sua obra começa com uma boa conversa</span>
          <h2>Envie sua lista. A TJ Mix ajuda você a encontrar o que precisa.</h2>
        </div>
        <a
          className="button button--gold button--large"
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
        >
          <MessageCircle size={20} aria-hidden="true" />
          Chamar no WhatsApp
          <ArrowUpRight size={18} aria-hidden="true" />
        </a>
      </div>

      <div className="footer__main">
        <div className="container footer__grid">
          <div className="footer__brand">
            <a href="#inicio" aria-label="Voltar ao início">
              <Brand />
            </a>
            <p>
              Materiais para construção, reforma e acabamento reunidos em um só lugar.
            </p>
            <a
              className="footer__social"
              href={instagramHref}
              target="_blank"
              rel="noreferrer"
            >
              <Instagram size={18} aria-hidden="true" />
              {instagramDisplay}
            </a>
          </div>

          <div className="footer__nav">
            <strong>Navegue</strong>
            <a href="#inicio">Início</a>
            <a href="#categorias">Categorias</a>
            <a href="#catalogo">Catálogo completo</a>
            <a href="#recomenda">TJ Mix recomenda</a>
            <a href="#loja">Visite a loja</a>
          </div>

          <div className="footer__nav footer__nav--products">
            <strong>Encontre</strong>
            <a href="#catalogo">Tintas e texturas</a>
            <a href="#catalogo">Ferramentas</a>
            <a href="#catalogo">Louças e metais</a>
            <a href="#catalogo">Pisos e revestimentos</a>
            <a href="#catalogo">Impermeabilizantes</a>
          </div>

          <div className="footer__contact-card">
            <span className="footer__contact-label">Loja e atendimento</span>
            <a href={mapsHref} target="_blank" rel="noreferrer">
              <MapPin size={20} aria-hidden="true" />
              <span>
                <strong>{locationStreet}</strong>
                <small>{locationDistrict}</small>
                <small>{locationPostalCode}</small>
              </span>
            </a>
            <a href={whatsappHref} target="_blank" rel="noreferrer">
              <MessageCircle size={20} aria-hidden="true" />
              <span>
                <small>WhatsApp</small>
                <strong>{whatsappDisplay}</strong>
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} TJ Mix. Todos os direitos reservados.</span>
        <span className="footer__address-summary">{locationDisplay}</span>
        <a href="#inicio">
          Voltar ao topo
          <ArrowUp size={16} aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
