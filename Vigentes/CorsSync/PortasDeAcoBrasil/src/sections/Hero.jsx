import Icon from "../components/Icon";
import heroImage from "../assets/images/porta-residencial-cinza.jpg";
import detailImage from "../assets/images/porta-galpao-azul-marinho.jpg";

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__slats" aria-hidden="true" />
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="eyebrow eyebrow--yellow">Santarém, Pará • há quase 7 anos</p>
          <h1>
            Aço que protege.
            <span> Movimento que facilita.</span>
          </h1>
          <p className="hero__lead">
            Portas automáticas e manuais, portões, fachadas e estruturas metálicas
            produzidos com atendimento próximo, rapidez e qualidade.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="#solucoes">
              Conheça as soluções
              <Icon name="arrow" size={20} />
            </a>
            <a className="text-link" href="#projetos">
              Ver projetos realizados
            </a>
          </div>

          <dl className="hero__facts" aria-label="Destaques da empresa">
            <div>
              <dt>Quase 7 anos</dt>
              <dd>atuando em Santarém</dd>
            </div>
            <div>
              <dt>Do projeto à montagem</dt>
              <dd>cuidado em cada etapa</dd>
            </div>
          </dl>
        </div>

        <div className="hero__visual">
          <div className="hero__image-frame">
            <img
              className="hero__image"
              src={heroImage}
              alt="Portas de aço cinza instaladas em uma residência"
            />
            <div className="hero__image-label">
              <span>Projeto instalado</span>
              <strong>Aço sob medida</strong>
            </div>
          </div>
          <div className="hero__detail-card">
            <img src={detailImage} alt="Porta azul-marinho instalada em galpão" />
            <span>Residencial</span>
            <span>Comercial</span>
            <span>Industrial</span>
          </div>
        </div>
      </div>

      <div className="hero__values" aria-label="Diferenciais">
        <div className="container hero__values-inner">
          <span>Atendimento próximo</span>
          <span>Rapidez na execução</span>
          <span>Compromisso com a qualidade</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
