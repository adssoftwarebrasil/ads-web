import { ArrowUpRight } from "lucide-react";
import Reveal from "../components/Reveal";
import historyImage from "../assets/images/trator-d61-pronto.webp";
import sunsetImage from "../assets/images/operacao-por-do-sol.webp";
import { whatsappUrl } from "../data/siteData";

function History() {
  return (
    <section className="history" id="historia">
      <div className="history__track" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="container history__layout">
        <Reveal className="history__content">
          <p className="eyebrow">Uma história construída no trabalho</p>
          <h2>Do jardim às grandes obras.</h2>
          <p>
            A história começou com o Sr. José Abreu e seus pais, que trabalhavam com jardinagem e sonhavam em alcançar obras maiores. Em 1977, no estado de São Paulo, nasceu a Abreu Terraplenagem.
          </p>
          <p>
            Desde então, a empresa já atuou em obras por todo o Brasil e mantém o foco na locação de tratores de esteira e escavadeiras hidráulicas.
          </p>
          <div className="history__year">
            <strong>1977</strong>
            <span>o começo de uma história em grandes obras</span>
          </div>
          <a href={whatsappUrl} target="_blank" rel="noreferrer">
            Leve essa experiência para sua obra
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </Reveal>

        <Reveal className="history__images" delay={100}>
          <img className="history__image-main" src={historyImage} alt="Trator Komatsu D61 da frota Abreu" loading="lazy" />
          <img className="history__image-small" src={sunsetImage} alt="Trator trabalhando ao pôr do sol" loading="lazy" />
          <span className="history__since">Desde 1977</span>
        </Reveal>
      </div>
    </section>
  );
}

export default History;
