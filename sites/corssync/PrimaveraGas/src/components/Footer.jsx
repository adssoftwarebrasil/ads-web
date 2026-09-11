import { ArrowUp, MapPin } from 'lucide-react';
import { navigation, whatsappUrl } from '../data/business';
import logo from '../assets/logo-primavera.png';
import WhatsAppIcon from './WhatsAppIcon';

export default function Footer() {
  return (
    <>
      <footer className="site-footer">
        <div className="container">
          <div className="footer-main">
            <a
              href="#inicio"
              className="brand footer-brand"
              aria-label="Primavera Gás — voltar ao início"
            >
              <img src={logo} alt="Primavera Gás" width="300" height="300" />
            </a>
            <p>
              O gás e a água de todo dia.
              <br />
              <strong>A confiança de 30 anos.</strong>
            </p>
            <nav aria-label="Navegação do rodapé">
              {navigation.map((item) => (
                <a href={item.href} key={item.href}>
                  {item.label}
                </a>
              ))}
            </nav>
            <a
              className="back-top"
              href="#inicio"
              aria-label="Voltar ao início"
            >
              <ArrowUp size={21} aria-hidden="true" />
            </a>
          </div>
          <div className="footer-bottom">
            <span>
              © {new Date().getFullYear()} Primavera Gás. Todos os direitos
              reservados.
            </span>
            <span>
              <MapPin size={14} aria-hidden="true" /> Sinop, Mato Grosso
            </span>
          </div>
        </div>
      </footer>
      <a
        href={whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
        aria-label="Pedir gás ou água pelo WhatsApp"
      >
        <WhatsAppIcon size={26} />
        <span>Faça seu pedido</span>
      </a>
    </>
  );
}
