import Icon from "../components/Icon";

const strengths = [
  {
    className: "trust-card--orange",
    icon: "trace",
    title: "Rastreabilidade",
    text: "Identificação de lotes para reforçar procedência, controle e segurança.",
  },
  {
    className: "trust-card--cream",
    icon: "shield",
    title: "Controle de qualidade",
    text: "Cuidado da alimentação das aves à seleção, classificação e distribuição.",
  },
  {
    className: "trust-card--white",
    icon: "truck",
    title: "Frescor e pontualidade",
    text: "Menor tempo entre produção e venda, com atendimento atento aos prazos.",
  },
  {
    className: "trust-card--outline",
    icon: "people",
    title: "Relação próxima",
    text: "Suporte personalizado para pequenas compras ou grandes volumes.",
  },
];

export default function Trust() {
  return (
    <section className="trust section">
      <div className="container">
        <div className="trust__title" data-reveal>
          <p className="eyebrow eyebrow--orange">O jeito Amano</p>
          <h2>Confiança construída<br />em cada detalhe.</h2>
        </div>
        <div className="trust-grid" data-reveal>
          {strengths.map((item) => (
            <article className={`trust-card ${item.className}`} key={item.title}>
              <Icon name={item.icon} size={30} />
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
