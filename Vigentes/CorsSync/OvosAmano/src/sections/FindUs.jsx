import Icon from "../components/Icon";

export default function FindUs() {
  return (
    <section className="find-us section" id="encontre">
      <div className="container">
        <div className="find-us__card" data-reveal>
          <div className="find-us__seal" aria-hidden="true">
            <span>直</span>
            <small>direto</small>
          </div>
          <div className="find-us__copy">
            <p className="eyebrow eyebrow--light">Loja + distribuidora</p>
            <h2>Da granja para Ribeirão Preto.</h2>
            <p>
              Nossa unidade aproxima o frescor e a tradição Amano de consumidores,
              cozinhas profissionais, comércios e revendedores da região.
            </p>
            <div className="find-us__location">
              <Icon name="map" size={28} />
              <div>
                <span>Atendimento local</span>
                <strong>Ribeirão Preto · SP</strong>
              </div>
            </div>
          </div>
          <div className="find-us__facts">
            <div><strong>2</strong><span>anos de loja e distribuidora</span></div>
            <div><strong>60+</strong><span>anos de história na produção</span></div>
            <div><strong>2</strong><span>modalidades: atacado e varejo</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
