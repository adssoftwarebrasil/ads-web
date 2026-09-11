const milestones = [
  {
    number: "01",
    title: "Raízes japonesas",
    text: "Os avós da família Amano imigraram do Japão e escolheram Bastos, a Capital do Ovo, para construir uma nova história.",
  },
  {
    number: "02",
    title: "Granja Amano",
    text: "Dedicação, honestidade e compromisso com a qualidade atravessaram gerações e sustentam mais de seis décadas de produção.",
  },
  {
    number: "03",
    title: "Mais perto de você",
    text: "Há 2 anos, a loja e distribuidora em Ribeirão Preto aproximam essa tradição de famílias, comércios e revendedores da região.",
  },
];

export default function Story() {
  return (
    <section className="story section" id="origem">
      <div className="story__kanji" aria-hidden="true">家</div>
      <div className="container">
        <div className="section-intro section-intro--split" data-reveal>
          <div>
            <p className="eyebrow eyebrow--orange">Nossa origem</p>
            <h2>Uma história de família, feita para durar gerações.</h2>
          </div>
          <p>
            De Bastos para Ribeirão Preto, a família Amano mantém vivo um jeito de
            trabalhar em que cada detalhe importa — da criação à entrega.
          </p>
        </div>

        <div className="story-line" data-reveal>
          {milestones.map((milestone) => (
            <article className="story-line__item" key={milestone.number}>
              <span>{milestone.number}</span>
              <div>
                <h3>{milestone.title}</h3>
                <p>{milestone.text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="story__quote" data-reveal>
          <span className="story__quote-mark" aria-hidden="true">“</span>
          <p>
            Qualidade, confiança e pontualidade não são apenas diferenciais.
            <strong> São valores da família Amano.</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
