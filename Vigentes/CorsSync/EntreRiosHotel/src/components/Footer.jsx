import { ArrowUpRight } from "lucide-react";
import { hotel, whatsappUrl } from "../data/hotel";
import { Brand } from "./Header";
import ReservationLink from "./ReservationLink";
import WhatsAppIcon from "./WhatsAppIcon";

function Instagram({ size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function Facebook({ size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M14 21v-8h3l.5-3H14V8c0-1 .4-1.5 1.5-1.5H18V3.3c-.8-.2-1.7-.3-2.5-.3C12 3 10 4.8 10 8v2H7v3h3v8" />
    </svg>
  );
}

export default function Footer() {
  return (
    <>
      <section className="closing-cta" aria-labelledby="closing-title">
        <div className="container closing-inner">
          <div>
            <p className="eyebrow">A SUA PRÓXIMA BOA LEMBRANÇA</p>
            <h2 id="closing-title">
              O destino é Paraíso.
              <br />
              <em>O seu lugar é aqui.</em>
            </h2>
          </div>
          <div className="closing-action">
            <ReservationLink>Vamos planejar sua estadia?</ReservationLink>
            <p>Fale com quem vai receber você.</p>
          </div>
        </div>
      </section>
      <footer className="site-footer">
        <div className="container footer-main">
          <div>
            <Brand footer />
            <p>
              Há 20 anos, fazendo da hospitalidade
              <br />o melhor motivo para voltar.
            </p>
          </div>
          <nav aria-label="Navegação do rodapé">
            <span>EXPLORE O HOTEL</span>
            <a href="#o-hotel">O hotel</a>
            <a href="#acomodacoes">Acomodações</a>
            <a href="#comodidades">Comodidades</a>
            <a href="#galeria">Nossa galeria</a>
          </nav>
          <div className="footer-contact">
            <span>FALE COM A GENTE</span>
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
              {hotel.phoneDisplay}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <a href={`mailto:${hotel.email}`}>{hotel.email}</a>
            <p>Recepção 24 horas.</p>
          </div>
          <div className="footer-social">
            <span>ACOMPANHE</span>
            <div>
              <a
                href={hotel.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram do Entre Rios Hotel"
              >
                <Instagram size={20} />
              </a>
              <a
                href={hotel.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook do Entre Rios Hotel"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>
            © {new Date().getFullYear()} Entre Rios Hotel. Todos os direitos
            reservados.
          </span>
          <span>PARAÍSO DO TOCANTINS · TO</span>
        </div>
      </footer>
      <a
        className="floating-whatsapp"
        href={whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com o Entre Rios Hotel pelo WhatsApp"
      >
        <WhatsAppIcon size={27} />
        <span>Vamos conversar?</span>
      </a>
    </>
  );
}
