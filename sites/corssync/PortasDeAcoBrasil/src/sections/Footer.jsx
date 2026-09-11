import logo from "../assets/images/logo-portas-de-aco-brasil.jpg";
import Icon from "../components/Icon";
import { contact } from "../data/contact";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <a className="brand brand--footer" href="#inicio" aria-label="Voltar ao início">
          <img src={logo} alt="Portas de Aço Brasil" />
          <span>Pará</span>
        </a>
        <p>Portas, portões e estruturas metálicas em Santarém e cidades vizinhas.</p>
        <div className="footer__contacts">
          <a href={contact.phoneHref} aria-label={`Ligar para ${contact.phoneDisplay}`}>
            {contact.phoneDisplay}
          </a>
          <a
            href={contact.instagramHref}
            target="_blank"
            rel="noreferrer"
            aria-label="Portas de Aço Brasil Pará no Instagram"
          >
            <Icon name="instagram" size={19} />
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
