import { MoveUpRight, Scissors } from "lucide-react";
import photo from "../assets/images/sofa-retratil-amplo.webp";
import WhatsAppLink from "../components/WhatsAppLink.jsx";

export default function Restoration() {
  return (
    <section
      className="restoration-section"
      id="reformas"
      aria-labelledby="restoration-title"
    >
      <div className="container restoration-inner">
        <div className="restoration-content">
          <span className="eyebrow">
            <Scissors size={17} /> REFORMA DE ESTOFADOS
          </span>
          <h2 id="restoration-title">
            Seu móvel tem história.
            <br />
            <em>Dê a ele um novo começo.</em>
          </h2>
          <p>
            Renove o conforto, a beleza e o acabamento de quem já faz parte da
            sua casa. A Wilson Estofados transforma sofás, poltronas e cadeiras
            estofadas.
          </p>
          <div className="restoration-types">
            <span>Sofás</span>
            <span>Poltronas</span>
            <span>Cadeiras</span>
          </div>
          <WhatsAppLink
            className="button button-cream"
            message="Olá, Wilson Estofados! Gostaria de solicitar uma avaliação para reformar meu estofado. Posso enviar algumas fotos?"
          >
            Quero renovar meu estofado
          </WhatsAppLink>
          <span className="restoration-hint">
            Envie fotos do seu móvel e conte o que deseja renovar.
          </span>
        </div>
        <div className="restoration-photo">
          <img
            src={photo}
            width="1280"
            height="960"
            alt="Sofá amplo com acabamento estofado em tom neutro"
            loading="lazy"
          />
          <div className="restoration-photo-note">
            <span>
              Novas possibilidades.
              <br />
              <strong>O mesmo lugar especial.</strong>
            </span>
            <MoveUpRight size={30} strokeWidth={1.2} />
          </div>
        </div>
      </div>
    </section>
  );
}
