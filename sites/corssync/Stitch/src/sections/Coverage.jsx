import Icon from "../components/Icon";
import { coverageAreas } from "../data/siteData";

function Coverage() {
  return (
    <section className="coverage section" id="atendimento">
      <div className="container coverage__grid">
        <div className="coverage__intro reveal">
          <span className="section-kicker">Locação de impressoras</span>
          <h2>Regiões atendidas para locação de impressoras</h2>
          <p>
            Atendemos locações de impressoras nas regiões indicadas abaixo.
          </p>
          <div className="coverage__notice">
            <Icon name="wrench" size={22} />
            <p>
              <strong>Manutenção somente na loja.</strong> Os serviços de
              manutenção de impressoras e computadores são realizados somente
              na loja. O equipamento deve ser levado até nossa unidade.
            </p>
          </div>
        </div>

        <div className="coverage__map reveal reveal--delay-1">
          <div className="coverage__route" aria-hidden="true" />
          {coverageAreas.map((area, index) => (
            <div
              className={`coverage__place coverage__place--${index + 1}`}
              key={area}
            >
              <span>
                <Icon name="mapPin" size={17} />
              </span>
              <strong>{area}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Coverage;
