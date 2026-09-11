import { useState } from 'react'
import { BedDouble, Bone, ScanLine, Stethoscope } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import consultation from '../assets/consulta-pet.jpg'
import surgery from '../assets/equipe-cirurgia.jpg'
import laserTherapy from '../assets/terapia-laser.jpg'

const services = [
  {
    id: 'consultas',
    icon: Stethoscope,
    title: 'Consultas',
    eyebrow: 'Atenção do início ao fim',
    description:
      'No RoVet Hospital Veterinário, a avaliação é cuidadosa, com prevenção e acompanhamento para cães e gatos em todas as fases da vida.',
    highlights: ['Atendimento 24 horas', 'Prevenção e acompanhamento', 'Cuidado individualizado'],
    image: consultation,
    alt: 'Profissional realizando atendimento veterinário em um pet',
  },
  {
    id: 'diagnostico',
    icon: ScanLine,
    title: 'Diagnóstico',
    eyebrow: 'Respostas com agilidade',
    description:
      'Estrutura de imagem e laboratório da RoVet Hospital Veterinário para apoiar decisões com mais precisão.',
    highlights: ['Raio-X e ultrassom', 'Eletrocardiograma', 'Laboratório hematológico'],
    image: laserTherapy,
    alt: 'Paciente veterinário recebendo terapia a laser',
  },
  {
    id: 'cirurgias',
    icon: Bone,
    title: 'Cirurgias',
    eyebrow: 'Segurança em cada etapa',
    description:
      'Procedimentos de tecidos moles, ortopédicos com especialista e oftálmicos, acompanhados por anestesista.',
    highlights: ['Anestesia inalatória', 'Ortopedista especialista', 'Monitoramento do paciente'],
    image: surgery,
    alt: 'Equipe veterinária realizando uma cirurgia com monitoramento do paciente',
  },
  {
    id: 'internacao',
    icon: BedDouble,
    title: 'Internação',
    eyebrow: 'Acompanhamento contínuo',
    description:
      'Ambiente preparado para observação e suporte, com profissionais presentes também durante a madrugada.',
    highlights: ['Equipe presente 24h', 'Acompanhamento contínuo', 'Ambiente hospitalar'],
    image: laserTherapy,
    alt: 'Cuidado clínico realizado em paciente veterinário',
  },
]

function Care() {
  const [activeId, setActiveId] = useState(services[0].id)
  const activeService = services.find((service) => service.id === activeId)

  return (
    <section className="section care-section" id="atendimento">
      <div className="container">
        <SectionHeading
          eyebrow="Cuidado completo"
          title="Da primeira avaliação à recuperação."
          description="Uma jornada de cuidado integrada para agir com atenção, precisão e acolhimento quando seu pet mais precisa."
        />

        <div className="service-explorer" data-reveal>
          <div className="service-tabs" role="tablist" aria-label="Serviços veterinários">
            {services.map((service) => {
              const Icon = service.icon
              const isActive = service.id === activeId

              return (
                <button
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${service.id}`}
                  id={`tab-${service.id}`}
                  className={isActive ? 'is-active' : ''}
                  key={service.id}
                  onClick={() => setActiveId(service.id)}
                >
                  <Icon aria-hidden="true" />
                  <span>{service.title}</span>
                </button>
              )
            })}
          </div>

          <div
            className="service-panel"
            role="tabpanel"
            id={`panel-${activeService.id}`}
            aria-labelledby={`tab-${activeService.id}`}
          >
            <div className="service-panel__content">
              <span className="eyebrow">{activeService.eyebrow}</span>
              <h3>{activeService.title}</h3>
              <p>{activeService.description}</p>
              <ul>
                {activeService.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              <a
                className="text-link"
                href="https://wa.me/5563999466901?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20atendimento%20da%20Rovet."
                target="_blank"
                rel="noreferrer"
              >
                Conversar com a equipe
              </a>
            </div>
            <div className="service-panel__image">
              <img src={activeService.image} alt={activeService.alt} loading="lazy" />
              <span>Cuidado feito de perto</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Care
