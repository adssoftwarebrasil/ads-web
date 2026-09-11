import { useState } from "react";
import {
  Baby,
  BadgePlus,
  Flower2,
  HeartPulse,
  Orbit,
  ScanFace,
  ShieldPlus,
  Smile,
  Sparkles,
  Stethoscope,
  Syringe,
} from "lucide-react";
import { serviceGroups } from "../data/content";
import Reveal from "./Reveal";

const icons = {
  Baby,
  BadgePlus,
  Flower2,
  HeartPulse,
  Orbit,
  ScanFace,
  ShieldPlus,
  Smile,
  Sparkles,
  Stethoscope,
  Syringe,
};

function ServiceTabs() {
  const [activeGroup, setActiveGroup] = useState(serviceGroups[0].id);
  const selectedGroup = serviceGroups.find((group) => group.id === activeGroup);

  return (
    <div className="services-panel">
      <div className="services-tabs" role="tablist" aria-label="Áreas de atendimento">
        {serviceGroups.map((group) => (
          <button
            key={group.id}
            id={`tab-${group.id}`}
            type="button"
            role="tab"
            aria-selected={activeGroup === group.id}
            aria-controls={`panel-${group.id}`}
            onClick={() => setActiveGroup(group.id)}
          >
            <span>{group.label}</span>
            <span className="tab-count">0{group.services.length}</span>
          </button>
        ))}
      </div>

      <div
        key={selectedGroup.id}
        id={`panel-${selectedGroup.id}`}
        className="service-tabpanel"
        role="tabpanel"
        aria-labelledby={`tab-${selectedGroup.id}`}
        tabIndex="0"
      >
        <p className="service-group-eyebrow">{selectedGroup.eyebrow}</p>
        <div className="service-grid">
          {selectedGroup.services.map((service, index) => {
            const Icon = icons[service.icon];
            return (
              <Reveal key={service.title} className="service-card" delay={index * 45}>
                <div className="service-icon">
                  <Icon size={22} strokeWidth={1.55} aria-hidden="true" />
                </div>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ServiceTabs;
