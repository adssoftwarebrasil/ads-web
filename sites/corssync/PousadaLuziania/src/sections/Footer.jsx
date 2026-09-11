import { ArrowUp } from "lucide-react";
import logo from "../assets/images/logo-horizontal.webp";
import { contact } from "../data/siteData";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <img src={logo} alt="Pousada Luziânia" />
          <p>Conforto, descanso e tranquilidade como na sua casa, no coração de Luziânia.</p>
        </div>
        <div className="footer-links">
          <div>
            <span>Explore</span>
            <a href="#pousada">A pousada</a>
            <a href="#acomodacoes">Acomodações</a>
            <a href="#galeria">Galeria</a>
          </div>
          <div>
            <span>Contato</span>
            <a href={contact.whatsappHref} target="_blank" rel="noreferrer">WhatsApp: {contact.phone}</a>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <a href={contact.instagram} target="_blank" rel="noreferrer">Instagram</a>
            <a href={contact.facebook} target="_blank" rel="noreferrer">Facebook</a>
          </div>
        </div>
        <a className="back-top" href="#inicio" aria-label="Voltar ao início">
          <ArrowUp aria-hidden="true" />
        </a>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Pousada Luziânia</span>
        <span>Luziânia — Goiás — Brasil</span>
      </div>
    </footer>
  );
}

export default Footer;
