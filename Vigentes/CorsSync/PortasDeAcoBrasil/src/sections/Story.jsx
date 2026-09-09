import Reveal from "../components/Reveal";
import brandedProject from "../assets/images/entrega-porta-amarela.jpg";

const values = [
  {
    title: "Atendimento",
    description: "Proximidade para entender o espaço, a necessidade e o resultado esperado.",
  },
  {
    title: "Rapidez",
    description: "Agilidade na execução com atenção aos detalhes de cada etapa.",
  },
  {
    title: "Qualidade",
    description: "Compromisso com soluções seguras, resistentes e bem acabadas.",
  },
];

function Story() {
  return (
    <section className="section story" id="empresa">
      <div className="container story__grid">
        <Reveal className="story__media">
          <div className="story__photo">
            <img src={brandedProject} alt="Entrega de porta automática amarela concluída" loading="lazy" />
          </div>
          <div className="story__stamp" aria-label="Quase 7 anos em Santarém">
            <strong>7</strong>
            <span>anos de história<br />em Santarém</span>
          </div>
        </Reveal>

        <Reveal className="story__content" delay={80}>
          <p className="eyebrow">Nossa trajetória</p>
          <h2>Conhecimento compartilhado que virou compromisso com cada entrega.</h2>
          <p>
            A Portas de Aço Brasil nasceu da experiência apresentada por um irmão,
            que compartilhou todas as etapas do serviço — da produção à montagem.
            Esse conhecimento abriu caminho para a empresa iniciar sua trajetória
            em Santarém.
          </p>
          <p>
            Desde então, a equipe vem conquistando espaço com soluções adequadas a
            cada cliente e uma forma de trabalhar baseada em responsabilidade,
            cuidado e presença durante o projeto.
          </p>

          <div className="story__values">
            {values.map((value, index) => (
              <article key={value.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Story;
