import Icon from "../components/Icon";
import heroEggs from "../assets/posters/video-04.jpg";

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__orb hero__orb--one" aria-hidden="true" />
      <div className="hero__orb hero__orb--two" aria-hidden="true" />

      <div className="container hero__grid">
        <div className="hero__copy" data-reveal>
          <p className="eyebrow eyebrow--light">
            <span /> Desde Bastos (SP) · há mais de 60 anos
          </p>
          <h1>
            Tradição que chega <em>fresca</em> à sua mesa.
          </h1>
          <p className="hero__lead">
            Ovos brancos e vermelhos, do médio ao jumbo, com procedência, cuidado e
            atendimento para cada tamanho de compra.
          </p>
          <div className="hero__actions">
            <a className="button button--cream" href="#produtos">
              Ver ovos e embalagens <Icon name="arrow" size={20} />
            </a>
            <a className="text-link text-link--light" href="#origem">
              Conheça nossa origem
            </a>
          </div>
          <div className="hero__proof" aria-label="Diferenciais principais">
            <span>Atacado e varejo</span>
            <span>Procedência garantida</span>
            <span>Rastreabilidade</span>
          </div>
        </div>

        <div className="hero-visual" data-reveal data-reveal-delay="1">
          <div className="hero-visual__stamp" aria-label="Mais de 60 anos de tradição">
            <strong>60</strong>
            <span>anos de<br />tradição</span>
          </div>
          <div className="hero-visual__egg">
            <img
              src={heroEggs}
              alt="Ovos vermelhos sendo acomodados em cartelas durante o processo produtivo"
            />
          </div>
          <div className="hero-visual__note">
            <span className="hero-visual__note-dot" />
            <div>
              <small>Da granja</small>
              <strong>direto para você</strong>
            </div>
          </div>
          <div className="hero-visual__egg-shape hero-visual__egg-shape--one" aria-hidden="true" />
          <div className="hero-visual__egg-shape hero-visual__egg-shape--two" aria-hidden="true" />
        </div>
      </div>

      <a className="hero__scroll" href="#origem" aria-label="Continuar para nossa origem">
        <span />
      </a>
    </section>
  );
}
