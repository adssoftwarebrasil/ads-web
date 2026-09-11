import { ArrowUp } from "lucide-react";
import logo from "../assets/logo-renova.png";
import { contact } from "../data/content";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <img src={logo} alt="Renova Clínica Integrada" />
          <p>Medicina e odontologia em um ambiente pensado para cuidar de você por inteiro.</p>
        </div>
        <div className="footer-column">
          <span className="footer-label">Visite</span>
          <p>{contact.address}</p>
          <p>{contact.city}</p>
        </div>
        <div className="footer-column">
          <span className="footer-label">Contato</span>
          <a href={contact.phoneHref}>{contact.phoneDisplay}</a>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </div>
        <a className="back-to-top" href="#inicio" aria-label="Voltar ao início">
          <ArrowUp aria-hidden="true" />
        </a>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} Renova Clínica Integrada.</p>
        <p>Campo Novo do Parecis</p>
      </div>
    </footer>
  );
}

export default Footer;
