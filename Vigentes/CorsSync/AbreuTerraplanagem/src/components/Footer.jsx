import logo from "../assets/images/logo-abreu.png";
import { contact, navigation } from "../data/siteData";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__top">
        <a className="footer__brand" href="#inicio" aria-label="Voltar ao início">
          <img src={logo} alt="Abreu Terraplenagem" />
        </a>
        <nav aria-label="Navegação do rodapé">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="footer__contact">
          <a href={`tel:+${contact.phoneDigits}`}>{contact.phoneDisplay}</a>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </div>
      </div>
      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} Abreu Terraplenagem.</span>
        <span>Locação de tratores de esteira e escavadeiras hidráulicas.</span>
      </div>
    </footer>
  );
}

export default Footer;
