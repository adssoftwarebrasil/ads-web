import { useRef, useState } from "react";
import Icon from "../components/Icon";
import { makeWhatsappLink, services } from "../data/siteData";

function ServiceExplorer() {
  const [activeId, setActiveId] = useState(services[0].id);
  const tabRefs = useRef([]);
  const activeService =
    services.find((service) => service.id === activeId) ?? services[0];

  const handleTabKeyDown = (event, index) => {
    if (!["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft"].includes(event.key)) {
      return;
    }

    event.preventDefault();
    const step =
      event.key === "ArrowDown" || event.key === "ArrowRight" ? 1 : -1;
    const nextIndex = (index + step + services.length) % services.length;
    setActiveId(services[nextIndex].id);
    tabRefs.current[nextIndex]?.focus();
  };

  return (
    <section className="services section" id="solucoes">
      <div className="container">
        <div className="section-heading services__heading reveal">
          <div>
            <span className="section-kicker">Soluções Kadima</span>
            <h2>Técnica para resolver. Experiência para orientar.</h2>
          </div>
          <p>
            Escolha o tipo de atendimento e veja como a Kadima pode cuidar do
            seu equipamento.
          </p>
        </div>

        <div className="service-console reveal reveal--delay-1">
          <div
            aria-label="Categorias de serviços"
            className="service-console__tabs"
            role="tablist"
          >
            {services.map((service, index) => {
              const isActive = activeService.id === service.id;
              return (
                <button
                  aria-controls={`panel-${service.id}`}
                  aria-selected={isActive}
                  className={isActive ? "is-active" : ""}
                  id={`tab-${service.id}`}
                  key={service.id}
                  onClick={() => setActiveId(service.id)}
                  onKeyDown={(event) => handleTabKeyDown(event, index)}
                  ref={(element) => {
                    tabRefs.current[index] = element;
                  }}
                  role="tab"
                  tabIndex={isActive ? 0 : -1}
                  type="button"
                >
                  <span>{service.number}</span>
                  <strong>{service.shortTitle}</strong>
                  <Icon name="arrowRight" size={19} />
                </button>
              );
            })}
          </div>

          <article
            aria-labelledby={`tab-${activeService.id}`}
            className="service-console__panel"
            id={`panel-${activeService.id}`}
            key={activeService.id}
            role="tabpanel"
          >
            <div className="service-console__copy">
              <span className="service-console__kicker">
                {activeService.kicker}
              </span>
              <h3>{activeService.title}</h3>
              <p>{activeService.description}</p>
              <ul>
                {activeService.points.map((point) => (
                  <li key={point}>
                    <span>
                      <Icon name="check" size={16} strokeWidth={2.4} />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
              <a
                className="button button--yellow"
                href={makeWhatsappLink(activeService.whatsappMessage)}
                rel="noreferrer"
                target="_blank"
              >
                {activeService.cta}
                <Icon name="arrowRight" size={19} />
              </a>
            </div>

            <div className="service-console__visual" aria-hidden="true">
              <span className="service-console__visual-number">
                {activeService.number}
              </span>
              <span className="service-console__visual-icon">
                <Icon name={activeService.icon} size={86} strokeWidth={1.25} />
              </span>
              <div className="service-console__signal">
                <i />
                <i />
                <i />
                <i />
              </div>
              <span className="service-console__status">
                <i />
                Atendimento disponível
              </span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default ServiceExplorer;

