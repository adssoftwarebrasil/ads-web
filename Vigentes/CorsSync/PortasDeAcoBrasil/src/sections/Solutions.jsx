import Reveal from "../components/Reveal";
import SectionIntro from "../components/SectionIntro";
import { services } from "../data/siteData";

function Solutions() {
  return (
    <section className="section solutions" id="solucoes">
      <div className="container">
        <Reveal className="solutions__heading">
          <SectionIntro
            eyebrow="Soluções em aço"
            title="Do acesso da sua casa à estrutura do seu galpão."
            description="Cada projeto parte da necessidade do cliente para chegar a uma solução segura, resistente e adequada ao espaço."
          />
          <p className="solutions__note">E outros projetos sob consulta.</p>
        </Reveal>

        <div className="solutions__grid">
          {services.map((service, index) => (
            <Reveal
              as="article"
              className="solution-card"
              delay={index * 55}
              key={service.title}
            >
              <span className="solution-card__number">{service.number}</span>
              <div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Solutions;
