import { ArrowUp, ArrowUpRight, AtSign, Mail, MapPin, Phone, ThumbsUp } from "lucide-react";
import { contact } from "../data/siteData";
import Logo from "./Logo";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__cta">
        <div>
          <span>Atacado e varejo</span>
          <h2>Precisa de embalagens para o seu negócio?</h2>
          <p>Converse com a equipe e consulte as opções disponíveis.</p>
        </div>
        <a className="button button--dark" href={contact.whatsapp} target="_blank" rel="noreferrer">
          Pedir atendimento
          <ArrowUpRight size={19} aria-hidden="true" />
        </a>
      </div>

      <div className="container footer__main">
        <div className="footer__brand">
          <Logo compact />
          <p>Embalagens e descartáveis no varejo e atacado em Feira de Santana e cidades vizinhas.</p>
          <span>Empresa familiar desde 1997</span>
        </div>

        <nav className="footer__column" aria-label="Navegação do rodapé">
          <strong>Navegue</strong>
          <a href="#produtos">Produtos</a>
          <a href="#destaques">Destaques</a>
          <a href="#historia">Nossa história</a>
          <a href="#contato">Onde estamos</a>
        </nav>

        <div className="footer__column">
          <strong>Atendimento</strong>
          <a href={contact.phoneHref}>
            <Phone size={16} aria-hidden="true" />
            {contact.phoneDisplay}
          </a>
          <a href={`mailto:${contact.email}`}>
            <Mail size={16} aria-hidden="true" />
            <span>{contact.email}</span>
          </a>
          <a href={contact.maps} target="_blank" rel="noreferrer">
            <MapPin size={16} aria-hidden="true" />
            Centro, Feira de Santana
          </a>
        </div>

        <div className="footer__column footer__social">
          <strong>Acompanhe</strong>
          <a href={contact.instagram} target="_blank" rel="noreferrer">
            <AtSign size={17} aria-hidden="true" />
            Instagram
          </a>
          <a href={contact.facebook} target="_blank" rel="noreferrer">
            <ThumbsUp size={17} aria-hidden="true" />
            Facebook
          </a>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} Rebouças Embalagens</span>
        <span>Feira de Santana — Bahia</span>
        <a href="#inicio" aria-label="Voltar ao início">
          Voltar ao topo
          <ArrowUp aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
