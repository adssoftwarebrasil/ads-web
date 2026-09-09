import { ArrowDownRight, ArrowUpRight, Clock3, MapPin } from "lucide-react";
import Reveal from "../components/Reveal";
import { contact } from "../data/siteData";
import suite from "../assets/images/suite-casal.webp";
import fachada from "../assets/images/fachada.webp";
import sala from "../assets/images/apartamento-sala-detalhe.webp";

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-grain" aria-hidden="true" />
      <div className="hero-inner container">
        <Reveal className="hero-copy">
          <div className="hero-kicker">
            <span><MapPin aria-hidden="true" /> Centro de Luziânia</span>
            <span><Clock3 aria-hidden="true" /> Atendimento 24h</span>
          </div>
          <h1>
            Sua casa, <em>mesmo longe</em> de casa.
          </h1>
          <p className="hero-lead">
            Há mais de 10 anos, conforto, descanso e tranquilidade no coração de Luziânia.
          </p>
          <div className="hero-actions">
            <a className="button" href={contact.whatsappHref} target="_blank" rel="noreferrer">
              Consultar disponibilidade <ArrowUpRight aria-hidden="true" />
            </a>
            <a className="text-link" href="#acomodacoes">
              Conhecer acomodações <ArrowDownRight aria-hidden="true" />
            </a>
          </div>
          <p className="hero-note">Quartos • Apartamentos mobiliados • Estadias temporárias</p>
        </Reveal>

        <Reveal className="hero-visual">
          <figure className="hero-main-photo">
            <img src={suite} alt="Quarto de casal preparado na Pousada Luziânia" />
            <figcaption>Um descanso com clima de casa</figcaption>
          </figure>
          <figure className="hero-small-photo hero-facade-photo">
            <img src={fachada} alt="Fachada da Pousada Luziânia" />
          </figure>
          <figure className="hero-small-photo hero-room-photo">
            <img src={sala} alt="Sala de apartamento mobiliado" />
          </figure>
          <div className="hero-seal" aria-label="Mais de 10 anos recebendo bem">
            <strong>+10</strong>
            <span>anos<br />recebendo bem</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Hero;
