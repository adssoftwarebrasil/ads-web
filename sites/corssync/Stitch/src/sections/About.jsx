import Icon from "../components/Icon";

function About() {
  return (
    <section className="about section" id="sobre">
      <div className="about__pattern" aria-hidden="true" />
      <div className="container about__grid">
        <div className="about__visual reveal">
          <div className="about__logo-frame">
            <img
              src="/assets/kadima-brand.jpg"
              alt="Logotipo da Kadima Soluções em Informática"
            />
          </div>
          <div className="about__stamp">
            <span>Pioneira</span>
            <strong>Tanque de tinta</strong>
          </div>
        </div>

        <div className="about__copy reveal reveal--delay-1">
          <span className="section-kicker section-kicker--dark">
            Uma história de evolução
          </span>
          <h2>Mais de 15 anos de pioneirismo em Seropédica.</h2>
          <p className="about__lead">
            A Kadima é pioneira em impressoras jato de tinta com tanque na
            região, atendendo equipamentos Epson, Canon, Brother e HP.
          </p>
          <p>
            A empresa investe em novas tecnologias e na qualificação da equipe
            para oferecer serviços com qualidade e rapidez, em um ponto
            estratégico e amplo.
          </p>

          <div className="about__facts">
            <div>
              <strong>15+</strong>
              <span>anos de atuação</span>
            </div>
            <div>
              <Icon name="printer" size={25} />
              <span>
                Especialização em
                <strong> impressoras com tanque</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

