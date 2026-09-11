import { ArrowUpRight } from "lucide-react";
import { photos } from "../data/hotel";

export default function HotelStory() {
  return (
    <section
      id="o-hotel"
      className="section hotel-story container"
      aria-labelledby="story-title"
    >
      <div className="story-visual">
        <img
          src={photos.lounge}
          width="1280"
          height="963"
          alt="Ambiente acolhedor da sala de estar do Entre Rios Hotel"
          loading="lazy"
        />
        <div className="anniversary">
          <span>20</span>
          <div>
            ANOS DE PORTAS ABERTAS
            <br />E BOAS-VINDAS.
          </div>
        </div>
        <div className="photo-caption">
          <span>ENTRE RIOS HOTEL</span>
          <span>Hospitalidade que aproxima.</span>
        </div>
      </div>
      <div className="story-copy">
        <p className="eyebrow">MUITO PRAZER, ENTRE RIOS</p>
        <h2 id="story-title">
          Mais que uma parada.
          <br />
          <em>Um lugar para ficar bem.</em>
        </h2>
        <p>
          Tem coisas que fazem toda a diferença em uma viagem: ser recebido com
          atenção, encontrar um quarto confortável e começar o dia com um café
          preparado com carinho.
        </p>
        <p>
          Há 20 anos, é assim que recebemos nossos hóspedes em Paraíso do
          Tocantins. Seja a trabalho, de passagem ou em família, aqui você
          encontra cuidado em cada estadia.
        </p>
        <a className="text-link" href="#comodidades">
          Descubra o que espera por você{" "}
          <ArrowUpRight size={18} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
