import { ArrowUp, Camera, MessageCircle } from "lucide-react";
import { brand, contact, navigation, whatsappUrl } from "../data/siteData";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <a className="brand" href="#inicio" aria-label="FRT Veículos - voltar ao início">
            <img src={brand.logo} alt="" width="58" height="58" />
            <span>
              <strong>FRT</strong>
              <small>Veículos</small>
            </span>
          </a>
          <p>Compra, venda e troca de veículos com atendimento próximo no Centro de Trindade.</p>
        </div>

        <div className="footer-column">
          <strong>Navegue</strong>
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </div>

        <div className="footer-column">
          <strong>Fale com a FRT</strong>
          <a href={whatsappUrl} target="_blank" rel="noreferrer">
            <MessageCircle size={17} aria-hidden="true" /> {contact.phoneDisplay}
          </a>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <a href={contact.instagram} target="_blank" rel="noreferrer">
            <Camera size={17} aria-hidden="true" /> @frt.veiculos
          </a>
        </div>

        <a className="footer-top" href="#inicio" aria-label="Voltar ao início">
          <ArrowUp size={21} aria-hidden="true" />
        </a>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} FRT Veículos</span>
        <span>Centro de Trindade</span>
      </div>
    </footer>
  );
}

export default Footer;
