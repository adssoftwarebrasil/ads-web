import Brand from "./Brand";
import Icon from "./Icon";
import { company, navigation } from "../data/siteData";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Brand inverse />
          <p>
            Manutenção, venda e locação de impressoras, notebooks e
            computadores em Seropédica e região.
          </p>
          <a
            className="footer__social"
            href={company.facebook}
            rel="noreferrer"
            target="_blank"
            aria-label="Acessar Facebook da Kadima"
          >
            <Icon name="facebook" size={19} />
            Facebook
          </a>
        </div>

        <div className="footer__column">
          <h2>Navegação</h2>
          <ul>
            {navigation.slice(1).map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__column">
          <h2>Contato</h2>
          <ul>
            <li>
              <a href={`tel:${company.phoneHref}`}>{company.phoneDisplay}</a>
            </li>
            <li>{company.address}</li>
          </ul>
        </div>

        <div className="footer__column">
          <h2>Funcionamento</h2>
          <ul>
            <li>Segunda a quinta</li>
            <li>
              <strong>8h às 19h</strong>
            </li>
            <li>Sexta</li>
            <li>
              <strong>8h às 17h</strong>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>
          © {new Date().getFullYear()} {company.fullName}.
        </span>
        <a href="#inicio">Voltar ao início ↑</a>
      </div>
    </footer>
  );
}

export default Footer;
