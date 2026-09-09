import { useState } from "react";
import {
  ArrowUpRight,
  Check,
  Droplets,
  Gauge,
  Leaf,
  ThermometerSun,
} from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { contact, serviceGroups } from "../data/siteData";

const icons = [Droplets, ThermometerSun, Gauge, Leaf];

export function ServiceExplorer() {
  const [activeId, setActiveId] = useState(serviceGroups[0].id);
  const activeIndex = serviceGroups.findIndex((group) => group.id === activeId);
  const activeGroup = serviceGroups[activeIndex];

  return (
    <section className="section services" id="solucoes">
      <div className="container">
        <div data-reveal>
          <SectionHeading
            eyebrow="Soluções conectadas"
            title="Tudo o que sua piscina precisa, em um só lugar."
            description="Da rotina da água aos equipamentos, cada solução parte da necessidade real do seu espaço."
          />
        </div>

        <div className="services__layout" data-reveal>
          <div
            className="services__tabs"
            role="tablist"
            aria-label="Categorias de soluções"
          >
            {serviceGroups.map((group, index) => {
              const Icon = icons[index];
              const isActive = group.id === activeId;

              return (
                <button
                  key={group.id}
                  id={`tab-${group.id}`}
                  className={`service-tab${isActive ? " is-active" : ""}`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${group.id}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveId(group.id)}
                >
                  <span className="service-tab__index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="service-tab__icon">
                    <Icon size={22} />
                  </span>
                  <span className="service-tab__copy">
                    <small>{group.eyebrow}</small>
                    <strong>{group.title}</strong>
                  </span>
                </button>
              );
            })}
          </div>

          <article
            key={activeGroup.id}
            id={`panel-${activeGroup.id}`}
            className="service-panel"
            role="tabpanel"
            aria-labelledby={`tab-${activeGroup.id}`}
          >
            <div className="service-panel__image">
              <img src={activeGroup.image} alt={activeGroup.imageAlt} />
              <span className="service-panel__number">
                {String(activeIndex + 1).padStart(2, "0")}
              </span>
            </div>

            <div className="service-panel__body">
              <span className="eyebrow">{activeGroup.eyebrow}</span>
              <h3>{activeGroup.title}</h3>
              <p>{activeGroup.description}</p>

              <ul>
                {activeGroup.services.map((service) => (
                  <li key={service}>
                    <Check size={17} aria-hidden="true" />
                    {service}
                  </li>
                ))}
              </ul>

              <a
                className="text-arrow-link"
                href={contact.whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                Conversar sobre esta solução
                <ArrowUpRight size={18} />
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
