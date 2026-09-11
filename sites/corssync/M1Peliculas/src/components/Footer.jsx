import { ArrowUp, Instagram, Facebook } from "lucide-react";
import { business } from "../data/business";
import Logo from "./Logo";
import WhatsAppLink from "./WhatsAppLink";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container footer-main">
          <a href="#inicio" aria-label="M1 Películas — voltar ao início">
            <Logo />
          </a>
          <p>
            Proteção, conforto e estilo.
            <br />
            <span>O cuidado que o seu carro merece.</span>
          </p>
          <div className="footer-socials">
            <a
              href={business.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da M1 Películas"
            >
              <Instagram size={20} />
            </a>
            <a
              href={business.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook da M1 Películas"
            >
              <Facebook size={20} />
            </a>
            <a href="#inicio" aria-label="Voltar ao início">
              <ArrowUp size={20} />
            </a>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>
            © {new Date().getFullYear()} M1 Películas. Todos os direitos
            reservados.
          </span>
          <span>Pedra Branca, Palhoça / SC</span>
        </div>
      </footer>
      <WhatsAppLink
        className="floating-whatsapp"
        arrow={false}
        aria-label="Falar com a M1 Películas no WhatsApp"
      >
        <span className="floating-label">Vamos conversar?</span>
      </WhatsAppLink>
    </>
  );
}
