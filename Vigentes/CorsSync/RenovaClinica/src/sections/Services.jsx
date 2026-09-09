import Reveal from "../components/Reveal";
import ServiceTabs from "../components/ServiceTabs";

function Services() {
  return (
    <section
      className="services-section section"
      id="especialidades"
      aria-labelledby="services-title"
    >
      <div className="container">
        <div className="services-heading">
          <Reveal>
            <p className="eyebrow">Especialidades integradas</p>
            <h2 id="services-title">
              Odontologia &amp; Estética. <em>Medicina &amp; Bem-estar.</em>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p>
              Conheça os cuidados disponíveis na Renova e encontre uma jornada pensada para suas
              necessidades, com avaliação profissional e acompanhamento individualizado.
            </p>
          </Reveal>
        </div>

        <ServiceTabs />

        <p className="clinical-note">
          Os tratamentos são indicados somente após avaliação profissional. A disponibilidade de
          especialidades deve ser confirmada no momento do agendamento.
        </p>
      </div>
    </section>
  );
}

export default Services;
